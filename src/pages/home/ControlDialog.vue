<script setup>
import { ref, reactive, onMounted, defineEmits } from "vue"

import About from './dialog/About.vue'
import Project from './dialog/Project.vue'

const emit = defineEmits(["moveToPlanet"])

const dialogs = reactive({
  aboutMe: { visible: false, position: 'topright', title: 'AboutMe', planet: 'mercury' },
  project: { visible: false, position: 'right', title: 'Project', planet: 'earth'},
  test: { visible: false, position: 'left', title: 'Test', planet: 'jupiter'},
})

// 다이얼로그 열기
const openDialog = (dialog) => {
  closeAllDialogs()

  emit("moveToPlanet", dialog.planet)
  dialog.visible = true
}

// 모든 다이얼로그 닫기
const closeAllDialogs = () => {
  Object.values(dialogs).forEach(d => d.visible = false)
}

const dialogPt = ref({

})
</script>

<template>
  <div class="actions">
    <Button label="AboutMe" size="small" @click="openDialog(dialogs.aboutMe)"/>
    <Button label="Project" size="small" @click="openDialog(dialogs.project)"/>
    <Button label="Test" size="small" @click="openDialog(dialogs.test)"/>
  </div>

  <Dialog v-model:visible="dialogs.aboutMe.visible" :position="dialogs.aboutMe.position" :draggable="false" :header="dialogs.aboutMe.title">
    <About/>
  </Dialog>
  <Dialog v-model:visible="dialogs.project.visible" :position="dialogs.project.position" :draggable="false" :header="dialogs.project.title">
    <Project/>
  </Dialog>
  <Dialog v-model:visible="dialogs.test.visible" :position="dialogs.test.position" :draggable="false" :header="dialogs.test.title">
    <div>Test입니다.</div>
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
