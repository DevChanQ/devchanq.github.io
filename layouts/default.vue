<template>
  <div id="devjeff__default-layout" class="light" :class="{'sidenav-shown': sidenavShown}">
    <div id="devjeff__back_layer" style="overflow-x: hidden;">

      <div class="container">
        <devjeff-nav style="margin-bottom: 30px;" />
      </div>
      
      <Nuxt />

      <devjeff-footer />
    </div>
  </div>
</template>

<script>
import DevjeffNav from '~/components/DevjeffNav';
import DevjeffFooter from '~/components/DevjeffFooter';

export default {
  data() {
    return {
      sidenavShown: false
    }
  },
  components: { DevjeffNav, DevjeffFooter },
}
</script>