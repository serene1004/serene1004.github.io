<template>
  <img class="pixel-folder-icon" :src="props.src ?? '/images/serene.png'" alt="" aria-hidden="true">
</template>

<script setup lang="ts">
const props = defineProps<{ src?: string }>();
</script>
