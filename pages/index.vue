<template>
<div class="relative h-full">
    <div class="absolute left-4 top-4 flex flex-col gap-4">
      <DesktopFolder
        v-for="folder in folders"
        :key="folder.id"
        :label="folder.name"
        :image="folder.image"
        @open="openFolder(folder.id)"
      />
    </div>

    <DesktopWindow
      v-if="activeFolder"
      v-model:visible="isWindowVisible"
      :title="activeFolder.name"
      :draggable="true"
      @close="handleClose"
    >
      <component :is="activeFolder.component" />
    </DesktopWindow>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type Component } from 'vue'
import DesktopFolder from '~/components/DesktopFolder.vue'
import DesktopWindow from '~/components/DesktopWindow.vue'
import AboutMePanel from '~/components/panels/AboutMePanel.vue'

interface FolderItem {
  id: string
  name: string
  image: string
  component: Component
}

const folders: FolderItem[] = [
  {
    id: 'about',
    name: 'AboutMe',
    image: '/images/serene.png',
    component: AboutMePanel
  },
]

const activeFolderId = ref<string | null>(null)
const isWindowVisible = ref(false)

const activeFolder = computed<FolderItem | null>(() => {
  if (!activeFolderId.value) return null
  return folders.find(f => f.id === activeFolderId.value) ?? null
})

const openFolder = (folderId: string) => {
  activeFolderId.value = folderId
  isWindowVisible.value = true
}

const handleClose = () => {
  isWindowVisible.value = false
}
</script>