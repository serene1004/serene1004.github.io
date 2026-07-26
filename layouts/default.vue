<template>
  <div class="relative h-dvh w-full overflow-hidden">
    <BackgroundCanvas />
    <div class="flex h-full flex-col text-slate-100 dark:text-slate-50">
      <main class="flex-1 overflow-hidden">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import BackgroundCanvas from '~/components/BackgroundCanvas.vue';
import Footer from '~/components/Footer.vue';
</script>
