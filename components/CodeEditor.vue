<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render';
import iterator from 'markdown-it-for-inline';

import { markdown as aboutme } from '../README.md';

type File = {
  filename: string,
  ext: string,
  md: string,
}

const inlinePlugin = (md: any) => {
  md.use(iterator, 'url_new_win', 'link_open', (tokens: any, idx: string) => {
    tokens[idx].attrSet('target', '_blank');
  });
};

const plugins = [inlinePlugin,];

// refs
const active = ref<number>(0)
const files = ref<File[]>([
  {
    filename: "About Me.md",
    ext: 'md',
    md: aboutme
  }
])

// computed
const activeTab = computed(() => files.value[active.value])

// methods

const openGithubReadmeTab = async (repo: string) => {
  // check if the repo is already opened
  const openedIndex = files.value.findIndex(file => file.filename === `${repo}/README.md`);
  if (openedIndex !== -1) {
    active.value = openedIndex;
    return;
  }

  files.value.push({
    filename: `${repo}/README.md`,
    ext: 'md',
    md: "Loading..."
  });
  active.value = files.value.length - 1;

  let repoUrl = `https://raw.githubusercontent.com/${repo}/master`
  let res = await fetch(`${repoUrl}/README.md`)
  if (!res.ok) {
    // try to fetch from main branch
    repoUrl = `https://raw.githubusercontent.com/${repo}/main`;
    res = await fetch(`${repoUrl}/README.md`);
    if (!res.ok) return;
  }

  const content = await res.text()

  // replace all relative links to absolute links for images based on the repo url
  const replacedContent = content.replace(/(!\[.*\]\()(.+)(\))/g, `$1${repoUrl}/$2$3`).replace(/(<img.*?src=")\/(.*?")/g, `$1${repoUrl}/$2`);

  files.value[files.value.length - 1].md = replacedContent;
}

const onMarkdownClick = (e: PointerEvent) => {
  const target = e.target;
  if (target instanceof HTMLAnchorElement) {
    e.preventDefault();
    
    const url = target.href;
    // get github.com/DevChanQ regex match
    const matches = url.match(/github.com\/(DevChanQ\/.*)/);
    if (!matches || !matches[1]) {
      window.open(url, '_blank');
      return;
    }

    const repo = matches[1];
    openGithubReadmeTab(repo);
  }
}
</script>

<template>
  <div class="code-editor ayu">
    <div class="code-editor__tabs-and-breadcrumbs">

      <div class="code-editor__tabs">
        <div v-for="file, index in files" :key="file.filename" class="code-editor__tab" :class="{active: active === index}" @click="active=index">
          <div class="code-editor__tab-border-top"></div>
          <div class="code-editor__tab-name-container">
            <div class="code-editor__icon-label" :class="[`${file.ext}-ext`]">
              <span class="code-editor__icon-label-name">{{ file.filename }}</span>
            </div>
          </div>
          <div class="code-editor__tab-action">
          </div>
          <div class="code-editor__tab-border-bottom"></div>
        </div>
      </div>

      <div class="code-editor__breadcrumbs">
        <div class="code-editor__breadcrumb-item">
          <div class="code-editor__icon-label" :class="[`${activeTab.ext}-ext`]">
            <span class="code-editor__icon-label-name">{{ activeTab.filename }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="code-editor__editor">
      <VueMarkdown @click="onMarkdownClick" :source="activeTab.md" :options="{'html': true}" :plugins="plugins" />
    </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'seti';
  src: url('/fonts/seti.woff');
}

.code-editor {
  --editor-bg: #24292E;
  --editor-fg: #e1e4e8;

  --editor-tab-height: 46px;
  --editor-tabs-bg: #1f2428;
  --editor-tabs-border-bottom-color: #1B1F23;

  --editor-tab-breadcrumbs-bg: #24292e;
  --editor-tab-breadcrumbs-fg: #959da5;

  --editor-tab-inactive-bg:#1f2428;
  --editor-tab-inactive-fg: #959da5;
  --editor-tab-inactive-border-top-color: #1B1F23;
  --editor-tab-inactive-border-bottom-color: #1B1F23;

  --editor-tab-active-bg: #242930;
  --editor-tab-active-fg: #e1e4e8;
  --editor-tab-active-border-top-color: #f9826c;
  --editor-tab-active-border-bottom-color: #24292e;

  --editor-slider-bg: rgba(106, 115, 125, 0.2);
  --editor-slider-active-bg: rgba(106, 115, 125, 0.53);
}

.code-editor.ayu {
  --editor-bg: rgba(11, 14, 20, 0.92);
  --editor-fg: #eaeaea;

  --editor-tab-height: 46px;
  --editor-tabs-bg: #0b0e14;
  --editor-tabs-border-bottom-color: #0b0e14;

  --editor-tab-breadcrumbs-bg: #0b0e14;
  --editor-tab-breadcrumbs-fg: rgba(86, 91, 102, 0.8);

  --editor-tab-inactive-bg:#0b0e14;
  --editor-tab-inactive-fg: #565b66;
  --editor-tab-inactive-border-top-color: #0b0e14;
  --editor-tab-inactive-border-bottom-color: #565b66;

  --editor-tab-active-bg: #0b0e14;
  --editor-tab-active-fg: #bfbdb6;
  --editor-tab-active-border-top-color: #0b0e14;
  --editor-tab-active-border-bottom-color: #e6b450;

  --editor-slider-bg: rgba(86, 91, 102, 0.4);
  --editor-slider-active-bg: rgba(86, 91, 102, 0.7);
}

