<template>
  <nav class="desktop-taskbar" :aria-label="copy.taskbar">
    <div class="taskbar-start-wrap">
      <button ref="startButton" class="taskbar-start" type="button" :aria-label="copy.startMenu" :aria-expanded="startMenuOpen" @click="toggleStartMenu">
        <Grid2X2 class="start-window-icon" :size="24" :stroke-width="2.5" aria-hidden="true" />
      </button>
      <section v-if="startMenuOpen" class="start-menu" :aria-label="copy.programs">
        <button v-for="folder in folders" :key="folder.id" type="button" @click="openFolder(folder.id)">
          <PixelFolderIcon :src="folder.icon" />{{ folderName(folder.id) }}
        </button>
      </section>
    </div>
    <div ref="taskbarOpenApps" class="taskbar-open-apps" :aria-label="copy.openWindows">
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
        <div v-if="taskbarMoreOpen" class="taskbar-more-menu" role="group" :aria-label="copy.hiddenWindows">
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
      <button class="tray-language" type="button" :aria-label="copy.languageSwitch" @click="toggleLocale">
        {{ locale.toUpperCase() }}
      </button>
      <details class="tray-popover weather-popover" @toggle="handlePopoverToggle">
        <summary :aria-label="copy.weather.ariaLabel(weatherStatus, weatherText)"><img class="weather-icon" :src="weatherIcon" alt="">{{ weatherText }}</summary>
        <section class="weather-card" :aria-label="`${copy.weather.city} ${copy.weather.current}`">
          <div class="weather-overview">
            <div><span>{{ copy.weather.city }}</span><strong>{{ weatherStatus }}</strong></div>
            <strong class="weather-temperature">{{ weatherText }}</strong>
          </div>
          <dl class="weather-metrics">
            <div v-if="weather.apparent != null"><dt>{{ copy.weather.feelsLike }}</dt><dd>{{ Math.round(weather.apparent) }}°</dd></div>
            <div v-if="weather.humidity != null"><dt>{{ copy.weather.humidity }}</dt><dd>{{ Math.round(weather.humidity) }}%</dd></div>
            <div v-if="weather.precipitation != null"><dt>{{ copy.weather.precipitation }}</dt><dd>{{ weather.precipitation.toFixed(1) }} mm</dd></div>
            <div v-if="weather.wind != null"><dt>{{ copy.weather.wind }}</dt><dd>{{ Math.round(weather.wind) }} km/h</dd></div>
          </dl>
          <a class="weather-source" href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">{{ copy.weather.source }}</a>
        </section>
      </details>
      <details class="tray-popover calendar-popover" @toggle="handlePopoverToggle">
        <summary :aria-label="copy.calendar.ariaLabel(timeText, dateText)"><strong>{{ timeText }}</strong><span>{{ dateText }}</span></summary>
        <div class="calendar-card">
          <div class="calendar-heading">
            <button class="calendar-month-button" type="button" :aria-label="copy.calendar.previousMonth" @click="changeCalendarMonth(-1)">
              <ChevronLeft :size="16" aria-hidden="true" />
            </button>
            <strong>{{ monthText }}</strong>
            <button class="calendar-month-button" type="button" :aria-label="copy.calendar.nextMonth" @click="changeCalendarMonth(1)">
              <ChevronRight :size="16" aria-hidden="true" />
            </button>
          </div>
          <div class="calendar-grid" :aria-label="copy.calendar.month">
            <span v-for="day in weekDays" :key="day" class="calendar-weekday">{{ day }}</span>
            <span v-for="cell in monthCells" :key="cell.key" :class="{ 'is-today': cell.today, 'is-adjacent': cell.adjacent }">{{ cell.day }}</span>
          </div>
        </div>
      </details>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  computed, nextTick, onMounted, onUnmounted, ref, watch,
} from 'vue';
import { ChevronLeft, ChevronRight, Grid2X2 } from '@lucide/vue';
import PixelFolderIcon from '~/components/PixelFolderIcon.vue';
import { folders, getFolderDisplayName } from '~/data/folders';
import { useDesktopWindows } from '~/composables/useDesktopWindows';
import { usePortfolioLocale } from '~/composables/usePortfolioLocale';
import { localeMessages } from '~/data/locale-messages';

