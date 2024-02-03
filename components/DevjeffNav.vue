<template>
  <nav id="main-nav" style="margin-bottom: 30px;">
    <a href="/"><div id="logo"></div></a>
    <ul class="mb-0">
      <li ><a href="/#about-me" class="link" data-section="about-me">About</a></li>
      <li><a href="/#projects" class="link" data-section="projects">Projects</a></li>
      <li><a href="/#contact" class="link" data-section="contact">Contact</a></li>
    </ul>
    <!-- <ul class="d-none d-md-block mb-0">
      <li ><a href="/#about-me" class="link" data-section="about-me">About</a></li>
      <li><a href="/#projects" class="link" data-section="projects">Projects</a></li>
      <li><a href="/#contact" class="link" data-section="contact">Contact</a></li>
    </ul> -->
    <!-- <a @click="sidenavShown=true" class="hamburger ms-auto d-block d-md-none" href="javascript: void(0)">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </a> -->

    <div id="devjeff__sidenav_layer" :class="{'shown': sidenavShown}">
      <div id="devjeff__sidenav_overlay" class="overlay" @click="sidenavShown=false;">
      </div>
      <nav id="devjeff__sidenav">
        <ul>
          <li ><a href="/#about-me" class="link" data-section="about-me">About</a></li>
          <li><a href="/#projects" class="link" data-section="projects">Projects</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sidenavShown: false,
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/global";

#main-nav {
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 50px 0 0;

  font-family: 'SF Mono', SFMono-Regular, ui-monospace,
    'DejaVu Sans Mono', Menlo, Consolas, monospace;

  ul {
    display: flex;
    padding: 0;
    margin: 30px auto 0;
    list-style: none;

    li {
      margin: 0 20px;
    }
  }

  #logo {
    width: 100px;
    aspect-ratio: 3.05;
    background-color: $contrast;

    mask: url("@/assets/devjeff.svg") no-repeat center;
    mask-size: contain;
  }

  @media screen and (min-width: 767px) {
    flex-flow: row;

    ul {
      margin: 0 0 0 auto;
    }
  }
}

#devjeff__sidenav_layer {
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  z-index: 9999;

  #devjeff__sidenav {
    transform: translateX(-100%);

    width: 290px;
    height: 100%;
    left: 0;
    position: relative;
    background: $contrast;
    transition: .3s transform;
    will-change: transform;

    padding: 30px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;

      li {
        margin-bottom: 10px;
        border-bottom: 1px solid $primary;
        font-size: 20px;
        display: block;

        a {
          display: block;
          color: $primary;
          padding: 10px 0;
        }
      }
    }
  }

  &.shown {
    opacity: 1;
    pointer-events: auto;

    #devjeff__sidenav {
      transform: translateX(0px);
    }
  }
}
</style>