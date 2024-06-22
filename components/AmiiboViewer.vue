<template>
  <div class="amiibo-viewer" @touchmove="dragMove" @touchstart="dragStart" @touchend="dragEnd" @mousedown="dragStart" @mousemove="dragMove" @mouseup="dragEnd">
    <div class="amiibo-background-color-container" :style="{'transform': `translate3d(${-position*2 - sling}px, 0, 0)`}">
      <div class="amiibo-background-color" v-for="(amiibo) in amiibos" :style="{'background-color': amiibo.background}" :key="amiibo.background">
      </div>
    </div>
    <div class="amiibo-background-image" :style="{'background-image': `url(${currentAmiibo.image})`}"></div>
    
    <transition name="slide-down">
      <div style="position: absolute;left: 0;right: 0;top: 0;bottom: 0;" v-if="!menu && !about">
        <div class="amiibo-container" :style="{'transform': `translate3d(${-position - sling}px, -50%, 0)`}">
          <div @click="$emit('amiiboClicked', {name})" v-for="(amiibo, name, index) in amiibos" :key="name" :class="{'amiibo': true, 'hidden': more && name !== current, 'shouldAnimate': more}" :style="{'opacity': name === current ? 1 : 0.4,'margin-left': `${windowWidth/2 - amiiboWidth/2 - (index ? amiiboWidth/2 : 0)}px`, 'transform': `scale(${amiiboScale(index, name)}) ${amiiboTransform(name)}`}">
            <img :ref="name" :src="amiibo.image" width="140%" />
          </div>
        </div>
        <transition name="slide-up">
          <div :class="{'amiibo-detail-container': true, 'mobile': isMobile}" v-show="!more && !dragging">
            <img :src="currentAmiibo.origin.image" width="80%" />
            <h2>{{ currentAmiibo.name }}</h2>
            <a href="javascript: void(0)" @click="$emit('more')" class="button">Learn More</a>
            <a href="javascript: void(0)" @click="$emit('more')" class="button">Add to Cart</a>
          </div>
        </transition>
        <transition name="slide-up">
          <div :class="{'amiibo-more': true, 'mobile': isMobile}" v-if="more">
            <h1>{{ currentAmiibo.name }}</h1>
            <div class="amiibo-more-container">
              <p>{{ currentAmiibo.description }}</p>
            </div>
            <a href="javascript: void(0)" @click="$emit('back')" class="button">Back</a>
          </div>
        </transition>
      </div>
    </transition>

    <transition name="slide-down">
      <div class="fixed menu" v-if="menu">
        <ul>
          <li><a href="javascript: void(0)" @click="$router.push({name: 'amiibo', query: {about: true}})">About</a></li>
          <li><a href="mailto:jeffrey.dev.chan@gmail.com">Contact</a></li>
        </ul>
      </div>
    </transition>

    <transition name="slide-down">
      <div class="fixed about" v-if="about">
        <h2>About</h2>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";

// amiibo's position = index * (windowWidth/2)
let startX = null
let slingGsap = null
let easeOutCubic = t => (--t)*t*t+1

