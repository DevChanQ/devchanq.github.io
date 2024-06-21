<template>
  <footer id="contact">
    <div class="container" style="padding: 120px calc(var(--bs-gutter-x) * 0.5);">
      <h3>Got any idea? Share it with me!</h3>
      <p>Github: <a target="_blank" href="https://github.com/DevChanQ">DevChanQ</a></p>
      <p>Twitter: <a target="_blank" href="https://twitter.com/DevJeffHK">@DevJeffHK</a></p>
      <p>Email: <a href="mailto:jeffrey@devjeff.info">jeffrey@devjeff.info</a></p>
      <p>© DevJeff</p>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/styles/global";

footer {
  background: black;
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  position: relative;

  h3, p {
    color: white;
  }

  a {
    color: $secondary;
  }

  h3 {
    margin-bottom: 30px;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>