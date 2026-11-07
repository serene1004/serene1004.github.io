export interface DesktopWindowState {
  id: string
  minimized: boolean
  maximized: boolean
}

export const useDesktopWindows = () => {
  const windows = useState<DesktopWindowState[]>('desktop-windows', () => []);
  const zOrder = useState<string[]>('desktop-window-z-order', () => []);
  const activeWindowId = useState<string | null>('desktop-active-window', () => null);

  const findTopVisibleWindow = () => [...zOrder.value]
    .reverse()
    .find((windowId) => windows.value.some(
      (window) => window.id === windowId && !window.minimized,
    )) ?? null;

  const moveToFront = (id: string) => {
    if (!windows.value.some((window) => window.id === id)) return;
    windows.value = windows.value.map((window) => (
      window.id === id ? { ...window, minimized: false } : window
    ));
    zOrder.value = [...zOrder.value.filter((windowId) => windowId !== id), id];
    activeWindowId.value = id;
  };

  const openWindow = (id: string) => {
    if (windows.value.some((window) => window.id === id)) {
      moveToFront(id);
      return;
    }
    windows.value = [...windows.value, { id, minimized: false, maximized: false }];
    zOrder.value = [...zOrder.value, id];
    activeWindowId.value = id;
  };

  const closeWindow = (id: string) => {
    windows.value = windows.value.filter((window) => window.id !== id);
    zOrder.value = zOrder.value.filter((windowId) => windowId !== id);
    activeWindowId.value = findTopVisibleWindow();
  };

  const minimizeWindow = (id: string) => {
    windows.value = windows.value.map((window) => (
      window.id === id ? { ...window, minimized: true } : window
    ));
    if (activeWindowId.value === id) {
      activeWindowId.value = findTopVisibleWindow();
    }
  };

  const toggleMaximize = (id: string) => {
    windows.value = windows.value.map((window) => (
      window.id === id ? { ...window, maximized: !window.maximized } : window
    ));
  };

  const toggleWindow = (id: string) => {
    const window = windows.value.find((item) => item.id === id);
    if (!window) return;
    if (!window.minimized && activeWindowId.value === id) {
      minimizeWindow(id);
      return;
    }
    moveToFront(id);
  };

  return {
    windows,
    zOrder,
    activeWindowId,
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    moveToFront,
    toggleWindow,
  };
};
