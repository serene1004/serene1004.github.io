<template>
  <UButton
    variant="ghost"
    class="group flex w-20 flex-col items-center gap-1 rounded-2xl border border-white/14 bg-white/6 p-2 pb-1 shadow-[0_10px_24px_rgba(15,23,42,0.16)] backdrop-blur-lg transition duration-200 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/12 hover:shadow-[0_14px_30px_rgba(15,23,42,0.2)] focus-visible:ring-2 focus-visible:ring-purple-300/50"
    tabindex="0"
    @dblclick="emit('open')"
    @keyup.enter="emit('open')"
  >
    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-lg transition duration-200 group-hover:bg-white/16 group-hover:border-white/22">
      <UIcon
        :name="icon || 'i-lucide-folder'"
        class="h-7 w-7 text-purple-100 drop-shadow-[0_6px_18px_rgba(192,132,252,0.35)]"
        aria-hidden="true"
      />
    </div>
    <span class="w-16 py-0.5 text-center text-[11px] leading-tight text-slate-50 break-word">
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
