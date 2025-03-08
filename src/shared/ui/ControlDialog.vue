<script setup>
import { ref, reactive, onMounted, defineEmits } from "vue"

const emit = defineEmits(["moveToPlanet"])

const dialogs = reactive({
  aboutMe: { visible: false, position: 'right', planet: 'mercury' },
  project: { visible: false, position: 'left', planet: 'earth'}
})

const openDialog = (dialog) => {
  // 모든 다이얼로그 닫기
  Object.values(dialogs).forEach(d => d.visible = false)
  emit("moveToPlanet", dialog.planet)

  // 선택한 다이얼로그 열기
  dialog.visible = true
}
</script>

<template>
  <div class="actions">
    <Button label="Project" size="small" @click="openDialog(dialogs.project)"/>
    <Button label="AboutMe" size="small" @click="openDialog(dialogs.aboutMe)"/>
  </div>

  <Dialog v-model:visible="dialogs.aboutMe.visible" :position="dialogs.aboutMe.position" :draggable="false" header="AboutMe">
    hello
  </Dialog>
  <Dialog v-model:visible="dialogs.project.visible" :position="dialogs.project.position" :draggable="false" header="Project">
    hello
  </Dialog>
</template>

<style lang="scss" scoped>
.actions {
  position: absolute;
  z-index: 10;
  bottom: 0.5em;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 0.25em;
  transform: translateX(-50%);
}
</style>
