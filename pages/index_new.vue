<template>
  <div id="devjeff">
    <div class="devjeff__info">
      <img height="62" src="/logo.svg" />
    </div>
    <div class="devjeff__code-editor">
      <code-editor />
    </div>
  </div>
</template>

<script>
import CodeEditor from '@/components/CodeEditor.vue';

export default {
  layout: "empty",
  components: {
    CodeEditor
  }
}
</script>

<style lang="scss">
#devjeff {
  display: flex;

  width: 100%;
  min-height: 100vh;
}

.devjeff__info {
  flex: 0.38;
  padding: 36px;
}

.devjeff__code-editor {
  flex: 1;
}
</style>