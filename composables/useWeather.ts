import { computed } from 'vue';

type WeatherNowView = {
  temperature?: number
  windspeed?: number
  weathercode?: number
  date: string
  time: string
}

type OpenMeteoResponse = {
  current?: {
    time?: string
    temperature_2m?: number
    wind_speed_10m?: number
    weather_code?: number
  }
}

const splitIsoToDateTime = (iso?: string) => {
  const [date = '', time = ''] = iso?.split('T') ?? [];
  return { date, time };
};

export const useWeather = () => {
  const {
    data, pending, error, refresh,
  } = useFetch<OpenMeteoResponse>(
    'https://api.open-meteo.com/v1/forecast',
    {
      key: 'seoul-weather',
      query: {
        latitude: 37.566,
        longitude: 126.9784,
        timezone: 'Asia/Seoul',
        current: 'temperature_2m,wind_speed_10m,weather_code',
      },
    },
  );

  const current = computed<WeatherNowView>(() => {
    const weather = data.value?.current;
    const { date, time } = splitIsoToDateTime(weather?.time);

    return {
      temperature: weather?.temperature_2m,
      windspeed: weather?.wind_speed_10m,
      weathercode: weather?.weather_code,
      date,
      time,
    };
  });

  return {
    current, pending, error, refresh,
  };
};
