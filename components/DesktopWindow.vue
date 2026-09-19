<template>
  <teleport to="body">
    <div
      v-if="visible"
      v-show="!hiddenState"
      ref="panel"
      :class="windowStyle === 'note'
        ? 'absolute flex flex-col overflow-hidden rounded-lg border border-slate-500/35 bg-slate-900/55 text-slate-50 shadow-xl backdrop-blur-md dark:border-slate-500/35 dark:bg-slate-900/55 dark:text-slate-100'
        : 'absolute flex min-w-90 flex-col overflow-hidden rounded-lg border border-purple-500/50 bg-slate-900/70 shadow-xl backdrop-blur-md dark:border-purple-500/50 dark:bg-slate-900/70'"
      :style="panelStyle"
      @pointerdown="onFocus"
    >
      <div
        :class="windowStyle === 'note'
          ? 'flex items-center justify-between gap-2 overflow-hidden p-3 select-none'
          : 'flex items-center justify-between gap-2 overflow-hidden bg-purple-500/20 p-1.5 select-none'"
        style="touch-action: none;"
        @pointerdown="isDraggable ? onDragStart($event) : undefined"
      >
        <div :class="windowStyle === 'note' ? 'flex items-center text-slate-50 dark:text-slate-100' : 'flex items-center text-white'">
          <img v-if="image" :src="image" alt="" class="mr-2 h-5 w-5 object-contain" >
          <UIcon v-else :name="icon || 'i-lucide-window'" class="h-5 w-5 mr-2" aria-hidden="true" />
          <h3 class="text-sm font-semibold truncate">{{ title }}</h3>
        </div>

        <div class="flex items-center ml-auto gap-1">
          <button
            type="button"
            :class="controlButtonClass"
            aria-label="Minimize window"
            @pointerdown.stop
            @click="hide"
          >
            <UIcon name="i-lucide-minus" class="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            :class="controlButtonClass"
            :aria-label="!isExpanded ? 'Maximize window' : 'Restore window'"
            @pointerdown.stop
            @click.stop="expand"
          >
            <UIcon :name="!isExpanded ? 'i-lucide-square' : 'i-lucide-copy'" class="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            :class="controlButtonClass"
            aria-label="Window Close"
            @pointerdown.stop
            @click="close"
          >
            <UIcon name="i-lucide-x" class="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div class="relative flex-1 min-h-0">
        <div
          ref="scrollViewport"
          :class="windowStyle === 'note'
            ? 'custom-scrollbar-viewport h-full overflow-auto p-4 text-sm text-slate-800'
            : 'custom-scrollbar-viewport dark h-full overflow-auto border-t border-purple-500/50 bg-slate-900/70 p-3 text-sm text-slate-100 backdrop-blur-xl dark:border-purple-500/50 dark:bg-slate-900/70 dark:text-slate-100'"
          @scroll="syncScrollState"
        >
          <slot />
        </div>
        <div
          v-if="hasOverflow"
          ref="scrollbarTrack"
          class="custom-scrollbar-track pointer-events-auto cursor-pointer"
          aria-label="Scroll window content"
          @pointerdown="onScrollbarTrackPointerDown"
        >
          <span
            class="custom-scrollbar-thumb cursor-grab active:cursor-grabbing"
            :style="{
              height: `${thumbHeight}%`,
              transform: `translateY(${thumbTop}%)`,
            }"
            @pointerdown.stop="onScrollbarThumbPointerDown"
          />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import { useWindowStore } from '~/stores/WindowStore';

const windowStore = useWindowStore();

const props = withDefaults(defineProps<{
  visible?: boolean
  title?: string | null
  draggable?: boolean
  initialOffsetX?: number
  initialOffsetY?: number
  windowWidth?: string | null
  windowHeight?: string | null
  folderId?: string | null
  zIndex?: number
  hidden?: boolean
  icon?: string | null
  image?: string | null
  windowStyle?: 'note' | null
}>(), {
  visible: false,
  title: null,
  draggable: false,
  initialOffsetX: 0,
  initialOffsetY: 0,
  windowWidth: null,
  windowHeight: null,
  hidden: false,
  icon: null,
  image: null,
  windowStyle: null,
});

const emit = defineEmits<{
  'update:visible': [value: boolean]
  'update:hidden': [value: boolean]
  close: []
}>();

const visible = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value),
});

const hiddenState = computed({
  get: () => props.hidden ?? false,
  set: (value) => emit('update:hidden', value),
});

const panel = ref<HTMLElement | null>(null);
const scrollViewport = ref<HTMLElement | null>(null);
const scrollbarTrack = ref<HTMLElement | null>(null);
const hasOverflow = ref(false);
const thumbHeight = ref(100);
const thumbTop = ref(0);
let resizeObserver: ResizeObserver | null = null;
let mutationObserver: MutationObserver | null = null;
let scrollbarDragOffset = 0;

const syncScrollState = () => {
  const viewport = scrollViewport.value;
  if (!viewport) return;

  hasOverflow.value = viewport.scrollHeight > viewport.clientHeight;
  if (!hasOverflow.value) {
    thumbHeight.value = 100;
    thumbTop.value = 0;
    return;
  }

  thumbHeight.value = Math.max((viewport.clientHeight / viewport.scrollHeight) * 100, 12);
  thumbTop.value = (viewport.scrollTop / (viewport.scrollHeight - viewport.clientHeight))
    * (100 - thumbHeight.value);
};

