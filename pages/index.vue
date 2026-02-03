<template>
  <div class="h-full">
    <div class="absolute z-10 left-4 top-4 flex flex-col gap-4">
      <DesktopFolder
        v-for="folder in folders"
        :key="folder.id"
        :label="folder.name"
        :icon="folder.icon"
        @open="openFolder(folder.id)"
      />
    </div>

    <DesktopWindow
      v-for="win in openedWindows"
      :key="win.folderId"
      v-model:visible="win.visible"
      v-model:hidden="win.hidden"
      :title="getFolder(win.folderId)?.name ?? ''"
      :draggable="true"
      :initial-offset-x="win.offsetX"
      :initial-offset-y="win.offsetY"
      :folder-id="win.folderId"
      :z-index="win.zIndex"
      :icon="getFolder(win.folderId)?.icon"
      @close="closeWindow(win.folderId)"
    >
      <component :is="getFolder(win.folderId)?.component" />
    </DesktopWindow>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'
import DesktopFolder from '~/components/DesktopFolder.vue'
import DesktopWindow from '~/components/DesktopWindow.vue'
import { openedWindows, openWindow, bringToFront, closeWindow } from '~/composables/useWindowStore'
import { folders, type FolderItem } from '~/data/folders'

const getFolder = (id: string): FolderItem | undefined =>
  folders.find(f => f.id === id)

const openFolder = (folderId: string) => {
  const folder = getFolder(folderId)
  if (!folder) return
  openWindow(folderId)
}

const focusOrder = computed(() =>
  openedWindows.value
    .filter(w => w.visible && !w.hidden)
    .sort((a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0))
)

const handleKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    const top = focusOrder.value.at(-1)
    if (top) closeWindow(top.folderId)
  }

  if (e.altKey && e.key.toLowerCase() === 'tab') {
    e.preventDefault()
    const arr = focusOrder.value
    if (!arr.length) return
    const next = arr.at(-2) ?? arr.at(-1)
    if (next) bringToFront(next.folderId)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>
