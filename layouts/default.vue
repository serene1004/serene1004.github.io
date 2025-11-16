<template>
  <div class="relative h-dvh w-full overflow-hidden bg-slate-100 dark:bg-slate-900 text-slate-100 dark:text-slate-50">
    <!-- 데스크톱 영역 -->
    <div class="flex h-full flex-col">
      <main class="relative flex-1 overflow-hidden">
        <slot />
      </main>
      <Footer/>
    </div>
  </div>
</template>


<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  title: appConfig.title
})
</script>