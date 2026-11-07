<template>
  <div class="project-content">
    <p class="eyebrow">WORK PROJECT</p>
    <h3 class="window-heading">{{ project.title }}</h3>
    <p class="detail-summary">{{ project.summary }}</p>
    <section
      v-for="section in project.sections"
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
import type { ProjectEntry } from '~/data/projects';

defineProps<{ project: ProjectEntry }>();
</script>
