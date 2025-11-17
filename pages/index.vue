<template>
  <div class="h-full">
    <div class="absolute z-10 left-4 top-4 flex flex-col gap-4">
      <DesktopFolder
        v-for="folder in folders"
        :key="folder.id"
        :label="folder.name"
        :image="folder.image"
        @open="openFolder(folder.id)"
      />
    </div>

    <DesktopWindow
      v-for="win in openedWindows"
      :key="win.folderId"
      v-model:visible="win.visible"
      :title="getFolder(win.folderId)?.name ?? ''"
      :draggable="true"
      :initial-offset-x="win.offsetX"
      :initial-offset-y="win.offsetY"
      @close="handleClose(win.folderId)"
    >
      <component :is="getFolder(win.folderId)?.component" />
    </DesktopWindow>
  </div>
</template>

<script setup lang="ts">
import { ref, type Component } from 'vue'
import DesktopFolder from '~/components/DesktopFolder.vue'
import DesktopWindow from '~/components/DesktopWindow.vue'
import AboutMePanel from '~/components/panels/AboutMePanel.vue'
import ProjectPanel from '~/components/panels/ProjectPanel.vue'

interface FolderItem {
  id: string
  name: string
  image: string
  component: Component
}

const folders: FolderItem[] = [
  {
    id: 'about',
    name: 'About Me',
    image: '/images/serene.png',
    component: AboutMePanel
  },
  {
    id: 'project',
    name: 'Project',
    image: '/images/serene.png',
    component: ProjectPanel
  }
]

const getFolder = (id: string): FolderItem | undefined =>
  folders.find(f => f.id === id)

interface OpenedWindow {
  folderId: string
  visible: boolean
  offsetX: number
  offsetY: number
}

const openedWindows = ref<OpenedWindow[]>([])

const baseOffset = 0
const offsetStep = 32

const openFolder = (folderId: string) => {
  const folder = getFolder(folderId)
  if (!folder) return

  const existing = openedWindows.value.find(win => win.folderId === folderId)
  if (existing) {
    existing.visible = true
    return
  }

  const index = openedWindows.value.length

  openedWindows.value.push({
    folderId,
    visible: true,
    offsetX: baseOffset + index * offsetStep,
    offsetY: baseOffset + index * offsetStep
  })
}

const handleClose = (folderId: string) => {
  openedWindows.value = openedWindows.value.filter(
    win => win.folderId !== folderId
  )
}
</script>
