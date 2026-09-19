<template>
  <Teleport to="body">
    <Transition name="about-menu">
      <div
        v-if="open"
        class="fixed inset-0 z-999"
        @click.self="emit('close')"
      >
        <section
          ref="dialogPanel"
          class="absolute bottom-14 left-1/2 w-[min(42rem,calc(100vw-1rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/90 text-slate-100 shadow-[0_18px_70px_rgba(2,6,23,0.5)] backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="About Me"
          tabindex="-1"
          @keydown.esc="emit('close')"
        >
          <div class="about-menu-scroll max-h-[calc(100vh-8rem)] overflow-y-auto p-5">
            <AboutMePanel />
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import AboutMePanel from '~/components/panels/AboutMePanel.vue';

const props = defineProps<{
  open: boolean
}>();

const emit = defineEmits<{
  close: []
}>();

const dialogPanel = ref<HTMLElement | null>(null);
watch(() => props.open, (isOpen) => {
  if (isOpen) nextTick(() => dialogPanel.value?.focus());
});
</script>

<style scoped>
.about-menu-enter-active,
.about-menu-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.about-menu-enter-from,
.about-menu-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.about-menu-scroll {
  scrollbar-width: none;
}

.about-menu-scroll::-webkit-scrollbar {
  display: none;
}
</style>
