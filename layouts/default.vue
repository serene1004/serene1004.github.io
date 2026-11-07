<template>
  <div class="site-shell">
    <header class="site-header">
      <NuxtLink to="/" class="wordmark" aria-label="Serene1004 desktop home">
        <img class="brand-mark" src="/images/serene.png" alt="">
        <span>serene1004</span>
      </NuxtLink>
    </header>
    <main id="main-content" class="site-main"><slot /></main>
    <nav class="desktop-taskbar" aria-label="시스템 작업 표시줄">
      <div class="taskbar-start-wrap">
        <button ref="startButton" class="taskbar-start" type="button" aria-label="시작 메뉴" :aria-expanded="startMenuOpen" @click="toggleStartMenu">
          <Grid2X2 class="start-window-icon" :size="20" :stroke-width="2.5" aria-hidden="true" />
        </button>
        <section v-if="startMenuOpen" class="start-menu" aria-label="프로그램">
          <p>프로젝트 열기</p>
          <button v-for="folder in folders" :key="folder.id" type="button" @click="openFolder(folder.id)">
            <PixelFolderIcon :src="folder.icon" />{{ folder.name }}
          </button>
        </section>
      </div>
      <div ref="taskbarOpenApps" class="taskbar-open-apps" aria-label="열린 프로젝트">
        <button
          v-for="window in visibleTaskbarWindows"
          :key="window.id"
          class="taskbar-app"
          :class="{ 'is-minimized': window.minimized, 'is-active': activeWindowId === window.id }"
          type="button"
          :aria-pressed="activeWindowId === window.id"
          @click="toggleWindow(window.id)"
        >
          <PixelFolderIcon :src="getFolderIcon(window.id)" />{{ getFolderName(window.id) }}
        </button>
        <div v-if="overflowedTaskbarWindows.length" class="taskbar-more-wrap">
          <button
            ref="taskbarMoreButton"
            class="taskbar-more-button"
            :class="{ 'is-active': hasActiveOverflowWindow }"
            type="button"
            :aria-expanded="taskbarMoreOpen"
            :aria-label="taskbarMoreLabel"
            @click="toggleTaskbarMore"
          >
            ··· <span>+{{ overflowedTaskbarWindows.length }}</span>
          </button>
          <div v-if="taskbarMoreOpen" class="taskbar-more-menu" role="group" aria-label="숨겨진 열린 프로젝트">
            <button
              v-for="window in overflowedTaskbarWindows"
              :key="window.id"
              class="taskbar-more-item"
              :class="{ 'is-minimized': window.minimized, 'is-active': activeWindowId === window.id }"
              type="button"
              :aria-pressed="activeWindowId === window.id"
              @click="openOverflowWindow(window.id)"
            >
              <PixelFolderIcon :src="getFolderIcon(window.id)" />{{ getFolderName(window.id) }}
            </button>
          </div>
        </div>
        <div ref="taskbarMeasure" class="taskbar-measure" aria-hidden="true">
          <button v-for="window in windows" :key="window.id" class="taskbar-app" type="button">
            <PixelFolderIcon :src="getFolderIcon(window.id)" />{{ getFolderName(window.id) }}
          </button>
          <button ref="taskbarMoreMeasure" class="taskbar-more-button" type="button">··· <span>+{{ windows.length }}</span></button>
        </div>
      </div>
      <div class="taskbar-tray">
        <span class="tray-language" aria-label="현재 언어 한국어">KO</span>
        <details class="tray-popover weather-popover" @toggle="handlePopoverToggle">
          <summary :aria-label="`서울 날씨, ${weatherStatus}, 현재 기온 ${weatherText}`"><img class="weather-icon" :src="weatherIcon" alt="">{{ weatherText }}</summary>
          <section class="weather-card" aria-label="서울 현재 날씨">
            <div class="weather-overview">
              <div><span>서울</span><strong>{{ weatherStatus }}</strong></div>
              <strong class="weather-temperature">{{ weatherText }}</strong>
            </div>
            <dl class="weather-metrics">
              <div v-if="weather.apparent != null"><dt>체감</dt><dd>{{ Math.round(weather.apparent) }}°</dd></div>
              <div v-if="weather.humidity != null"><dt>습도</dt><dd>{{ Math.round(weather.humidity) }}%</dd></div>
              <div v-if="weather.precipitation != null"><dt>강수량</dt><dd>{{ weather.precipitation.toFixed(1) }} mm</dd></div>
              <div v-if="weather.wind != null"><dt>풍속</dt><dd>{{ Math.round(weather.wind) }} km/h</dd></div>
            </dl>
            <a class="weather-source" href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">날씨 데이터 제공: Open-Meteo</a>
          </section>
        </details>
        <details class="tray-popover calendar-popover" @toggle="handlePopoverToggle">
          <summary :aria-label="`현재 시각 ${timeText}, 날짜 ${dateText}`"><strong>{{ timeText }}</strong><span>{{ dateText }}</span></summary>
          <div class="calendar-card">
            <strong>{{ monthText }}</strong>
            <div class="calendar-grid" aria-label="이번 달 달력">
              <span v-for="day in weekDays" :key="day" class="calendar-weekday">{{ day }}</span>
              <span v-for="cell in monthCells" :key="cell.key" :class="{ 'is-today': cell.today, 'is-empty': !cell.day }">{{ cell.day }}</span>
            </div>
          </div>
        </details>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {
  computed, nextTick, onMounted, onUnmounted, ref, watch,
} from 'vue';
import { Grid2X2 } from '@lucide/vue';
import PixelFolderIcon from '~/components/PixelFolderIcon.vue';
import { folders } from '~/data/folders';
import { useDesktopWindows } from '~/composables/useDesktopWindows';