const {
  windows, activeWindowId, openWindow, toggleWindow,
} = useDesktopWindows();
const { locale, setLocale } = usePortfolioLocale();
const copy = computed(() => localeMessages[locale.value]);
const localeTag = computed(() => (locale.value === 'ja' ? 'ja-JP' : 'ko-KR'));
const startMenuOpen = ref(false);
const taskbarMoreOpen = ref(false);
const startButton = ref<HTMLButtonElement | null>(null);
const taskbarMoreButton = ref<HTMLButtonElement | null>(null);
const taskbarOpenApps = ref<HTMLDivElement | null>(null);
const taskbarMeasure = ref<HTMLDivElement | null>(null);
const taskbarMoreMeasure = ref<HTMLButtonElement | null>(null);
const taskbarWindowLimit = ref(0);
const now = ref<Date | null>(null);
const calendarMonth = ref<Date | null>(null);
const weatherText = ref('--°');
const weatherLoading = ref(true);
const weatherFailed = ref(false);
const weatherCode = ref<number | null>(null);
const isDay = ref(true);
const weather = ref<{ apparent?: number; humidity?: number; precipitation?: number; wind?: number }>({});
const weatherConditionDefinitions: Record<number, {
  label: keyof typeof localeMessages.ko.weatherConditions
  icon: string
  nightIcon?: string
}> = {
  0: { label: 'sunny', icon: 'clear-day', nightIcon: 'clear-night' },
  1: { label: 'mostlySunny', icon: 'partly-cloudy-day', nightIcon: 'partly-cloudy-night' },
  2: { label: 'partlyCloudy', icon: 'partly-cloudy-day', nightIcon: 'partly-cloudy-night' },
  3: { label: 'cloudy', icon: 'cloudy' },
  45: { label: 'fog', icon: 'fog' },
  48: { label: 'fog', icon: 'fog' },
  51: { label: 'drizzle', icon: 'drizzle' },
  53: { label: 'drizzle', icon: 'drizzle' },
  55: { label: 'drizzle', icon: 'drizzle' },
  56: { label: 'freezingDrizzle', icon: 'sleet' },
  57: { label: 'freezingDrizzle', icon: 'sleet' },
  61: { label: 'rain', icon: 'rain' },
  63: { label: 'rain', icon: 'rain' },
  65: { label: 'rain', icon: 'rain' },
  66: { label: 'freezingRain', icon: 'sleet' },
  67: { label: 'freezingRain', icon: 'sleet' },
  71: { label: 'snow', icon: 'snow' },
  73: { label: 'snow', icon: 'snow' },
  75: { label: 'snow', icon: 'snow' },
  77: { label: 'snowGrains', icon: 'snow' },
  80: { label: 'shower', icon: 'showers' },
  81: { label: 'shower', icon: 'showers' },
  82: { label: 'heavyShower', icon: 'showers' },
  85: { label: 'snowShower', icon: 'snow' },
  86: { label: 'heavySnowShower', icon: 'snow' },
  95: { label: 'thunderstorm', icon: 'thunderstorm' },
  96: { label: 'hailThunderstorm', icon: 'thunderstorm' },
  99: { label: 'heavyHailThunderstorm', icon: 'thunderstorm' },
};
const weatherStatus = computed(() => {
  if (weatherLoading.value) return copy.value.weather.loading;
  if (weatherFailed.value) return copy.value.weather.error;
  const condition = weatherConditionDefinitions[weatherCode.value ?? -1];
  return condition ? copy.value.weatherConditions[condition.label] : copy.value.weather.unknown;
});
const weatherIcon = computed(() => {
  const condition = weatherConditionDefinitions[weatherCode.value ?? -1];
  return `/images/weather/${!isDay.value && condition?.nightIcon ? condition.nightIcon : condition?.icon ?? 'cloudy'}.png`;
});
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
const monthText = computed(() => (calendarMonth.value
  ? new Intl.DateTimeFormat(localeTag.value, { year: 'numeric', month: 'long' }).format(calendarMonth.value)
  : ''));
const weekDays = computed(() => Array.from({ length: 7 }, (_, index) => (
  new Intl.DateTimeFormat(localeTag.value, { weekday: 'short' })
    .format(new Date(2023, 0, 1 + index))
)));
const monthCells = computed(() => {
  if (!calendarMonth.value) return [];
  const year = calendarMonth.value.getFullYear();
  const month = calendarMonth.value.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(year, month, index - firstDay + 1);
    const today = now.value
      && date.getFullYear() === now.value.getFullYear()
      && date.getMonth() === now.value.getMonth()
      && date.getDate() === now.value.getDate();
    return {
      key: index,
      day: date.getDate(),
      adjacent: date.getMonth() !== month,
      today: Boolean(today),
    };
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
const toggleLocale = () => setLocale(locale.value === 'ko' ? 'ja' : 'ko');
const changeCalendarMonth = (amount: number) => {
  if (!calendarMonth.value) return;
  calendarMonth.value = new Date(
    calendarMonth.value.getFullYear(),
    calendarMonth.value.getMonth() + amount,
    1,
  );
};
const toggleStartMenu = () => {
  const shouldOpen = !startMenuOpen.value;
  if (shouldOpen) {
    closeTrayPopovers();
    taskbarMoreOpen.value = false;
  }
  startMenuOpen.value = shouldOpen;
};
const getFolderName = (id: string) => getFolderDisplayName(id, locale.value);
const folderName = getFolderName;
const getFolderIcon = (id: string) => {
  if (id === 'terminal') return '/images/folder-icons/terminal.png';
  return folders.find((folder) => folder.id === id)?.icon;
};
const taskbarMoreLabel = computed(() => {
  const activeLabel = activeOverflowWindow.value
    ? getFolderName(activeOverflowWindow.value.id)
    : '';
  return copy.value.moreWindows(activeLabel, overflowedTaskbarWindows.value.length);
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
  if (!current.open) {
    if (current.classList.contains('calendar-popover') && now.value) {
      calendarMonth.value = new Date(now.value.getFullYear(), now.value.getMonth(), 1);
    }
    return;
  }
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
    const appButton = appButtons.item(index);
    if (!appButton) break;
    const nextWidth = usedWidth + (index ? gap : 0) + appButton.offsetWidth;
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
  calendarMonth.value = new Date(now.value.getFullYear(), now.value.getMonth(), 1);
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
    weatherCode.value = current.weather_code ?? -1;
    isDay.value = current.is_day !== 0;
    weatherLoading.value = false;
    weatherFailed.value = false;
  } catch {
    weatherText.value = '--°';
    weatherLoading.value = false;
    weatherFailed.value = true;
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
