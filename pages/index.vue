<template>
  <div class="desktop-screen">
    <section class="desktop-group" :aria-label="copy.profileGroup">
      <ul class="desktop-folder-grid">
        <li>
          <button class="desktop-folder desktop-shortcut" type="button" @click="openFolder(profileFolder.id)">
            <PixelFolderIcon :src="profileFolder.icon" />
            <span>{{ folderName(profileFolder.id) }}</span>
          </button>
        </li>
      </ul>
    </section>

    <section class="desktop-group" :aria-label="copy.workProjects">
      <ul class="desktop-folder-grid" :aria-label="copy.workFolders">
        <li v-for="folder in workFolders" :key="folder.id">
          <button class="desktop-folder" type="button" @click="openFolder(folder.id)">
            <PixelFolderIcon :src="folder.icon" />
            <span>{{ folderName(folder.id) }}</span>
          </button>
        </li>
      </ul>
    </section>

    <section class="desktop-group" :aria-label="copy.sideProjects">
      <ul class="desktop-folder-grid" :aria-label="copy.sideProjectFolders">
        <li v-for="folder in sideProjectFolders" :key="folder.id">
          <button class="desktop-folder" type="button" @click="openFolder(folder.id)">
            <PixelFolderIcon :src="folder.icon" />
            <span>{{ folderName(folder.id) }}</span>
          </button>
        </li>
      </ul>
    </section>

    <section class="desktop-group" :aria-label="copy.desktopApps">
      <ul class="desktop-folder-grid">
        <li>
          <button class="desktop-folder desktop-shortcut" type="button" @click="openFolder('terminal')">
            <img class="desktop-app-icon" src="/images/folder-icons/terminal.png" alt="" aria-hidden="true">
            <span>{{ copy.terminal.title }}</span>
          </button>
        </li>
      </ul>
    </section>

    <ProjectWindow
      v-for="window in visibleWindows"
      :key="window.id"
      :folder-id="window.id"
      :maximized="window.maximized"
      :style="windowStyle(window)"
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
import { usePortfolioLocale } from '~/composables/usePortfolioLocale';
import {
  profileFolder, workFolders, sideProjectFolders, getFolderDisplayName,
} from '~/data/folders';
import { localeMessages } from '~/data/locale-messages';

const { locale } = usePortfolioLocale();
const copy = computed(() => localeMessages[locale.value]);
useSeoMeta({
  title: () => copy.value.pageTitle,
  description: () => copy.value.pageDescription,
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
const folderName = (folderId: string) => getFolderDisplayName(folderId, locale.value);
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
const windowStyle = (window: { id: string; initialOffset: number }) => ({
  zIndex: activeWindowId.value === window.id
    ? 29
    : 20 + Math.min(zOrder.value.indexOf(window.id), 8),
  '--window-offset': `${window.initialOffset}px`,
});
</script>