const {
  windows, activeWindowId, openWindow, toggleWindow,
} = useDesktopWindows();
const startMenuOpen = ref(false);
const taskbarMoreOpen = ref(false);
const startButton = ref<HTMLButtonElement | null>(null);
const taskbarMoreButton = ref<HTMLButtonElement | null>(null);
const taskbarOpenApps = ref<HTMLDivElement | null>(null);
const taskbarMeasure = ref<HTMLDivElement | null>(null);
const taskbarMoreMeasure = ref<HTMLButtonElement | null>(null);
const taskbarWindowLimit = ref(0);
const now = ref<Date | null>(null);
const weatherText = ref('--°');
const weatherStatus = ref('날씨 정보를 불러오는 중');
const weatherIcon = ref('/images/weather/cloudy.png');
const weather = ref<{ apparent?: number; humidity?: number; precipitation?: number; wind?: number }>({});
const dateText = computed(() => {
  if (!now.value) return '---- -- --';
  const year = now.value.getFullYear();
  const month = String(now.value.getMonth() + 1).padStart(2, '0');
  const day = String(now.value.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
});
const timeText = computed(() => {
  if (!now.value) return '-- --:--';
  const parts = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit', minute: '2-digit', hour12: true,
  }).formatToParts(now.value);
  const hour = parts.find((part) => part.type === 'hour')?.value ?? '12';
  const minute = parts.find((part) => part.type === 'minute')?.value ?? '00';
  const period = parts.find((part) => part.type === 'dayPeriod')?.value.toUpperCase() ?? 'AM';
  return `${period} ${hour}:${minute}`;
});
const monthText = computed(() => (now.value
  ? new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long' }).format(now.value)
  : ''));
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
const monthCells = computed(() => {
  if (!now.value) return [];
  const year = now.value.getFullYear();
  const month = now.value.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const length = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: Math.ceil((firstDay + length) / 7) * 7 }, (_, index) => {
    const day = index - firstDay + 1;
    return { key: index, day: day > 0 && day <= length ? day : '', today: day === now.value.getDate() };
  });
});
const visibleTaskbarWindows = computed(() => windows.value.slice(0, taskbarWindowLimit.value));
const overflowedTaskbarWindows = computed(() => windows.value.slice(taskbarWindowLimit.value));
const activeOverflowWindow = computed(() => (
  overflowedTaskbarWindows.value.find((window) => window.id === activeWindowId.value)
));
const hasActiveOverflowWindow = computed(() => Boolean(activeOverflowWindow.value));
watch(() => overflowedTaskbarWindows.value.length, (count) => {
  if (!count) taskbarMoreOpen.value = false;
});
watch(() => windows.value.map((window) => window.id).join('|'), async () => {
  await nextTick();
  updateTaskbarWindowLimit();
});
let clockInterval: ReturnType<typeof setInterval> | undefined;
let taskbarResizeObserver: ResizeObserver | undefined;

