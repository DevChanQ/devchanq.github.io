<script setup lang="ts">
import type { ScrypeOptions } from 'scrype';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import GithubButton from 'vue-github-button';

const { $scrype } = useNuxtApp();

const hideScrollIndicator = ref<boolean>(false);

const code = `\
import type { ScrypeOptions } from 'scrype';
import Scrype from 'scrype';

const code = \`some cool code\`;

const options : ScrypeOptions = {
  code,
  lang: "typescript",
  pixelPerStep: 8,
  position: "top",
  codeContainerSelector: "#code-container",
};

const scrype = new Scrype('#sticky', options);`;

onMounted(() => {
  let options : ScrypeOptions = {
    lang: "typescript",
    pixelPerStep: 8,
    position: "top",
    codeContainerSelector:'#code-container',
    code
  };

  new $scrype('#sticky', options);
})

useHead({
  title: 'Scrype - Present code snippet in an interesting way',
  meta: [
    {
      name: 'description',
      content: 'Scrype is a JavaScript library that helps you present code snippets in an interesting way by simulating typing effect.'
    },
    {
      name: 'keywords',
      content: 'scrype, code snippet, typing effect, javascript library, highlight.js, code presentation'
    },
    {
      property: 'og:title',
      content: 'Scrype - Present code snippet in an interesting way'
    },
    {
      property: 'og:description',
      content: 'Scrype is a JavaScript library that helps you present code snippets in an interesting way by simulating typing effect.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

definePageMeta({
  layout: "empty"
})
</script>

<template>
  <div id="devjeff__default-layout" class="light">
    <div id="devjeff__hero_layer" class="container">
      <div id="sticky">
        <div id="hero-container">
          <div class="nav">
            <div style="display: flex;flex-direction: column;gap: 16px;align-items: center;justify-content: center;">
              <div class="scrype-logo"></div>
              <ClientOnly>
                <GithubButton href="https://github.com/DevChanQ/scrype" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star buttons/github-buttons on GitHub">Star</GithubButton>
              </ClientOnly>
            </div>
          </div>
          <div id="hero-content">
            <div id="terminal" style="width: 100%;max-width: 500px;">
              <div class="window-bar">
                <div class="buttons">
                  <div class="close"></div>
                  <div class="minimize"></div>
                  <div class="zoom"></div>
                </div>
              </div>
              <div id="code-container" class="code-snippet">
              </div>
            </div>
          </div>
          <div style="display: flex;align-items: center;justify-content: center;padding-bottom: 120px;">
            <DotLottieVue src="https://lottie.host/d193ccc9-ae40-4665-b539-8eebc7e42c5b/BckAHteOyq.json" style="width: 60px; height: 60px;" loop autoplay />
          </div>
        </div>
      </div>
    </div>
    <div id="devjeff__back_layer">
      <div class="container px-4" style="min-height: 300px;">
        <div style="margin-top: 20px; display: flex; justify-content: center;">
          <a href="https://github.com/DevChanQ/scrype" target="_blank" class="github-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Check out on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>  
</template>

<style lang="scss">
@import "@/assets/styles/index.scss";
@import "scrype/themes/github-dark.min.css";

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  .scrype-logo {
    width: 120px;
    aspect-ratio: 41.2/8.2;
    background-color: black;
    mask: url("@/assets/scrype/logo.svg") no-repeat center;
    mask-size: contain;
  }
}

.github-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: #24292e;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #2c3136;
    color: white;
    text-decoration: none;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
}
</style>