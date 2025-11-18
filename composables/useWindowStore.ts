import { ref } from 'vue'

export interface OpenedWindow {
  folderId: string
  visible: boolean
  offsetX: number
  offsetY: number
  zIndex?: number
}

const openedWindows = ref<OpenedWindow[]>([])

const baseOffset = 0
const offsetStep = 32

export function openWindow(folderId: string) {
  const existing = openedWindows.value.find(w => w.folderId === folderId)
  if (existing) {
    existing.visible = true
    return
  }
  const index = openedWindows.value.length
  const maxZ = openedWindows.value.reduce((m, w) => Math.max(m, w.zIndex || 0), 0)
  openedWindows.value.push({
    folderId,
    visible: true,
    offsetX: baseOffset + index * offsetStep,
    offsetY: baseOffset + index * offsetStep,
    zIndex: maxZ + 1
  })
}

export function closeWindow(folderId: string) {
  openedWindows.value = openedWindows.value.filter(w => w.folderId !== folderId)
}

export function bringToFront(folderId: string) {
  const idx = openedWindows.value.findIndex(w => w.folderId === folderId)
  if (idx === -1) return
  const win = openedWindows.value[idx]
  if (!win) return
  // assign the highest zIndex
  const maxZ = openedWindows.value.reduce((m, w) => Math.max(m, w.zIndex || 0), 0)
  win.zIndex = maxZ + 1
  win.visible = true
}

export { openedWindows }
