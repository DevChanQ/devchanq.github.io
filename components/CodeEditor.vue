<template>
  <div class="code-editor">
    <div class="code-editor__tabs">
      <div class="code-editor__tab active">
        <div class="code-editor__tab-border-top"></div>
        <div class="code-editor__tab-icon">

        </div>
        <div class="code-editor__tab-name-container">
          <span class="code-editor__tab-name-label">package.json</span>
        </div>
        <div class="code-editor__tab-action">
        </div>
      </div>

      <div class="code-editor__breadcrumbs">
        
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.code-editor {
  --editor-bg: #24292E;
  --editor-tabs-bg: #1f2428;
  --editor-tabs-border-bottom-color: #1B1F23;
  --editor-tab-height: 35px;
  --editor-tab-inactive-bg:#1f2428;
  --editor-tab-inactive-fg: #959da5;
  --editor-tab-active-bg: #242930;
  --editor-tab-active-fg: #e1e4e8;
  --editor-tab-active-border-top-color: #f9826c;
}

.code-editor {
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

  .code-editor__tab {
    background: var(--editor-tab-inactive-bg);

    display: flex;
    position: relative;
    width: 120px;
    min-width: fit-content;
    height: var(--editor-tab-height);
    padding-left: 10px;

    .code-editor__tab-border-top {
      left: 0;
      position: absolute;
      height: 1px;
      width: 100%;
    }

    .code-editor__tab-icon {
      width: 16px;
      padding-right: 6px;
    }

    .code-editor__tab-name-container {
      font-size: 13px;
      color: var(--editor-tab-inactive-fg);
      line-height: var(--editor-tab-height);
    }

    .code-editor__tab-action {
      width: 28px;
    }

    &.active {
      background: var(--editor-tab-active-bg);

      .code-editor__tab-border-top {
        background: var(--editor-tab-active-border-top-color);
      }

      .code-editor__tab-name-container {
        color: var(--editor-tab-active-fg);
      }
    }
  }

  
}
</style>