export default {
  props: {
    'current': String,
    'amiibos': Object,
    'more': {
      type: Boolean,
      default: false,
    },
    'menu': {
      type: Boolean,
      default: false,
    },
    'about': {
      type: Boolean,
      default: false,
    },
    'next': String,
    'last': String,
  },
  data() {
    return {
      position: 0,
      sling: 0,

      windowWidth: window.innerWidth,
      amiiboWidth: 180,
      canDrag: false,
      dragging: false,
      gsaping: false,

      imageTransform: null
    }
  },
  methods: {
    dragStart(e) {
      this.canDrag = true
      if (e.type === "mousedown") startX = e.clientX;
      else if (e.type === "touchstart") startX = e.touches[0].clientX;
    },
    dragMove(e) {
      if (this.canDrag)  {
        if (slingGsap) {
          slingGsap.kill()
          slingGsap = null
        }

        let newX = 0
        if (e.type === "mousemove") newX = e.clientX;
        else if (e.type === "touchmove") newX = e.touches[0].clientX; 

        this.dragging = true
        let maxSling = 200
        let factor = gsap.utils.clamp(0, 1, easeOutCubic((Math.abs(newX - startX) * 0.1)/maxSling))
        this.sling = factor * maxSling * -Math.sign(newX - startX)
      }
    },
    dragEnd(e) {
      this.canDrag = false
      this.dragging = false
      startX = null
    },
    amiiboScale(i, name) {
      if (this.isMobile && name === this.current && this.more) 
        return 0.7
      
      let amiiboPosition = i * (this.windowWidth/2)
      let maxScale = this.isMobile ? 0.9 : 1.5
      let minScale = this.isMobile ? 0.5 : 0.7
      let offset = this.windowWidth/6

      let factor = Math.abs(amiiboPosition - this.position) / offset

      return gsap.utils.clamp(minScale, maxScale, maxScale - factor)
    },
    amiiboTransform(name) {
      let translateX = name === this.current ? this.more ? -150 : -90 : 0
      let translateY = -25

      if (this.isMobile) {
        translateY = this.more && name === this.current ? -230 : -150
        translateX = 0
      }

      return `translate3d(${translateX}px, ${translateY}px, 0)`
    },
    detailTransform() {

    },
    moveToAmiibo(name, animated=true) {
      let names = Object.keys(this.amiibos)
      let i = 0
      for (i = 0;i < names.length;i++) {
        if (name === names[i]) break;
      }
      if (animated) {
        this.gsaping = true
        gsap.fromTo(this, {position: this.position + this.sling}, {
          position: i * (this.windowWidth/2),
          ease: "elastic.out(1, 0.8)",
          onComplete: () => this.gsaping = false,
          duration: 1
        })
      } else this.position = i * (this.windowWidth/2)
    }
  },
  computed: {
    currentAmiibo() {
      return this.current ? this.amiibos[this.current] : { origin: {} }
    },
    isMobile() {
      return this.windowWidth < 600
    }
  },
  watch: {
    current(x) {
      this.moveToAmiibo(x)
      this.sling = 0
    },
    canDrag(x) {
      if (!x) {
        let threshold = Math.min(Math.floor(this.windowWidth / 8), 70)
        if (this.sling > threshold && this.next) {
          this.$emit('next')
        } else if (this.sling < -threshold && this.last) { 
          this.$emit('last')
        } else {
          slingGsap = gsap.to(this, 1.5, {
            sling: 0,
            ease: "elastic.out(1, 0.3)",
          })
        }
      }
    }
  },
  mounted() {
    this.moveToAmiibo(this.current, false)
  },
  created() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth 
      this.moveToAmiibo(this.current, false)
    });
  }
}
</script>

<style lang="scss" scoped>
.amiibo-viewer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  transition: background .3s;

  &:hover {
    cursor: grab;
  }

  * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  }
  
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;

    transition: transform .1s;
  }
}

.amiibo-background-color-container, .amiibo-background-image {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 0;
}

.amiibo-background-color-container {
  white-space: nowrap;
  will-change: transform;
}

.amiibo-background-color {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.amiibo-background-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  -webkit-filter: blur(20px);

  transition: background-image .3s;
}

.amiibo-container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
}

.amiibo {
  height:300px;
  width: 180px;
 // transform: none !important;

  display: inline-flex;
  vertical-align: bottom;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  overflow: hidden;

  will-change: transform;

  &.hidden {
    opacity: 0 !important;
  }

  &.shouldAnimate {
    transition: all .3s;
  }
}

.amiibo-detail-container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  transform: translate(calc(-50% + 150px), -50%);
  text-align: center;
  color: white;

  &.mobile {
    transform: translate(-50%, 0px);
  }

  img {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 30px;
  }

  a {
    display: block;
    margin-bottom: 20px;
  }
}

.amiibo-more {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 280px;
  transform: translate(calc(-50% + 150px), -50%);
  color: white;

  &.mobile {
    transform: translate(-50%, -50px);

    .amiibo-more-container {
      max-height: 180px;
    }
  }

  h1 {
    margin-bottom: 20px;
  }

  .amiibo-more-container {
    background: rgba(255,255,255,.4);
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 30px;
    max-height: 300px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ul {
    list-style: none;

    li {
      margin-bottom: 20px;
      font-size: 20px;

      a {
        color: black;
        text-decoration: none;
      }
    }
  }
}

.about {
  margin: 80px 32px 32px;
  background: rgba(255,255,255,.4);
  padding: 20px;
  border-radius: 6px;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.button {
  padding: 8px 40px;
  background: rgba(255,255,255,.4);

  text-decoration: none;
  border-radius: 6px;
}
</style>

<style lang="scss">
.slide-up-enter-active, .slide-up-leave-active {
  transition: all .3s;
}
.slide-up-leave-to, .slide-up-enter {
  transform: translate(calc(-50% + 150px), calc(-50% + 100px));
  opacity: 0;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all .3s;
}
.slide-down-leave-to, .slide-down-enter {
  transform: translateY(50px);
  opacity: 0;
}
</style>