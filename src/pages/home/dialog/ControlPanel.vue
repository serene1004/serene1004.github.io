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
      :severity="isAnimationActive ? 'primary' : 'secondary'"
      :text="!isAnimationActive"
      @click="controlStore.toggleAnimation(!isAnimationActive)"
    />
    <Button
      icon="pi pi-arrows-v"
      :severity="isZoomActive ? 'primary' : 'secondary'"
      :text="!isZoomActive"
      @click="controlStore.toggleZoom(!isZoomActive)"
    />
    <Button
      icon="pi pi-undo"
      :severity="isRotationActive ? 'primary' : 'secondary'"
      :text="!isRotationActive"
      @click="controlStore.toggleRotation(!isRotationActive)"
    />
    <Button
      icon="pi pi-arrows-alt"
      :severity="isPanActive ? 'primary' : 'secondary'"
      :text="!isPanActive"
      @click="controlStore.togglePan(!isPanActive)"
    />
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  align-items: center;
  gap: 0.25em;

  button {
    width: 2em;
    height: 2em;
  }
}
</style>