const openFolder = (id: string) => {
  openWindow(id);
  startMenuOpen.value = false;
};
const toggleStartMenu = () => {
  const shouldOpen = !startMenuOpen.value;
  if (shouldOpen) {
    closeTrayPopovers();
    taskbarMoreOpen.value = false;
  }
  startMenuOpen.value = shouldOpen;
};
const getFolderName = (id: string) => folders.find((folder) => folder.id === id)?.name ?? id;
const getFolderIcon = (id: string) => folders.find((folder) => folder.id === id)?.icon;
const taskbarMoreLabel = computed(() => {
  const activeLabel = activeOverflowWindow.value
    ? `활성 ${getFolderName(activeOverflowWindow.value.id)}, `
    : '';
  return `${activeLabel}더보기, 숨겨진 프로젝트 ${overflowedTaskbarWindows.value.length}개`;
});
const openOverflowWindow = (id: string) => {
  toggleWindow(id);
  taskbarMoreOpen.value = false;
};
const closeTrayPopovers = () => {
  document.querySelectorAll<HTMLDetailsElement>('.tray-popover[open]').forEach((popover) => {
    popover.removeAttribute('open');
  });
};
const toggleTaskbarMore = () => {
  const shouldOpen = !taskbarMoreOpen.value;
  if (shouldOpen) {
    closeTrayPopovers();
    startMenuOpen.value = false;
  }
  taskbarMoreOpen.value = shouldOpen;
};
const handlePopoverToggle = (event: Event) => {
  const current = event.currentTarget as HTMLDetailsElement;
  if (!current.open) return;
  document.querySelectorAll<HTMLDetailsElement>('.tray-popover[open]').forEach((popover) => {
    if (popover !== current) popover.removeAttribute('open');
  });
  startMenuOpen.value = false;
  taskbarMoreOpen.value = false;
};
const handleDocumentPointerDown = (event: PointerEvent) => {
  if (event.target instanceof Element && event.target.closest('.tray-popover, .taskbar-more-wrap, .taskbar-start-wrap')) return;
  closeTrayPopovers();
  taskbarMoreOpen.value = false;
  startMenuOpen.value = false;
};
const handleDocumentKeydown = (event: KeyboardEvent) => {
  if (event.key !== 'Escape') return;
  const openPopover = document.querySelector<HTMLDetailsElement>('.tray-popover[open]');
  if (!openPopover && !taskbarMoreOpen.value && !startMenuOpen.value) return;
  const focusStart = startMenuOpen.value;
  const focusMore = taskbarMoreOpen.value;
  closeTrayPopovers();
  taskbarMoreOpen.value = false;
  startMenuOpen.value = false;
  if (openPopover) openPopover.querySelector<HTMLElement>('summary')?.focus();
  else if (focusMore) taskbarMoreButton.value?.focus();
  else if (focusStart) startButton.value?.focus();
  event.preventDefault();
};
const updateTaskbarWindowLimit = () => {
  const container = taskbarOpenApps.value;
  const measure = taskbarMeasure.value;
  const moreButton = taskbarMoreMeasure.value;
  if (!container || !measure || !moreButton) return;

  const appButtons = measure.querySelectorAll<HTMLButtonElement>('.taskbar-app');
  const moreCount = moreButton.querySelector('span');
  const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0;
  const availableWidth = container.clientWidth;
  let usedWidth = 0;
  let visibleCount = 0;

  for (let index = 0; index < appButtons.length; index += 1) {
    const nextWidth = usedWidth + (index ? gap : 0) + appButtons[index].offsetWidth;
    const hasMore = index < appButtons.length - 1;
    if (hasMore && moreCount) moreCount.textContent = `+${appButtons.length - index - 1}`;
    const requiredWidth = nextWidth + (hasMore ? gap + moreButton.offsetWidth : 0);
    if (requiredWidth > availableWidth) break;
    usedWidth = nextWidth;
    visibleCount = index + 1;
  }

  if (moreCount) moreCount.textContent = `+${windows.value.length}`;
  taskbarWindowLimit.value = visibleCount;
};