const updateScrollFromPointer = (event: PointerEvent, offset = 0) => {
  const viewport = scrollViewport.value;
  const track = scrollbarTrack.value;
  if (!viewport || !track) return;

  const trackRect = track.getBoundingClientRect();
  const availableTrackHeight = trackRect.height * (1 - thumbHeight.value / 100);
  const position = Math.min(
    Math.max(event.clientY - trackRect.top - offset, 0),
    Math.max(availableTrackHeight, 0),
  );
  viewport.scrollTop = (position / Math.max(availableTrackHeight, 1))
    * (viewport.scrollHeight - viewport.clientHeight);
  syncScrollState();
};

const onScrollbarPointerMove = (event: PointerEvent) => {
  updateScrollFromPointer(event, scrollbarDragOffset);
};

const onScrollbarPointerUp = () => {
  window.removeEventListener('pointermove', onScrollbarPointerMove);
  scrollbarDragOffset = 0;
};

const onScrollbarTrackPointerDown = (event: PointerEvent) => {
  if (event.target !== event.currentTarget) return;
  event.preventDefault();
  updateScrollFromPointer(event);
};

const onScrollbarThumbPointerDown = (event: PointerEvent) => {
  event.preventDefault();
  scrollbarDragOffset = event.clientY - (event.currentTarget as HTMLElement).getBoundingClientRect().top;
  window.addEventListener('pointermove', onScrollbarPointerMove);
  window.addEventListener('pointerup', onScrollbarPointerUp, { once: true });
};

onMounted(() => {
  nextTick(syncScrollState);
  resizeObserver = new ResizeObserver(syncScrollState);
  mutationObserver = new MutationObserver(() => requestAnimationFrame(syncScrollState));
  if (scrollViewport.value) {
    resizeObserver.observe(scrollViewport.value);
    mutationObserver.observe(scrollViewport.value, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  mutationObserver?.disconnect();
  window.removeEventListener('pointermove', onScrollbarPointerMove);
});

const offsetX = ref(props.initialOffsetX);
const offsetY = ref(props.initialOffsetY);
const isExpanded = ref(false);
const prevOffsetX = ref(0);
const prevOffsetY = ref(0);

const panelStyle = computed(() => {
  if (isExpanded.value) {
    return {
      left: '0',
      top: '0',
      transform: 'none',
      width: '100vw',
      height: 'calc(100vh - 48px)',
      borderRadius: '0',
      zIndex: props.zIndex ?? 1,
    };
  }

  return {
    transform: `translate(calc(-50% + ${offsetX.value}px), calc(-50% + ${offsetY.value}px))`,
    left: '50%',
    top: '50%',
    zIndex: props.zIndex ?? 1,
    ...(props.windowWidth ? { width: props.windowWidth } : {}),
    ...(props.windowHeight ? { height: props.windowHeight } : {}),
  };
});

const onFocus = () => {
  if (props.folderId) windowStore.bringToFront(props.folderId);
};

let dragging = false;
let originX = 0;
let originY = 0;

const isDraggable = computed(() => props.draggable && !isExpanded.value);

function onDragMove(event: PointerEvent) {
  if (!dragging || !panel.value) return;

  const panelRect = panel.value.getBoundingClientRect();
  const nextX = event.clientX - originX;
  const nextY = event.clientY - originY;

  const maxX = (window.innerWidth - panelRect.width) / 2;
  const minX = -maxX;
  const maxY = (window.innerHeight - panelRect.height) / 2;
  const minY = -maxY;

  offsetX.value = Math.min(Math.max(nextX, minX), maxX);
  offsetY.value = Math.min(Math.max(nextY, minY), maxY);
}

function onDragEnd() {
  dragging = false;
  window.removeEventListener('pointermove', onDragMove);
}

const onDragStart = (event: PointerEvent) => {
  if (!isDraggable.value) return;
  dragging = true;
  originX = event.clientX - offsetX.value;
  originY = event.clientY - offsetY.value;
  window.addEventListener('pointermove', onDragMove);
  window.addEventListener('pointerup', onDragEnd, { once: true });
};

const expand = () => {
  if (!isExpanded.value) {
    prevOffsetX.value = offsetX.value;
    prevOffsetY.value = offsetY.value;
    isExpanded.value = true;
    return;
  }

  isExpanded.value = false;
  offsetX.value = prevOffsetX.value;
  offsetY.value = prevOffsetY.value;
};

const hide = () => {
  hiddenState.value = true;
};

const close = () => {
  if (!visible.value) return;
  visible.value = false;
  emit('close');
};

const controlButtonClass = computed(() => (props.windowStyle === 'note'
  ? 'inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-slate-50/90 hover:bg-white/16 active:bg-white/24 dark:text-slate-300 dark:hover:bg-white/6 dark:active:bg-white/10'
  : 'inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border border-white/30 bg-white/10 text-white hover:bg-white/20 active:bg-white/30'));
</script>
