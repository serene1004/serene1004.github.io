<template>
  <div class="space-y-5 text-slate-50 dark:text-slate-100">
    <section class="space-y-2">
      <h2 class="text-xl font-semibold tracking-tight">
        {{ title }}
      </h2>
      <p class="text-sm leading-6 text-slate-50/85 dark:text-slate-200">
        {{ summary }}
      </p>
    </section>

    <section class="space-y-3 border-t border-white/18 pt-4 dark:border-white/10">
      <ul class="space-y-1.5 text-sm leading-6 text-slate-50/85 dark:text-slate-200">
        <li
          v-for="highlight in highlights"
          :key="highlight"
          class="flex items-start gap-2"
        >
          <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/70" />
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <a
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-purple-100 hover:text-white dark:text-purple-200 dark:hover:text-white"
      >
        프로젝트 열기
        <UIcon name="i-lucide-external-link" class="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  summary: string
  highlights: string[]
  url: string
}>()
</script>
