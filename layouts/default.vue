<script setup>
const sidenavShown = ref(false);
</script>

<template>
  <div id="devjeff__default-layout" class="light" :class="{'sidenav-shown': sidenavShown}">
    <div id="devjeff__back_layer" style="overflow-x: hidden;">

      <div class="container">
        <devjeff-nav style="margin-bottom: 30px;" />
      </div>
      
      <slot></slot>

      <devjeff-footer />
    </div>
  </div>
</template>

