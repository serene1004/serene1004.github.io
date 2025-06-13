<template>
  <routerView/>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('App component mounted')
});
</script>

<style>
@import './styles/reset.css';
</style>