<template>
  <div class="desktop-screen">
    <section class="desktop-group" aria-label="프로필">
      <ul class="desktop-folder-grid">
        <li>
          <button class="desktop-folder desktop-shortcut" type="button" @click="openFolder(profileFolder.id)">
            <PixelFolderIcon :src="profileFolder.icon" />
            <span>{{ profileFolder.name }}</span>
          </button>
        </li>
      </ul>
    </section>

    <section class="desktop-group" aria-label="진행 프로젝트">
      <ul class="desktop-folder-grid" aria-label="진행 프로젝트 폴더">
        <li v-for="folder in workFolders" :key="folder.id">
          <button class="desktop-folder" type="button" @click="openFolder(folder.id)">
            <PixelFolderIcon :src="folder.icon" />
            <span>{{ folder.name }}</span>
          </button>
        </li>
      </ul>
    </section>

    <section class="desktop-group" aria-label="개인 사이드 프로젝트">
      <ul class="desktop-folder-grid" aria-label="개인 사이드 프로젝트 폴더">
        <li v-for="folder in sideProjectFolders" :key="folder.id">
          <button class="desktop-folder" type="button" @click="openFolder(folder.id)">
            <PixelFolderIcon :src="folder.icon" />
            <span>{{ folder.name }}</span>
          </button>
        </li>
      </ul>
    </section>

    <ProjectWindow
      v-for="(window, index) in visibleWindows"
      :key="window.id"
      :folder-id="window.id"
      :maximized="window.maximized"
      :style="windowStyle(window, index)"
      @close="closeWindowAndFocus(window.id)"
      @minimize="minimizeWindowAndFocus(window.id)"
      @toggle-maximize="toggleMaximize(window.id)"
      @activate="moveToFront(window.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick } from 'vue';
import PixelFolderIcon from '~/components/PixelFolderIcon.vue';
import ProjectWindow from '~/components/ProjectWindow.vue';
import { useDesktopWindows } from '~/composables/useDesktopWindows';
import { profileFolder, workFolders, sideProjectFolders } from '~/data/folders';

useSeoMeta({
  title: 'Serene1004 | Frontend Developer Portfolio',
  description: '윤용준의 프론트엔드 포트폴리오. 폴더를 열어 업무 프로젝트와 개인 프로젝트를 살펴보세요.',
});

const {
  windows, zOrder, openWindow, closeWindow, minimizeWindow, toggleMaximize, moveToFront,
  activeWindowId,
} = useDesktopWindows();
const visibleWindows = computed(() => windows.value
  .filter((window) => !window.minimized)
  .sort((first, second) => zOrder.value.indexOf(first.id) - zOrder.value.indexOf(second.id)));

const openFolder = (folderId: string) => {
  openWindow(folderId);
};
const focusActiveWindow = async () => {
  await nextTick();
  if (activeWindowId.value) {
    document.getElementById(`project-window-${activeWindowId.value}`)?.focus();
  }
};
const closeWindowAndFocus = async (id: string) => {
  closeWindow(id);
  await focusActiveWindow();
};
const minimizeWindowAndFocus = async (id: string) => {
  minimizeWindow(id);
  await focusActiveWindow();
};
const windowStyle = (window: { id: string }, index: number) => ({
  zIndex: activeWindowId.value === window.id ? 29 : 20 + Math.min(index, 8),
  '--window-offset': `${Math.min(index, 5) * 18}px`,
});
</script>
