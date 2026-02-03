<template>
  <UButton
    variant="ghost"
    class="flex flex-col items-center w-20 gap-1 backdrop-blur-sm"
    tabindex="0"
    @dblclick="emit('open')"
    @keyup.enter="emit('open')"
  >
    <div class="w-12 h-12 flex items-center justify-center rounded-lg">
      <UIcon
        :name="icon || 'i-lucide-folder'"
        class="w-7 h-7 text-purple-100 drop-shadow"
        aria-hidden="true"
      />
    </div>
    <span class="w-16 text-slate-100 text-xs leading-tight text-center break-all">
      {{ label }}
    </span>
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  icon?: string
}>()

const emit = defineEmits<{
  open: []
}>()
</script>
