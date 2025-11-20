import { ref } from 'vue';

export interface OpenedWindow {
  folderId: string;
  visible: boolean;
  hidden: boolean;
  offsetX: number;
  offsetY: number;
  zIndex?: number;
}

const openedWindows = ref<OpenedWindow[]>([]);

const baseOffset = 0;
const offsetStep = 32;

export function openWindow(folderId: string) {
  const existing = openedWindows.value.find(w => w.folderId === folderId);
  if (existing) {
    existing.visible = true;
    existing.hidden = false;
    bringToFront(folderId);
    return;
  }

  const index = openedWindows.value.length;
  const maxZ = openedWindows.value.reduce(
    (m, w) => Math.max(m, w.zIndex || 0),
    0
  );

  openedWindows.value.push({
    folderId,
    visible: true,
    hidden: false,
    offsetX: baseOffset + index * offsetStep,
    offsetY: baseOffset + index * offsetStep,
    zIndex: maxZ + 1
  });
}

export function closeWindow(folderId: string) {
  openedWindows.value = openedWindows.value.filter(w => w.folderId !== folderId);
}

// 창 최소화 (화면에서는 숨기고 Footer에는 남김)
export function hideWindow(folderId: string) {
  const win = openedWindows.value.find(w => w.folderId === folderId);
  if (!win) return;
  win.hidden = true;
}

// Footer에서 다시 살려낼 때
export function showWindow(folderId: string) {
  const win = openedWindows.value.find(w => w.folderId === folderId);
  if (!win) return;
  win.hidden = false;
  win.visible = true;
  bringToFront(folderId);
}

export function bringToFront(folderId: string) {
  const win = openedWindows.value.find(w => w.folderId === folderId);
  if (!win) return;

  const maxZ = openedWindows.value.reduce(
    (m, w) => Math.max(m, w.zIndex || 0),
    0
  );

  win.zIndex = maxZ + 1;
  win.visible = true;
}

export { openedWindows }