<template>
  <div id="devjeff" :style="[height ? {height: `${height}px`} : {}]">
    <div class="devjeff__info">
      <div>
        <img height="56" src="/logo.png" />
      </div>
      <div class="devjeff__contacts">
        <a target="_blank" href="https://github.com/DevChanQ">
          <div class="devjeff__icon github"></div>
        </a>
        <a target="_blank" href="https://twitter.com/DevJeffHK">
          <div class="devjeff__icon twitter"></div>
        </a>
        <a href="mailto:jeffrey@devjeff.info">
          <div class="devjeff__icon email"></div>
        </a>
      </div>
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
  data() {
    return {
      height: null
    }
  },
  components: {
    CodeEditor
  },
  mounted() {
    this.height = window.innerHeight
  }
}
</script>

<style lang="scss">
#devjeff {
  display: flex;

  width: 100%;
  height: 100vh;

  @media screen and (max-width: 575px) {
    flex-flow: column;
  }
}

.devjeff__info {
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  flex: 0.35;
  padding: 36px;

  @media screen and (max-width: 1023px) {
    flex: initial;
  }

  @media screen and (max-width: 575px) {
    flex-flow: row;
    align-items: center;
  }
}

.devjeff__code-editor {
  flex: 1;
}

.devjeff__contacts {
  display: flex;

  a:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (max-width: 575px) {
    .devjeff__icon {
      width: 28px;
      height: 28px;
    }
  }
}

.devjeff__icon {
  display: inline-block;
  width: 36px;
  height: 36px;

  background-color: black;
  mask: url("/images/arweave.svg") no-repeat center;
  mask-size: contain;

  &.sm {
    width: 20px;
    height: 20px;
  }

  &.lg {
    width: 56px;
    height: 56px;
  }

  &.xl {
    width: 80px;
    height: 80px;
  }

  &.email {
    mask: url("/icons/email.svg") no-repeat center;
    mask-size: contain;
  }

  &.github {
    mask: url("/icons/github.svg") no-repeat center;
    mask-size: contain;
  }

  &.twitter {
    mask: url("/icons/twitter.svg") no-repeat center;
    mask-size: contain;
  }
}
</style>