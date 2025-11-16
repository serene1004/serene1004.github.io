<template>
  <UButton
    variant="ghost"
    class="flex flex-col items-center w-20 gap-2"
    @dblclick="emit('open')"
  >
    <img
      :src="image"
      :alt="label"
      class="w-12 h-12 object-contain pointer-events-none"
      draggable="false"
    />
    <span class="w-16 text-slate-800 dark:text-slate-100 text-xs leading-tight text-center break-all">
      {{ label }}
    </span>
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  image: string
}>()

const emit = defineEmits<{
  open: []
}>()
</script>