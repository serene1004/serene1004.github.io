<template>
  <teleport to="body">
    <div
      v-if="visible"
      v-show="!hiddenState"
      ref="panel"
      class="absolute flex flex-col min-w-90 border shadow-xl backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-purple-200/60 dark:border-purple-500/50"
      :style="panelStyle"
      @pointerdown="onFocus"
    >
      <div
        class="flex items-center justify-between p-1.5 gap-2 bg-purple-500/20 select-none overflow-hidden"
        @pointerdown="isDraggable ? onDragStart($event) : undefined"
      >
        <div class="flex items-center text-white">
          <UIcon :name="icon || 'i-lucide-window'" class="h-5 w-5 mr-2" aria-hidden="true" />
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
            @click="expand"
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

      <div class="flex-1 min-h-0 p-3 bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-100 text-sm overflow-auto rounded-b-md border-t border-white/30 dark:border-slate-800/70">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { bringToFront } from '~/composables/useWindowStore'

const props = withDefaults(defineProps<{
  visible?: boolean
  title?: string | null
  draggable?: boolean
  initialOffsetX?: number
  initialOffsetY?: number
  folderId?: string | null
  zIndex?: number
  hidden?: boolean
  icon?: string | null
}>(), {
  visible: false,
  title: null,
  draggable: false,
  initialOffsetX: 0,
  initialOffsetY: 0,
  hidden: false,
  icon: null
})

const emit = defineEmits<{
  'update:visible': [value: boolean]
  'update:hidden': [value: boolean]
  close: []
}>()

const visible = computed({
  get: () => props.visible,
  set: v => emit('update:visible', v)
})

const hiddenState = computed({
  get: () => props.hidden ?? false,
  set: v => emit('update:hidden', v)
})

const panel = ref<HTMLElement | null>(null)
const offsetX = ref(props.initialOffsetX)
const offsetY = ref(props.initialOffsetY)

const isExpanded = ref(false)
const prevOffsetX = ref(0)
const prevOffsetY = ref(0)

const panelStyle = computed(() => {
  if (isExpanded.value) {
    return {
      left: '0',
      top: '0',
      transform: 'none',
      width: '100vw',
      height: 'calc(100vh - 48px)',
      zIndex: props.zIndex ?? 1
    }
  }

  return {
    transform: `translate(calc(-50% + ${offsetX.value}px), calc(-50% + ${offsetY.value}px))`,
    left: '50%',
    top: '50%',
    zIndex: props.zIndex ?? 1
  }
})

const onFocus = () => {
  if (props.folderId) bringToFront(props.folderId)
}

let dragging = false;
let originX = 0;
let originY = 0;

const isDraggable = computed(() => props.draggable && !isExpanded.value)

const onDragStart = (e: PointerEvent) => {
  if (!isDraggable.value) return;
  dragging = true;
  originX = e.clientX - offsetX.value;
  originY = e.clientY - offsetY.value;
  window.addEventListener('pointermove', onDragMove);
  window.addEventListener('pointerup', onDragEnd, { once: true });
}

const onDragMove = (e: PointerEvent) => {
  if (!dragging || !panel.value) return;

  const panelRect = panel.value.getBoundingClientRect();

  const nextX = e.clientX - originX;
  const nextY = e.clientY - originY;

  const maxX = (window.innerWidth - panelRect.width) / 2;
  const minX = -maxX;
  const maxY = (window.innerHeight - panelRect.height) / 2;
  const minY = -maxY;

  offsetX.value = Math.min(Math.max(nextX, minX), maxX);
  offsetY.value = Math.min(Math.max(nextY, minY), maxY);
}

const onDragEnd = () => {
  dragging = false;
  window.removeEventListener('pointermove', onDragMove);
}

const expand = () => {
  if (!isExpanded.value) {
    prevOffsetX.value = offsetX.value;
    prevOffsetY.value = offsetY.value;
    isExpanded.value = true;
  } else {
    isExpanded.value = false;
    offsetX.value = prevOffsetX.value;
    offsetY.value = prevOffsetY.value;
  }
}

const hide = () => {
  hiddenState.value = true
}

const close = () => {
  if (!visible.value) return
  visible.value = false
  emit('close')
}

const controlButtonClass = 'inline-flex items-center justify-center w-6 h-6 rounded-sm bg-white/10 border border-white/30 text-white hover:bg-white/20 active:bg-white/30 cursor-pointer';
</script>
