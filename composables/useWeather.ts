import { computed, ref, unref, watch, type Ref } from 'vue';
import { $fetch } from 'ofetch';

type WeatherNowRaw = {
  temperature?: number;
  windspeed?: number;
  weathercode?: number;
  time?: string;
};

type WeatherNowView = {
  temperature?: number;
  windspeed?: number;
  weathercode?: number;
  date: string;
  time: string;
};

type OpenMeteoCurrent = {
  time?: string;
  temperature_2m?: number;
  wind_speed_10m?: number;
  weather_code?: number;
};

type OpenMeteoResponse = {
  current?: OpenMeteoCurrent;
};

const splitIsoToDateTime = (iso?: string) => {
  if (typeof iso !== 'string') return { date: '', time: '' };
  const m = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/.exec(iso);
  return m ? { date: m[1], time: m[2] } : { date: '', time: '' };
};

export const useWeather = (
  lat?: number | Ref<number | undefined | null>,
  lon?: number | Ref<number | undefined | null>,
  tz: string = 'auto'
) => {
  const q = computed(() => {
    const _lat = unref(lat);
    const _lon = unref(lon);
    const hasCoord =
      Number.isFinite(Number(_lat)) && Number.isFinite(Number(_lon));

    return hasCoord
      ? { lat: Number(_lat), lon: Number(_lon), tz }
      : null;
  });

  const data = ref<WeatherNowRaw | null>(null);
  const pending = ref(false);
  const error = ref<Error | null>(null);

  const load = async () => {
    if (!q.value) return;

    pending.value = true;
    error.value = null;

    try {
      const res = await $fetch<OpenMeteoResponse>(
        'https://api.open-meteo.com/v1/forecast',
        {
          query: {
            latitude: q.value.lat,
            longitude: q.value.lon,
            timezone: q.value.tz,
            current: 'temperature_2m,wind_speed_10m,weather_code'
          }
        }
      );

      const c = res.current ?? {};

      data.value = {
        temperature: c.temperature_2m,
        windspeed: c.wind_speed_10m,
        weathercode: c.weather_code,
        time: c.time
      };
    } catch (err: any) {
      console.error('open-meteo error', err);
      error.value = err;
      data.value = null;
    } finally {
      pending.value = false;
    }
  };

  watch(
    q,
    () => {
      void load();
    },
    { immediate: true }
  );

  const current = computed<WeatherNowView>(() => {
    const raw = data.value;
    const { date, time } = splitIsoToDateTime(raw?.time);

    return {
      temperature: raw?.temperature,
      windspeed: raw?.windspeed,
      weathercode: raw?.weathercode,
      date,
      time
    };
  });

  return { data, current, pending, error, refresh: load };
};
