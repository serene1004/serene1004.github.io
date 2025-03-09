<script setup>
import { storeToRefs } from 'pinia'
import { useControlStore } from "@/store/controlStore"

const controlStore = useControlStore()
const {
  isAnimationActive,
  isZoomActive,
  isRotationActive,
  isPanActive
} = storeToRefs(controlStore)
</script>

<template>
  <div class="controls">
    <Button
      :icon="isAnimationActive ? 'pi pi-pause' : 'pi pi-caret-right'"
      :severity="isAnimationActive ? 'secondary' : 'contrast'"
      @click="controlStore.toggleAnimation(!isAnimationActive)"
    />
    <Button
      icon="pi pi-arrows-v"
      :severity="isZoomActive ? 'secondary' : 'contrast'"
      @click="controlStore.toggleZoom(!isZoomActive)"
    />
    <Button
      icon="pi pi-undo"
      :severity="isRotationActive ? 'secondary' : 'contrast'"
      @click="controlStore.toggleRotation(!isRotationActive)"
    />
    <Button
      icon="pi pi-arrows-alt"
      :severity="isPanActive ? 'secondary' : 'contrast'"
      @click="controlStore.togglePan(!isPanActive)"
    />
  </div>
</template>

<style lang="scss" scoped>
.controls {
  position: absolute;
  z-index: 10;
  bottom: 0.5em;
  right: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.25em;

  button {
    width: 2em;
    height: 2em;
  }
}
</style>
