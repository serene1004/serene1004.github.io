<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { usePortfolioLocale } from '~/composables/usePortfolioLocale';

const { locale } = usePortfolioLocale();
useHead({ htmlAttrs: { lang: locale } });
</script>
