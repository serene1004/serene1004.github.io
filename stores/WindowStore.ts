import { defineStore } from 'pinia';

export interface OpenedWindow {
  folderId: string
  visible: boolean
  hidden: boolean
  offsetX: number
  offsetY: number
  zIndex?: number
}

const randomOffsetRange = {
  x: 280,
  y: 180,
};

const getRandomOffset = (range: number) => Math.round((Math.random() * 2 - 1) * range);

const getMaxZ = (openedWindows: OpenedWindow[]) => (
  openedWindows.reduce(
    (maxZ, windowItem) => Math.max(maxZ, windowItem.zIndex ?? 0),
    0,
  )
);

export const useWindowStore = defineStore('window', {
  state: () => ({
    openedWindows: [] as OpenedWindow[],
  }),
  actions: {
    openWindow(folderId: string) {
      const existing = this.openedWindows.find((windowItem) => windowItem.folderId === folderId);
      if (existing) {
        existing.visible = true;
        existing.hidden = false;
        this.bringToFront(folderId);
        return;
      }

      const maxZ = getMaxZ(this.openedWindows);

      this.openedWindows.push({
        folderId,
        visible: true,
        hidden: false,
        offsetX: getRandomOffset(randomOffsetRange.x),
        offsetY: getRandomOffset(randomOffsetRange.y),
        zIndex: maxZ + 1,
      });
    },
    closeWindow(folderId: string) {
      this.openedWindows = this.openedWindows.filter(
        (windowItem) => windowItem.folderId !== folderId,
      );
    },
    hideWindow(folderId: string) {
      const windowItem = this.openedWindows.find((item) => item.folderId === folderId);
      if (!windowItem) return;
      windowItem.hidden = true;
    },
    showWindow(folderId: string) {
      const windowItem = this.openedWindows.find((item) => item.folderId === folderId);
      if (!windowItem) return;
      windowItem.hidden = false;
      windowItem.visible = true;
      this.bringToFront(folderId);
    },
    bringToFront(folderId: string) {
      const windowItem = this.openedWindows.find((item) => item.folderId === folderId);
      if (!windowItem) return;

      const maxZ = getMaxZ(this.openedWindows);
      windowItem.zIndex = maxZ + 1;
      windowItem.visible = true;
    },
  },
});
