<template>
  <div class="site-shell">
    <header class="site-header">
      <NuxtLink to="/" class="wordmark" aria-label="Serene1004 desktop home">
        <img class="brand-mark" src="/images/brand/serene.png" alt="">
        <span>serene1004</span>
      </NuxtLink>
    </header>
    <main id="main-content" class="site-main"><slot /></main>
    <DesktopTaskbar />
  </div>
</template>

<script setup lang="ts">
import DesktopTaskbar from '~/components/DesktopTaskbar.vue';
</script>
