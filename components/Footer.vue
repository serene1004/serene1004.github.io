<template>
  <footer class="relative z-5 h-12 flex items-center justify-between bg-purple-500/10 border-t border-purple-400/10 backdrop-blur-sm px-4">
    <div class="w-40" />

    <!-- 센터영역 -->
    <div class="flex flex-1 justify-center gap-2">
      <div class="flex items-center gap-2">
        <UButton
          :avatar="{
            src: '/images/serene.png',
            size: 'sm'
          }"
          variant="ghost"
          class="cursor-pointer"
        />

        <div class="hidden md:flex items-center min-w-60 px-4 py-2 gap-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
          <UIcon name="i-lucide-search" class="w-4 h-4"/>
          <span class="truncate">Type here to search</span>
        </div>
      </div>
        <!-- open folders -->
        <div class="flex items-center gap-1">
          <template v-if="visibleOpenFolders && visibleOpenFolders.length">
            <UButton
              v-for="win in visibleOpenFolders"
              :key="win.folderId"
              icon="i-lucide-smile"
              :variant="(win.zIndex || 0) === maxZ ? 'outline' : 'ghost'"
              :aria-label="win.folderId"
              size="xl"
              class="cursor-pointer"
              :class="(win.zIndex || 0) === maxZ ? 'bg-purple-500/10' : undefined"
              @click="bringToFront(win.folderId)"
            />
          </template>
        </div>
    </div>

    <!-- actions/timer -->
    <div class="flex items-center justify-end gap-2 text-slate-300">
      <UButton
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        variant="ghost"
        size="sm"
        :aria-label="isDark ? 'Switch to light' : 'Switch to dark'"
        class="text-slate-300 cursor-pointer"
        @click="toggleColorMode"
      />
      <UButton
        icon="i-lucide-github"
        variant="ghost"
        size="sm"
        aria-label="Open GitHub"
        class="text-slate-300 cursor-pointer"
        @click="visitGithub"
      />

      <UButton
        variant="ghost"
        aria-label="Calendar/Timer"
        class="text-slate-300 cursor-pointer"
        @click="toggleCalendar"
      >
        <div class="flex flex-col items-end text-xs leading-tight">
          <span>{{ timeText }}</span>
          <span class="text-[11px]">{{ dateText }}</span>
        </div>
      </UButton>
    </div>

    <!-- TODO : 캘린더 나중에 overlay로 뜨도록 수정 -->
    <div v-if="showCalendar" class="absolute bottom-full right-0">
      <UCalendar v-model="calendarValue" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import type { DateValue } from '@internationalized/date'
import { today, getLocalTimeZone } from '@internationalized/date'

import { openedWindows, bringToFront } from '~/composables/useWindowStore'

const visibleOpenFolders = computed(() => (openedWindows.value || []).filter((w: any) => w.visible))
const maxZ = computed(() => {
  const arr = openedWindows.value || []
  if (!arr.length) return 0
  return arr.reduce((m, w) => Math.max(m, w.zIndex || 0), 0)
})

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

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const visitGithub = () => {
  window.open('https://github.com/serene1004', '_blank', 'noopener')
}

const calendarValue = ref<DateValue | null>(
  today(getLocalTimeZone())
)
const showCalendar = ref<Boolean>(false)
const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value
}

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