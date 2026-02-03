<template>
  <footer class="relative z-5 h-12 flex items-center justify-between bg-purple-500/10 border-t border-purple-400/10 backdrop-blur-sm px-4">
    <div class="w-40" />

    <!-- 센터영역 -->
    <div class="flex flex-1 justify-center gap-2">
      <div class="flex items-center gap-2">
        <UPopover
          v-model:open="startOpen"
          :triggers="['click']"
          :open-delay="0"
          :close-delay="0"
        >
          <UButton
            :avatar="{
              src: '/images/serene.png',
              size: 'sm'
            }"
            variant="ghost"
            class="cursor-pointer"
            aria-label="Start menu"
          />
          <template #content>
            <div class="min-w-32 p-2 space-y-1">
              <UButton
                v-for="item in startItems"
                :key="item.label"
                :icon="item.icon"
                variant="ghost"
                class="flex justify-start w-full cursor-pointer"
                @click="item.action(); startOpen = false"
              >
                {{ item.label }}
              </UButton>
            </div>
          </template>
        </UPopover>

        <div class="hidden md:flex items-center min-w-60 px-4 py-2 gap-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
          <UIcon name="i-lucide-search" class="w-4 h-4"/>
          <span class="truncate">Type here to search</span>
        </div>
      </div>

      <!-- open folders -->
      <div class="flex items-center gap-1">
        <template v-if="visibleOpenFolders && visibleOpenFolders.length">
          <UTooltip
            v-for="win in visibleOpenFolders"
            :key="win.folderId"
            :text="getFolderName(win.folderId)"
            placement="top"
          >
            <UButton
              :variant="isTopActive(win) ? 'solid' : 'ghost'"
              size="sm"
              class="cursor-pointer w-10 h-10 border border-transparent rounded-lg text-primary"
              :class="isTopActive(win) ? 'bg-primary/10 hover:bg-primary/10 border-primary' : undefined"
              @click="handleFooterClick(win.folderId)"
            >
              <UIcon :name="getFolderIcon(win.folderId)" class="w-5 h-5" aria-hidden="true" />
            </UButton>
          </UTooltip>
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
import { ref, computed } from 'vue'
import {
  openedWindows,
  showWindow,
  bringToFront,
  openWindow,
  type OpenedWindow
} from '~/composables/useWindowStore'
import { folders } from '~/data/folders'

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

const startOpen = ref(false)
const startItems = [
  { icon: 'i-lucide-user', label: 'About', action: () => openWindow('about') },
  { icon: 'i-lucide-rocket', label: 'Projects', action: () => openWindow('project') },
]

const getFolderIcon = (folderId: string) =>
  folders.find(f => f.id === folderId)?.icon ?? 'i-lucide-folder'

const getFolderName = (folderId: string) =>
  folders.find(f => f.id === folderId)?.name ?? folderId
</script>
