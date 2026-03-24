<template>
  <footer class="relative z-5 flex h-12 items-center justify-between border-t border-purple-300/25 bg-purple-500/16 px-4 shadow-[0_-10px_24px_rgba(168,85,247,0.08)] backdrop-blur-xl dark:border-purple-400/18 dark:bg-purple-500/10 dark:shadow-[0_-10px_28px_rgba(15,23,42,0.18)]">
    <div class="w-40" />

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
            class="cursor-pointer rounded-full border border-white/18 bg-white/20 shadow-[0_8px_20px_rgba(168,85,247,0.08)] backdrop-blur-xl hover:border-white/26 hover:bg-white/28 dark:border-white/14 dark:bg-white/8 dark:shadow-[0_8px_20px_rgba(15,23,42,0.14)] dark:hover:border-white/24 dark:hover:bg-white/12"
            aria-label="Start menu"
          />
          <template #content>
            <div class="min-w-32 p-2 space-y-1">
              <UButton
                v-for="item in startItems"
                :key="item.id"
                :icon="item.icon"
                variant="ghost"
                class="flex justify-start w-full cursor-pointer"
                @click="openFromStart(item.id)"
              >
                {{ item.label }}
              </UButton>
            </div>
          </template>
        </UPopover>

        <div class="hidden min-w-60 items-center gap-2 rounded-full border border-white/18 bg-white/22 px-4 py-2 text-xs text-slate-50/90 shadow-[0_8px_20px_rgba(168,85,247,0.08)] md:flex dark:border-white/12 dark:bg-white/6 dark:text-slate-300 dark:shadow-[0_8px_20px_rgba(15,23,42,0.14)]">
          <UIcon name="i-lucide-search" class="w-4 h-4" />
          <span class="truncate">Type here to search</span>
        </div>
      </div>

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
              class="cursor-pointer h-10 w-10 rounded-[14px] border backdrop-blur-xl transition duration-200"
              :class="[
                taskbarButtonBaseClass,
                isTopActive(win) ? taskbarButtonActiveClass : taskbarButtonIdleClass
              ]"
              @click="handleFooterClick(win.folderId)"
            >
              <UIcon
                :name="getFolderIcon(win.folderId)"
                :class="[
                  'h-5 w-5 transition duration-200',
                  isTopActive(win)
                    ? 'scale-105 text-white drop-shadow-[0_4px_12px_rgba(168,85,247,0.3)] dark:text-white dark:drop-shadow-[0_4px_12px_rgba(192,132,252,0.45)]'
                    : 'text-slate-50/90 dark:text-slate-100/90'
                ]"
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
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { folders } from '~/data/folders'
import { useWindowStore, type OpenedWindow } from '~/stores/WindowStore'

const windowStore = useWindowStore()
const { openedWindows } = storeToRefs(windowStore)

const visibleOpenFolders = computed(() =>
  openedWindows.value.filter(windowItem => windowItem.visible)
)

const activeWindows = computed(() =>
  openedWindows.value.filter(windowItem => windowItem.visible && !windowItem.hidden)
)

const handleFooterClick = (folderId: string) => {
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

const startOpen = ref(false)
const startItems = computed(() =>
  folders.map(folder => ({
    id: folder.id,
    icon: folder.icon ?? 'i-lucide-folder',
    label: folder.name
  }))
)

const openFromStart = (folderId: string) => {
  windowStore.openWindow(folderId)
  startOpen.value = false
}

const getFolderIcon = (folderId: string) =>
  folders.find(folder => folder.id === folderId)?.icon ?? 'i-lucide-folder'

const getFolderName = (folderId: string) =>
  folders.find(folder => folder.id === folderId)?.name ?? folderId

const taskbarButtonBaseClass =
  'border-white/18 bg-white/18 text-slate-50/90 shadow-[0_10px_24px_rgba(168,85,247,0.08)] hover:-translate-y-0.5 dark:border-white/14 dark:bg-white/8 dark:text-slate-100/90 dark:shadow-[0_10px_24px_rgba(15,23,42,0.16)]'

const taskbarButtonIdleClass =
  'hover:border-white/26 hover:bg-white/26 hover:text-white dark:hover:border-white/24 dark:hover:bg-white/12 dark:hover:text-white'

const taskbarButtonActiveClass =
  'border-purple-300/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(216,180,254,0.34))] text-white shadow-[0_12px_24px_rgba(168,85,247,0.18),inset_0_1px_0_rgba(255,255,255,0.28)] dark:border-purple-300/34 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(192,132,252,0.18))] dark:text-white dark:shadow-[0_12px_28px_rgba(168,85,247,0.22),inset_0_1px_0_rgba(255,255,255,0.14)]'

const footerActionButtonClass =
  'h-10 cursor-pointer rounded-xl border border-transparent text-slate-50/90 hover:border-white/18 hover:bg-white/16 hover:text-white dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/6'
</script>
