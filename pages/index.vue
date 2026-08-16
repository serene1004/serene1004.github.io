<template>
  <div class="h-full">
    <div class="absolute z-10 left-4 top-4 flex gap-5">
      <div class="flex flex-col gap-4">
        <DesktopFolder
          v-for="folder in companyFolders"
          :key="folder.id"
          :label="folder.name"
          :icon="folder.icon"
          :image="folder.image"
          @open="openFolder(folder.id)"
        />
      </div>

      <div class="flex flex-col gap-4">
        <DesktopFolder
          v-for="folder in personalFolders"
          :key="folder.id"
          :label="folder.name"
          :icon="folder.icon"
          :image="folder.image"
          @open="openFolder(folder.id)"
        />
      </div>
    </div>

    <DesktopWindow
      v-for="win in visibleWindows"
      :key="win.folderId"
      v-model:visible="win.visible"
      v-model:hidden="win.hidden"
      :title="getFolder(win.folderId)?.name ?? ''"
      :draggable="true"
      :initial-offset-x="win.offsetX"
      :initial-offset-y="win.offsetY"
      :window-width="getFolder(win.folderId)?.window?.width"
      :window-height="getFolder(win.folderId)?.window?.height"
      :folder-id="win.folderId"
      :z-index="win.zIndex"
      :icon="getFolder(win.folderId)?.icon"
      :image="getFolder(win.folderId)?.image"
      :window-style="getFolder(win.folderId)?.windowStyle"
      @close="windowStore.closeWindow(win.folderId)"
    >
      <component
        :is="getFolder(win.folderId)?.component"
        v-bind="getFolder(win.folderId)?.componentProps"
      />
    </DesktopWindow>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import DesktopFolder from '~/components/DesktopFolder.vue';
import DesktopWindow from '~/components/DesktopWindow.vue';
import { folders, type FolderItem } from '~/data/folders';
import { useWindowStore } from '~/stores/WindowStore';

const windowStore = useWindowStore();
const { openedWindows } = storeToRefs(windowStore);
const getFolder = (id: string): FolderItem | undefined => folders.find((folder) => folder.id === id);

const visibleWindows = computed(() => openedWindows.value);

const companyFolderIds = new Set([
  'about', 'project', 'aisct', 'danbichat', 'heidi', 'aetem-v2',
]);
const companyFolders = computed(() => folders.filter((folder) => companyFolderIds.has(folder.id)));
const personalFolders = computed(() => folders.filter((folder) => !companyFolderIds.has(folder.id)));

const openFolder = (folderId: string) => {
  const folder = getFolder(folderId);
  if (!folder) return;
  windowStore.openWindow(folderId);
};

const focusOrder = computed(() => visibleWindows.value
  .filter((windowItem) => windowItem.visible && !windowItem.hidden)
  .sort((left, right) => (left.zIndex ?? 0) - (right.zIndex ?? 0)));

const handleKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    const top = focusOrder.value.at(-1);
    if (top) windowStore.closeWindow(top.folderId);
  }

  if (event.altKey && event.key.toLowerCase() === 'tab') {
    event.preventDefault();
    const orderedWindows = focusOrder.value;
    if (!orderedWindows.length) return;
    const next = orderedWindows.at(-2) ?? orderedWindows.at(-1);
    if (next) windowStore.bringToFront(next.folderId);
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey);
});
</script>
