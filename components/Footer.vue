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
              :variant="isTopActive(win) ? 'outline' : 'ghost'"
              :aria-label="win.folderId"
              size="xl"
              class="cursor-pointer"
              :class="isTopActive(win) ? 'bg-purple-500/10' : undefined"
              @click="handleFooterClick(win.folderId)"
            />
          </template>
        </div>
    </div>

    <!-- actions/timer -->
    <div class="flex items-center justify-end gap-1 text-slate-300">
      <UButton
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        variant="ghost"
        size="sm"
        :aria-label="isDark ? 'Switch to light' : 'Switch to dark'"
        class="h-10 text-slate-300 cursor-pointer"
        @click="toggleColorMode"
      />
      <UButton
        icon="i-lucide-github"
        variant="ghost"
        size="sm"
        aria-label="Open GitHub"
        class="h-10 text-slate-300 cursor-pointer"
        @click="visitGithub"
      />

      <WeatherButton/>
      <CalendarButton/>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import {
  openedWindows,
  showWindow,
  bringToFront,
  type OpenedWindow
} from '~/composables/useWindowStore'

const visibleOpenFolders = computed(() =>
  (openedWindows.value || []).filter(w => w.visible)
)

const activeWindows = computed(() =>
  (openedWindows.value || []).filter(w => w.visible && !w.hidden)
)

const handleFooterClick = (folderId: string) => {
  const win = openedWindows.value.find(w => w.folderId === folderId);
  if (!win) return

  if (win.hidden) {
    showWindow(folderId)
  } else {
    bringToFront(folderId)
  }
}

const maxZ = computed(() =>
  activeWindows.value.reduce(
    (m, w) => Math.max(m, w.zIndex ?? 0),
    0
  )
)

const isTopActive = (win: OpenedWindow) =>
  !win.hidden && (win.zIndex || 0) === maxZ.value

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const visitGithub = () => {
  window.open('https://github.com/serene1004', '_blank', 'noopener')
}
</script>