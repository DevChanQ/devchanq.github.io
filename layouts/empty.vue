<template>
  <div id="empty-layout">
    <slot></slot>
    <component is="script" src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module" /> 
  </div>
</template>