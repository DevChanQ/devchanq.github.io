<script setup lang="ts">
const height = ref<number>(0);

const onResize = () => {
  height.value = window.innerHeight;
};

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

useHead({
  title: "Hello.",
})
definePageMeta({ layout: false });
</script>

<template>
  <div id="devjeff" :style="[height ? {height: `${height}px`} : {}]">
    <div class="devjeff__bg">
      <ClientOnly>
        <BackgroundGradient />
      </ClientOnly>
    </div>
    <div class="devjeff__info">
      <div>
        <img height="56" src="@/assets/logo.png" />
      </div>
      <div>
        <div class="devjeff__contacts">
          <a target="_blank" href="https://github.com/DevChanQ/devchanq.github.io">
            <div class="devjeff__check-out-the-source"></div>
          </a>

          <a target="_blank" href="https://github.com/DevChanQ/devchanq.github.io">
            <div class="devjeff__icon github"></div>
          </a>
        </div>
        <p style="font-size: 12px;" class="d-none d-sm-block mb-0 mt-3">© Jeffrey Chan</p>
      </div>
    </div>
    <div class="devjeff__code-editor">
      <CodeEditor />
    </div>
  </div>
</template>

<style lang="scss">
#devjeff {
  position: relative;
  display: flex;

  width: 100%;
  height: 100vh;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 575px) {
    flex-flow: column;
  }
}

.devjeff__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
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
    padding: 48px 32px;
  }
}

.devjeff__code-editor {
  flex: 1;
}

.devjeff__contacts {
  display: inline-block;
  position: relative;
  
  .devjeff__check-out-the-source {
    width: 260px;
    height: 100px;
    transform: translate(100%, -100%);
    position: absolute;
    top: -5px;
    right: 15px;

    background-image: url("/source.png");
    background-position: left bottom;
    background-size: contain;
    background-repeat: no-repeat;
  }

  a:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (max-width: 1023px) {
    .devjeff__check-out-the-source {
      width: 120px;
      top: -5px;
      right: 100%;
    }
  }

  @media screen and (max-width: 575px) {
    .devjeff__icon {
      width: 28px;
      height: 28px;
    }

    .devjeff__check-out-the-source {
      width: 130px;
      height: 73px;
      transform: none;
      top: initial;
      right: 10px;
      bottom: 5px;
      background-image: url("/source-mobile.png");
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