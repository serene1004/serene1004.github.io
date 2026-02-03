<template>
  <UPopover>
    <UButton
      variant="ghost"
      aria-label="Calendar/Timer"
      class="text-slate-300 cursor-pointer"
    >
      <div class="flex flex-col items-end text-xs leading-tight">
        <span>{{ timeText }}</span>
        <span class="text-[11px]">{{ dateText }}</span>
      </div>
    </UButton>

    <template #content>
      <div class="p-2 text-slate-800 dark:text-slate-100">
        <UCalendar v-model="calendarValue" />
      </div>
    </template>
  </UPopover>
</template>

<script lang="ts" setup>
import type { DateValue } from '@internationalized/date'
import { today, getLocalTimeZone } from '@internationalized/date'

const timeText = ref<string>('')
const dateText = ref<string>('')

const updateNow = () => {
  const now = new Date()

  timeText.value = new Intl.DateTimeFormat('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(now)

  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  dateText.value = `${y}-${m}-${d}`
}

let timerId: ReturnType<typeof setInterval> | null = null

const calendarValue = ref<DateValue | null>(
  today(getLocalTimeZone())
)

onMounted(() => {
  updateNow()
  timerId = window.setInterval(updateNow, 1000)
})

onUnmounted(() => {
  if (timerId !== null) {
    window.clearInterval(timerId)
    timerId = null
  }
})
</script>