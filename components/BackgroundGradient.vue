<script setup>
import Gradient from './Gradient.js'

onMounted(() => {
  // Create your instance
  const gradient = new Gradient()

  // Call `initGradient` with the selector to your canvas
  gradient.initGradient('#gradient-canvas')
})
</script>

<template>
  <canvas id="gradient-canvas" data-transition-in />
</template>

<style lang="scss" scoped>
#gradient-canvas {
  display: block;
  height: 100%;
  width: 100%;

  --gradient-color-1: #f1fd10;
  --gradient-color-2: #fdca10;
  --gradient-color-3: #fdde10;
}
</style>