.code-editor.gruvbox {
  --editor-bg: #1d2021;
  --editor-fg: #ebdbb2;

  --editor-tab-height: 46px;
  --editor-tabs-bg: #1d2021;
  --editor-tabs-border-bottom-color: #3c3836;

  --editor-tab-breadcrumbs-bg: #0b0e14;
  --editor-tab-breadcrumbs-fg: rgba(86, 91, 102, 0.8);

  --editor-tab-inactive-bg:#1d2021;
  --editor-tab-inactive-fg: #a89984;
  --editor-tab-inactive-border-top-color: #0b0e14;
  --editor-tab-inactive-border-bottom-color: #565b66;

  --editor-tab-active-bg: #32302f;
  --editor-tab-active-fg: #ebdbb2;
  --editor-tab-active-border-top-color: #ebdbb2;
  --editor-tab-active-border-bottom-color: #689d6a;

  --editor-slider-bg: rgba(86, 91, 102, 0.4);
  --editor-slider-active-bg: rgba(86, 91, 102, 0.7);
}

.code-editor {
  flex: 1;
  font-size: 13px;
  min-height: 100%;
  height: fit-content;
  background: var(--editor-bg);

  overflow-y: scroll;
  height: 100%;

  @media screen and (max-width: 575px) {
    overflow-y: initial;
  }

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background: var(--editor-bg);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--editor-slider-bg);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--editor-slider-active-bg);
  }

  *, *::before, *::after {
    box-sizing: initial;
  }

  .code-editor__tabs-and-breadcrumbs {
    position: sticky;
    top: 0;
  }

  .code-editor__tabs {
    display: flex;
    width: 100%;
    position: relative;
    background: var(--editor-tabs-bg);
    overflow: auto;
    
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: var(--editor-tabs-border-bottom-color);
    }
  }

  .code-editor__icon-label {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;

    .code-editor__icon-label-name {
      color: inherit;
    }

    &:before {
      content: "";
      background-position: 0;
      background-repeat: no-repeat;
      background-size: 16px;

      display: inline-block;
      line-height: inherit;
      width: 16px;
      padding-right: 6px;
      
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      flex-shrink: 0;
      vertical-align: top;

      font-family: 'seti';
      font-size: 150%;
    }
    
    &.md-ext {
      &:before {
        color: #519aba;
        content: '\E04D';
        background-image: unset;
      }
    }
  }

  .code-editor__tab {
    background: var(--editor-tab-inactive-bg);

    display: flex;
    cursor: pointer;
    position: relative;
    width: 120px;
    min-width: fit-content;
    height: var(--editor-tab-height);
    border-right: 1px solid var(--editor-tabs-border-bottom-color);
    padding-left: 10px;

    .code-editor__tab-border-top {
      background-color: var(--editor-tab-inactive-border-top-color);

      left: 0;
      position: absolute;
      height: 1px;
      width: 100%;
      z-index: 9;
    }

    .code-editor__tab-border-bottom {
      background-color: var(--editor-tab-inactive-border-bottom-color);
      
      left: 0;
      position: absolute;
      height: 1px;
      width: 100%;
      bottom: 0;
      z-index: 10;
    }

    .code-editor__icon-label {
      color: var(--editor-tab-inactive-fg);
      line-height: var(--editor-tab-height);

      &:before {
        height: var(--editor-tab-height);
      }
    }

    .code-editor__tab-action {
      width: 28px;
    }

    &.active {
      background: var(--editor-tab-active-bg);

      .code-editor__icon-label {
        color: var(--editor-tab-active-fg);
      }

      .code-editor__tab-border-top {
        background: var(--editor-tab-active-border-top-color);
      }

      .code-editor__tab-border-bottom {
        background: var(--editor-tab-active-border-bottom-color);
      }

      .code-editor__tab-name-container {
        color: var(--editor-tab-active-fg);
      }
    }

    &:hover {
      background: var(--editor-tab-active-bg);
    }
  }

  .code-editor__breadcrumbs {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    outline-style: none;
    user-select: none;

    height: 22px;
    background: var(--editor-tab-breadcrumbs-bg);

    .code-editor__breadcrumb-item {
      align-items: center;
      align-self: center;
      cursor: pointer;
      display: flex;
      flex: 0 1 auto;
      height: 100%;
      outline: none;
      white-space: nowrap;

      &:before {
        content: " ";
        align-items: center;
        display: flex;
        height: 22px;
        justify-content: center;
        width: 16px;
      }

      &:last-child {
        padding-right: 8px;
      }

      .code-editor__icon-label {
        height: 22px;
        line-height: 22px;
        color: var(--editor-tab-breadcrumbs-fg);

        &:before {
          height: 22px;

        }
      }
    }
  }

  .code-editor__editor {
    font-size: 18px;
    color: var(--editor-fg);
    padding: 0 32px 32px;

    * {
      color: inherit;
    }

    h1, h2, h3 {
      margin: 48px 0 24px;
    }

    img {
      border-radius: 4px;
      max-width: 100%;
    }

    pre {
      padding: 8px 12px;
      background: #3f3f3f;
      border-radius: 4px;
    }

    p {
      margin: 16px 0;
      word-break: break-word;
    }
  }
}
</style>