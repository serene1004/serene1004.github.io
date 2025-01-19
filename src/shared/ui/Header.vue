<script setup>
import { ref } from "vue"

const tabs = ref([
  { title: "Gallery", value: 0 },
  { title: "Notes", value: 1 },
  { title: "Contact", value: 2 },
])
</script>

<template>
  <header>
    <div class="inner">
      <Tabs :value="0">
        <TabList>
          <Tab v-for="tab in tabs" :value="tab.value">{{ tab.title }}</Tab>
        </TabList>
      </Tabs>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
}
</style>
