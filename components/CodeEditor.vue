<script>
export default {
  data() {
    return {
    }
  },
  components: {
  },
}
</script>

<template>
  <div class="code-editor">
    <div class="code-editor__tabs">
      <div class="code-editor__tab active">
        <div class="code-editor__tab-border-top"></div>
        <div class="code-editor__tab-name-container">
          <div class="code-editor__icon-label">
            <span class="code-editor__icon-label-name">package.json</span>
          </div>
        </div>
        <div class="code-editor__tab-action">
        </div>
        <div class="code-editor__tab-border-bottom"></div>
      </div>
    </div>
    <div class="code-editor__breadcrumbs">
      <div class="code-editor__breadcrumb-item">
        <div class="code-editor__icon-label">
          <span class="code-editor__icon-label-name">package.json</span>
        </div>
      </div>
    </div>

    <div class="code-editor__editor">
    </div>
  </div>
</template>

<style lang="scss">
.code-editor {
  --editor-bg: #24292E;
  --editor-fg: #e1e4e8;

  --editor-tab-height: 35px;
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
}

.code-editor {
  font-size: 13px;
  min-height: 100%;
  background: var(--editor-bg);

  .code-editor__tabs {
    width: 100%;
    position: relative;
    background: var(--editor-tabs-bg);
    
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
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
    }

    .code-editor__tab-border-bottom {
      background-color: var(--editor-tab-inactive-border-bottom-color);
      
      left: 0;
      position: absolute;
      height: 1px;
      width: 100%;
      bottom: -1px;
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
    color: var(--editor-fg);
    padding-left: 66px;
  }
}
</style>