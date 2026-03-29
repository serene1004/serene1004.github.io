<template>
  <div
    v-if="project"
    class="space-y-5 text-slate-800 dark:text-slate-100"
  >
    <section class="space-y-2">
      <h2 class="text-xl font-semibold tracking-tight">
        {{ project.title }}
      </h2>
      <p class="text-sm leading-6 text-slate-700 dark:text-slate-200">
        {{ project.summary }}
      </p>
    </section>

    <section class="space-y-4 border-t border-slate-200/80 pt-4 dark:border-white/10">
      <div class="space-y-1.5">
        <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
          역할
        </p>
        <p class="text-sm leading-6 text-slate-700 dark:text-slate-200">
          {{ project.role }}
        </p>
      </div>

      <div
        v-for="section in project.sections"
        :key="section.label"
        class="space-y-2.5 border-t border-slate-200/80 pt-4 first:border-t-0 first:pt-0 dark:border-white/10"
      >
        <div class="space-y-1">
          <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
            {{ section.label }}
          </p>
          <h3 class="text-sm font-medium leading-6 text-slate-900 dark:text-slate-100">
            {{ section.title }}
          </h3>
        </div>

        <ul class="space-y-1.5 text-sm leading-6 text-slate-700 dark:text-slate-200">
          <li
            v-for="item in section.items"
            :key="item"
            class="flex items-start gap-2"
          >
            <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/70" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>

  <div
    v-else
    class="rounded-3xl border border-dashed border-white/20 bg-white/45 p-5 text-sm text-slate-700 dark:bg-slate-950/30 dark:text-slate-200"
  >
    프로젝트 정보를 찾지 못했습니다.
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getProjectById } from '~/data/projects'

const props = defineProps<{
  projectId: string
}>()

const project = computed(() => getProjectById(props.projectId))
</script>