onMounted(async () => {
  document.addEventListener('pointerdown', handleDocumentPointerDown);
  document.addEventListener('keydown', handleDocumentKeydown);
  now.value = new Date();
  updateTaskbarWindowLimit();
  window.addEventListener('resize', updateTaskbarWindowLimit);
  if (taskbarOpenApps.value && typeof ResizeObserver !== 'undefined') {
    taskbarResizeObserver = new ResizeObserver(updateTaskbarWindowLimit);
    taskbarResizeObserver.observe(taskbarOpenApps.value);
  }
  clockInterval = window.setInterval(() => { now.value = new Date(); }, 30_000);
  try {
    const response = await $fetch<{ current?: { temperature_2m?: number; apparent_temperature?: number; relative_humidity_2m?: number; precipitation?: number; wind_speed_10m?: number; weather_code?: number; is_day?: number } }>('https://api.open-meteo.com/v1/forecast', {
      query: {
        latitude: 37.566, longitude: 126.9784, timezone: 'Asia/Seoul', current: 'temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m,weather_code,is_day',
      },
      timeout: 5000,
    });
    const { current } = response;
    if (current?.temperature_2m == null) throw new Error('Weather unavailable');
    weatherText.value = `${Math.round(current.temperature_2m)}°`;
    weather.value = {
      apparent: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      precipitation: current.precipitation,
      wind: current.wind_speed_10m,
    };
    const code = current.weather_code ?? -1;
    const conditions: Record<number, { label: string; icon: string }> = {
      0: { label: '맑음', icon: current.is_day === 0 ? 'clear-night' : 'clear-day' },
      1: { label: '대체로 맑음', icon: current.is_day === 0 ? 'partly-cloudy-night' : 'partly-cloudy-day' },
      2: { label: '구름 조금', icon: current.is_day === 0 ? 'partly-cloudy-night' : 'partly-cloudy-day' },
      3: { label: '흐림', icon: 'cloudy' },
      45: { label: '안개', icon: 'fog' },
      48: { label: '안개', icon: 'fog' },
      51: { label: '이슬비', icon: 'drizzle' },
      53: { label: '이슬비', icon: 'drizzle' },
      55: { label: '이슬비', icon: 'drizzle' },
      56: { label: '어는 이슬비', icon: 'sleet' },
      57: { label: '어는 이슬비', icon: 'sleet' },
      61: { label: '비', icon: 'rain' },
      63: { label: '비', icon: 'rain' },
      65: { label: '비', icon: 'rain' },
      66: { label: '어는 비', icon: 'sleet' },
      67: { label: '어는 비', icon: 'sleet' },
      71: { label: '눈', icon: 'snow' },
      73: { label: '눈', icon: 'snow' },
      75: { label: '눈', icon: 'snow' },
      77: { label: '싸락눈', icon: 'snow' },
      80: { label: '소나기', icon: 'showers' },
      81: { label: '소나기', icon: 'showers' },
      82: { label: '강한 소나기', icon: 'showers' },
      85: { label: '눈 소나기', icon: 'snow' },
      86: { label: '강한 눈 소나기', icon: 'snow' },
      95: { label: '뇌우', icon: 'thunderstorm' },
      96: { label: '우박을 동반한 뇌우', icon: 'thunderstorm' },
      99: { label: '강한 우박을 동반한 뇌우', icon: 'thunderstorm' },
    };
    const condition = conditions[code];
    weatherStatus.value = condition?.label ?? '날씨 정보';
    weatherIcon.value = `/images/weather/${condition?.icon ?? 'cloudy'}.png`;
  } catch {
    weatherText.value = '--°';
    weatherStatus.value = '날씨 정보를 불러올 수 없습니다';
    weatherIcon.value = '/images/weather/cloudy.png';
    weather.value = {};
  }
});
onUnmounted(() => {
  if (clockInterval) window.clearInterval(clockInterval);
  taskbarResizeObserver?.disconnect();
  window.removeEventListener('resize', updateTaskbarWindowLimit);
  document.removeEventListener('pointerdown', handleDocumentPointerDown);
  document.removeEventListener('keydown', handleDocumentKeydown);
});
</script>
