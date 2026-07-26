<template>
  <footer class="relative z-5 flex h-12 items-center justify-between border-t border-purple-400/18 bg-purple-500/10 px-4 shadow-[0_-10px_28px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-purple-400/18 dark:bg-purple-500/10 dark:shadow-[0_-10px_28px_rgba(15,23,42,0.18)]">
    <div class="w-40" />

    <div class="flex flex-1 justify-center gap-2">
      <!-- open folders -->
      <div class="flex items-center gap-1">
        <template v-if="visibleOpenFolders.length">
          <UTooltip
            v-for="win in visibleOpenFolders"
            :key="win.folderId"
            :text="getFolderName(win.folderId)"
            placement="top"
          >
            <UButton
              variant="ghost"
              size="sm"
              class="cursor-pointer h-10 w-10 justify-center transition duration-200"
              style="padding: 0"
              :class="[
                taskbarButtonBaseClass,
                isTopActive(win) ? taskbarButtonActiveClass : taskbarButtonIdleClass
              ]"
              @click="handleFooterClick(win.folderId)"
            >
              <img
                v-if="getFolderImage(win.folderId)"
                :src="getFolderImage(win.folderId)"
                alt=""
                class="object-contain"
                style="width: 36px; height: 36px"
              >
              <UIcon
                v-else
                :name="getFolderIcon(win.folderId)"
                :class="[
                  'transition duration-200',
                  isTopActive(win)
                    ? 'scale-105 text-white drop-shadow-[0_4px_12px_rgba(168,85,247,0.3)] dark:text-white dark:drop-shadow-[0_4px_12px_rgba(192,132,252,0.45)]'
                    : 'text-slate-50/90 dark:text-slate-100/90'
                ]"
                style="width: 36px; height: 36px"
                aria-hidden="true"
              />
            </UButton>
          </UTooltip>
        </template>
      </div>
    </div>

    <!-- actions/timer -->
    <div class="flex items-center justify-end gap-1 text-slate-50/90 dark:text-slate-300">
      <UButton
        :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
        variant="ghost"
        size="sm"
        :aria-label="isDark ? 'Switch to light' : 'Switch to dark'"
        :class="footerActionButtonClass"
        @click="toggleColorMode"
      />
      <UButton
        icon="i-lucide-github"
        variant="ghost"
        size="sm"
        aria-label="Open GitHub"
        :class="footerActionButtonClass"
        @click="visitGithub"
      />

      <WeatherButton />
      <CalendarButton />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGuestbookAvailability } from '~/composables/useGuestbookAvailability'
import { useWindowStore, type OpenedWindow } from '~/stores/WindowStore'

const windowStore = useWindowStore()
const { openedWindows } = storeToRefs(windowStore)
const { isFolderVisible, visibleFolders } = useGuestbookAvailability()

const visibleOpenFolders = computed(() =>
  openedWindows.value.filter(
    windowItem => windowItem.visible && isFolderVisible(windowItem.folderId)
  )
)

const activeWindows = computed(() =>
  openedWindows.value.filter(
    windowItem =>
      windowItem.visible && !windowItem.hidden && isFolderVisible(windowItem.folderId)
  )
)

const handleFooterClick = (folderId: string) => {
  if (!isFolderVisible(folderId)) return

  const windowItem = openedWindows.value.find(item => item.folderId === folderId)
  if (!windowItem) return

  if (windowItem.hidden) {
    windowStore.showWindow(folderId)
  } else {
    windowStore.bringToFront(folderId)
  }
}

const maxZ = computed(() =>
  activeWindows.value.reduce(
    (maxValue, windowItem) => Math.max(maxValue, windowItem.zIndex ?? 0),
    0
  )
)

const isTopActive = (win: OpenedWindow) =>
  !win.hidden && (win.zIndex ?? 0) === maxZ.value

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const visitGithub = () => {
  window.open('https://github.com/serene1004', '_blank', 'noopener')
}

const getFolderIcon = (folderId: string) =>
  visibleFolders.value.find(folder => folder.id === folderId)?.icon ?? 'i-lucide-folder'

const getFolderImage = (folderId: string) =>
  visibleFolders.value.find(folder => folder.id === folderId)?.image

const getFolderName = (folderId: string) =>
  visibleFolders.value.find(folder => folder.id === folderId)?.name ?? folderId

const taskbarButtonBaseClass =
  'text-slate-50/90 hover:-translate-y-0.5 dark:text-slate-100/90'

const taskbarButtonIdleClass =
  'hover:scale-105 hover:text-white dark:hover:text-white'

const taskbarButtonActiveClass =
  'scale-105 text-white'

const footerActionButtonClass =
  'h-10 cursor-pointer rounded-xl border border-transparent text-slate-50/90 hover:border-white/18 hover:bg-white/16 hover:text-white dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/6'
</script>
