<script setup>
import { ref, defineEmits } from "vue"

const emit = defineEmits(["toggle-animation", "toggle-rotation", "toggle-zoom", "toggle-pan"])

const isAnimationEnabled = ref(true)
const isZoomEnabled = ref(true)
const isRotationEnabled = ref(true)
const isPanEnabled = ref(false)

const toggleAnimation = () => {
  isAnimationEnabled.value = !isAnimationEnabled.value
  emit("toggle-animation", isAnimationEnabled.value)
}

const toggleZoom = () => {
  isZoomEnabled.value = !isZoomEnabled.value
  emit("toggle-zoom", isZoomEnabled.value)
}

const toggleRotation = () => {
  isRotationEnabled.value = !isRotationEnabled.value
  emit("toggle-rotation", isRotationEnabled.value)
}

const togglePan = () => {
  isPanEnabled.value = !isPanEnabled.value
  emit("toggle-pan", isPanEnabled.value)
}
</script>

<template>
  <div class="controls">
    <Button
      :icon="isAnimationEnabled ? 'pi pi-pause' : 'pi pi-caret-right'"
      severity="secondary"
      :text="!isAnimationEnabled"
      @click="toggleAnimation"
    />
    <Button
      icon="pi pi-arrows-v"
      severity="secondary"
      :text="!isZoomEnabled"
      @click="toggleZoom"
    />
    <Button
      icon="pi pi-undo"
      severity="secondary"
      :text="!isRotationEnabled"
      @click="toggleRotation"
    />
    <!-- <Button
      icon="pi pi-arrows-alt"
      severity="secondary"
      :text="!isPanEnabled"
      @click="togglePan"
    /> -->
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
