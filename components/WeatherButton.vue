<template>
  <UPopover>
    <UButton
      variant="ghost"
      :aria-label="ariaLabel"
      class="h-10 text-slate-300 cursor-pointer"
      :disabled="isLoading"
    >
      <UIcon
        v-if="isLoading"
        name="i-lucide-loader-circle"
        class="w-4 h-4 animate-spin"
      />
      <UIcon
        v-else
        :name="weatherIcon"
        class="w-4 h-4"
      />

      <span class="text-xs">
        {{ temperatureText }}
      </span>
    </UButton>

    <template #content>
      <ul class="flex flex-col p-2 gap-1.5 text-sm">
        <h4 class="flex items-center gap-2">
          <UIcon name="i-lucide-calendar-clock" class="w-4 h-4" aria-hidden="true" />
          <div class="flex flex-col text-xs">
            <span>기준 시각</span>
            <span>{{ datetimeDetail }}</span>
          </div>
        </h4>

        <li class="flex items-center gap-2">
          <UIcon name="i-lucide-thermometer" class="w-4 h-4" aria-hidden="true" />
          <span>{{ temperatureDetail }}</span>
        </li>

        <li class="flex items-center gap-2">
          <UIcon :name="status.icon" class="w-4 h-4" aria-hidden="true" />
          <span>{{ status.text }}</span>
        </li>

        <li class="flex items-center gap-2">
          <UIcon name="i-lucide-wind" class="w-4 h-4" aria-hidden="true" />
          <span>{{ windspeedDetail }}</span>
        </li>
      </ul>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useWeather } from '@/composables/useWeather';

const seoulLatLon = ref<{lat: number, lon: number}>({
  lat: 37.566,
  lon: 126.9784
})
const { current, pending, error } = useWeather(seoulLatLon.value.lat, seoulLatLon.value.lon);

type WmoInfo = {
  text: string;
  icon: string;
};

const wmoInfo = (code?: number | null, isDay?: number | boolean): WmoInfo => {
  const day = typeof isDay === 'boolean' ? isDay : isDay === 1;

  if (code == null) {
    return { text: '정보 없음', icon: 'i-lucide-cloud' };
  }

  if (code === 0) {
    return { text: '맑음', icon: day ? 'i-lucide-sun' : 'i-lucide-moon' };
  }

  if ([1, 2, 3].includes(code)) {
    return {
      text: '구름 조금',
      icon: day ? 'i-lucide-cloud-sun' : 'i-lucide-cloud-moon'
    };
  }

  if ([45, 48].includes(code)) {
    return { text: '안개', icon: 'i-lucide-fog' };
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return { text: '이슬비', icon: 'i-lucide-cloud-drizzle' };
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return { text: '비', icon: 'i-lucide-cloud-rain' };
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return { text: '눈', icon: 'i-lucide-cloud-snow' };
  }

  if ([95, 96, 99].includes(code)) {
    return { text: '뇌우', icon: 'i-lucide-cloud-lightning' };
  }

  return { text: `${code}`, icon: 'i-lucide-cloud' };
};

const isLoading = computed(() => pending.value && !error.value);

// 현재 날씨 상태 (텍스트 + 아이콘)
const status = computed<WmoInfo>(() => {
  if (isLoading.value) {
    return { text: '날씨 불러오는 중', icon: 'i-lucide-loader-circle' };
  }

  if (error.value) {
    return { text: '정보 없음', icon: 'i-lucide-cloud' };
  }

  return wmoInfo(current.value.weathercode);
});
const weatherIcon = computed(() => status.value.icon);
const temperatureText = computed(() => {
  if (isLoading.value) return '--°';
  if (error.value) return 'N/A';

  const t = current.value.temperature;
  if (t == null) return '--°';

  return `${t.toFixed(1)}°`;
});

const temperatureDetail = computed(() => {
  const t = current.value.temperature;
  if (t == null) return '-';
  return `${t.toFixed(1)}°`;
});

const windspeedDetail = computed(() => {
  const w = current.value.windspeed;
  if (w == null) return '-';
  return `${w.toFixed(1)}m/s`;
});

const datetimeDetail = computed(() => {
  const date = current.value.date ?? '';
  const time = current.value.time ?? '';
  const joined = `${date} ${time}`.trim();
  return joined || '-';
});

const ariaLabel = computed(() => {
  if (isLoading.value) return 'weather loading';
  if (error.value) return 'weather error';
  return `weather ${temperatureText.value} ${status.value.text}`;
});
</script>
