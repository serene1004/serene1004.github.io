import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useControlStore = defineStore('controls', () => {
  const isAnimationActive = ref(true)
  const isZoomActive = ref(true)
  const isRotationActive = ref(true)
  const isPanActive = ref(true)

  const toggleAnimation = (enabled) => {
    isAnimationActive.value = enabled
  }

  const toggleZoom = (enabled) => {
    isZoomActive.value = enabled
  }

  const toggleRotation = (enabled) => {
    isRotationActive.value = enabled
  }

  const togglePan = (enabled) => {
    isPanActive.value = enabled
  }

  return {
    isAnimationActive,
    isZoomActive,
    isRotationActive,
    isPanActive,
    toggleAnimation,
    toggleZoom,
    toggleRotation,
    togglePan
  }
})