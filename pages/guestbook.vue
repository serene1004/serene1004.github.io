<template>
  <div>hello guestbook</div>

  <UButton
    label="window style modal"
    color="neutral"
    class="cursor-pointer"
    @click="showWindowModal"
  />
  <OsWindow
    v-model:visible="isShowWindowModal"
    title="window style modal"
    draggable
  >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam distinctio qui explicabo quibusdam a, suscipit iure, quod rem vitae esse minus modi ipsam est asperiores, saepe nesciunt consequatur atque adipisci.</p>
  </OsWindow>
</template>

<script lang="ts" setup>
import OsWindow from '~/components/DesktopWindow.vue';

const isShowWindowModal = ref(false)
const showWindowModal = () => {
  isShowWindowModal.value = true
}
</script>