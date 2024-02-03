<template>
  <div id="devjeff__default-layout" class="light" :class="{'sidenav-shown': sidenavShown}">
    <div id="devjeff__hero_layer" class="container">
      <div id="sticky">
        <div id="hero-container">
          <devjeff-nav />
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
          <div v-show="!hideScrollIndicator" style="display: flex;align-items: center;justify-content: center;padding-bottom: 90px;"><div class="scroll-indicator"></div></div>
          <!-- <div id="hero-content" class="container-fluid">
            <div class="row">
              <div class="col-12 col-lg-6 mb-5 mb-lg-0 text-left">
                <h1 class="mb-4">A Programmer <br> who Strives for the Best</h1>
                <a href="/#contact" class="devjeff__button">Get in touch</a>
              </div>
              <div class="col-12">
                <div id="terminal" style="width: 100%;max-width: 500px;">
                  <div style="height: 20px;">
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
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div id="devjeff__back_layer">
      <div class="container px-4">
        <div class="row no-gutters mb-5" id="about-me">
          <div class="col-12">
            <h2 class="title">devjeff$ cat <span class="highlight">ABOUTME</span>.md</h2>
          </div>
          <div class="col-md-7 order-2 order-md-1 text-justify">
            <p>I am Jeffrey Chan, a 25 years old independent software developer who resides in Hong Kong. Programming has always been my favourite hobby ever since I was 13. I always strive to become the best at what I do.</p>
            <p>My skills includes: <span class="skills">html5 css javascript react-native nodejs electron vue django wagtail</span></p>
            <p class="mb-0">I specialises in web frontend and backend development, as well as UI design but feel free to contact me to discuss about anything :)</p>
          </div>
          <div class="col-md-5 order-1 order-md-2">
            <div class="mt-3 mb-5 mt-md-0 mb-md-0 mx-auto" style="max-width: 220px;">
              <div
                class="avatar"
                style="background-image: url(https://avatars3.githubusercontent.com/u/45824907?s=460&v=4);">
              </div>
            </div>
          </div>
        </div>
        <div class="row no-gutters mb-5" id="projects">
          <div class="col-12">
            <h2 class="title">devjeff$ cat <span class="highlight">PROJECTS</span>.md</h2>
            <div class="projects-container row gy-4 gy-sm-5">
              <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                <a target="_blank" href="https://arweavehub.com">
                  <div class="project">
                    <div class="project-image">
                      <img src="../assets/arweave-hub.png" />
                    </div>
                    <h3>The Arweave Hub</h3>
                    <p>Designed & developed the arweave hub - The place to find, create, and attend Arweave & Permaweb events.</p>
                    <span>Arweave Site</span>
                  </div>
                </a>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                <a target="_blank" href="https://cookbook.arweave.dev">
                  <div class="project">
                    <div class="project-image">
                      <img src="../assets/permaweb-cookbook.png" />
                    </div>
                    <h3>Permaweb Cookbook 2.0</h3>
                    <p>Redesigned & developed cookbook 2.0 for the Arweave community</p>
                    <span>Arweave Community</span>
                  </div>
                </a>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                <a target="_blank" href="https://thumbnaillab.app">
                  <div class="project">
                    <div class="project-image">
                      <img src="../assets/svg-editor.png" />
                    </div>
                    <h3>SVG Editor</h3>
                    <p>View & Design Beautiful SVG</p>
                    <span>iOS/Android Application</span>
                  </div>
                </a>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                <a target="_blank" href="/amiibo?name=ken">
                  <div class="project">
                    <div class="project-image">
                      <img src="../assets/amiibo.png" />
                    </div>
                    <h3>Amiibo Landing Page</h3>
                    <p>A Nintendo Amiibo landing page concept made with Vue.js</p>
                    <span>Concept Website</span>
                  </div>
                </a>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                <a target="_blank" href="https://github.com/DevChanQ/Scrype">
                  <div class="project">
                    <div class="project-image">
                      <img src="../assets/github.png" />
                    </div>
                    <h3>Scrype</h3>
                    <p>Present code snippet in an interesting way</p>
                    <span>Javascript Library</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-5"></div>
        </div>
      </div>
      
      <devjeff-footer />
    </div>
  </div>
</template>

<script>
import DevjeffNav from '~/components/DevjeffNav';
import DevjeffFooter from '~/components/DevjeffFooter';

export default {
  layout: 'empty',
  data() {
    return {
      sidenavShown: false,
      hideScrollIndicator: false,
    }
  },
  mounted() {
    let options = {
      pixelPerStep: 8,
      position: 'top',
      codeContainerSelector:'#code-container',
      code: `class DevJeff {
    constructor () {
      this.yob = 1996;
      this.from = 'Hong Kang ~~~~ong';
    }
    about () {...}
    projects () {...}
    blog () {...}
  }
> let developer = new DevJeff();`
    }

    new this.$Scrype('#sticky', options);
  },
  methods: {
    showSidenav() {
      console.log('hahahaha')
    }
  },
  components: { DevjeffNav, DevjeffFooter }
}
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>