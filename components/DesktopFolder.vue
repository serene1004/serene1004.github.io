<template>
  <UButton
    variant="ghost"
    class="group flex w-20 flex-col items-center gap-1 p-2 pb-1 transition duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-purple-300/50"
    tabindex="0"
    @dblclick="emit('open')"
    @keyup.enter="emit('open')"
  >
    <img
      v-if="image"
      :src="image"
      alt=""
      class="h-12 w-12 object-contain drop-shadow-[0_6px_18px_rgba(192,132,252,0.35)]"
    >
    <UIcon
      v-else
      :name="icon || 'i-lucide-folder'"
      class="h-12 w-12 text-purple-100 drop-shadow-[0_6px_18px_rgba(192,132,252,0.35)]"
      aria-hidden="true"
    />
    <span class="w-16 py-0.5 text-center text-[11px] leading-tight text-slate-50 break-word">
      {{ label }}
    </span>
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  icon?: string
  image?: string
}>()

const emit = defineEmits<{
  open: []
}>()
</script>
