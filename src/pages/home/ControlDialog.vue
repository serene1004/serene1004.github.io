<script setup>
import { ref, reactive, onMounted, shallowRef } from "vue"

import About from './dialog/About.vue'
import Skills from './dialog/Skills.vue'
import ControlPanel from './dialog/ControlPanel.vue'

const emit = defineEmits(["moveToPlanet"])

const dialogs = reactive({
  aboutMe: { visible: false, position: 'topright', title: 'AboutMe', component: shallowRef(About), planet: 'earth' },
  skill: { visible: false, position: 'right', title: 'Skills', component: shallowRef(Skills), planet: 'jupiter'},
  controller: { visible: false, position: 'bottomright', title: 'Controller', component: shallowRef(ControlPanel), planet: 'sun'},
})

// 다이얼로그 열기/닫기
const openDialog = (dialog) => {
  if (dialog.visible) {
    // 이미 열려 있는 다이얼로그를 클릭하면 닫기
    dialog.visible = false
  } else {
    // 다른 다이얼로그가 열려있으면 모두 닫고, 선택한 다이얼로그 열기
    closeAllDialogs()
    // emit("moveToPlanet", dialog.planet)
    dialog.visible = true
  }
}

// 모든 다이얼로그 닫기
const closeAllDialogs = () => {
  Object.values(dialogs).forEach(d => d.visible = false)
}

const dialogPt = ref({
  root: {
    style: {
      maxHeight: '50vh',
    }
  },
  header: {
    style: {
      padding: '8px 8px 8px 16px'
    }
  },
  content: {
    style: {
      padding: '0px 16px 16px',
      fontSize: '16px',
      overflowX: 'hidden'
    }
  }
})
</script>

<template>
  <div class="actions">
    <Button 
      v-for="dialog in dialogs" 
      :key="dialog.title" 
      :label="dialog.title" 
      size="small"
      @click="openDialog(dialog)"
    />
  </div>

  <Dialog
    v-for="dialog in dialogs"
    :key="dialog.title"
    v-model:visible="dialog.visible"
    :position="dialog.position"
    :draggable="false"
    :header="dialog.title"
    :pt="dialogPt"
  >
    <component :is="dialog.component"/>
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
