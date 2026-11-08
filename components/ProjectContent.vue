<template>
  <div class="project-content">
    <p class="eyebrow">WORK PROJECT</p>
    <h3 class="window-heading">{{ content.title }}</h3>
    <p class="detail-summary">{{ content.summary }}</p>
    <section
      v-for="section in content.sections"
      :key="section.label"
      class="detail-section"
    >
      <h2>{{ section.label }}</h2>
      <ul class="detail-list">
        <li v-for="item in section.items" :key="item">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ProjectEntry } from '~/data/projects';
import { usePortfolioLocale } from '~/composables/usePortfolioLocale';
import { projectTranslationsJa } from '~/data/project-translations-ja';

const props = defineProps<{ project: ProjectEntry }>();
const { locale } = usePortfolioLocale();
const content = computed(() => (
  locale.value === 'ja' ? projectTranslationsJa[props.project.id] ?? props.project : props.project
));
</script>
