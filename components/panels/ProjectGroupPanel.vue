<template>
  <div class="space-y-5">
    <div class="flex gap-1 overflow-x-auto border-b border-slate-200/80 pb-3 dark:border-white/10" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="tab"
        type="button"
        role="tab"
        :aria-selected="activeIndex === index"
        class="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition"
        :class="activeIndex === index
          ? 'bg-purple-500 text-white'
          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10'"
        @click="activeIndex = index"
      >
        {{ tab }}
      </button>
    </div>

    <ProjectCasePanel :project-id="projectIds[activeIndex]" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCasePanel from '~/components/panels/ProjectCasePanel.vue';

defineProps<{
  projectIds: string[]
  tabs: string[]
}>();

const activeIndex = ref(0);
</script>
