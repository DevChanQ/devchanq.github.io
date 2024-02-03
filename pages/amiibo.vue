<template>
  <div id="app">
    <nav>
      <a href="/">
        <img src="@/assets/images/amiibo.png"/>
      </a>
      <ul style="margin-left: auto;">
        <li><a href="javascript: void(0)" @click="$route.query.menu ? $router.push('/amiibo') : $router.push('/amiibo?menu=true')">{{ $route.query.menu ? 'Close' : 'Menu' }}</a></li>
      </ul>
    </nav>
    <div class="amiibo-init">
      <client-only>
        <amiibo-viewer :about="about" :menu="menu" :next="siblings.next" :last="siblings.last" :style="{'opacity': $route.name ==='about' ? 0.3 : 1}" :more="more" @next="$router.push({name: 'amiibo', query: {name: siblings.next}})" @last="$router.push({name: 'amiibo', query: {name: siblings.last}})" @amiiboClicked="$router.push({name: 'amiibo', query: {name: $event.name}})" :current="current" :amiibos="amiibos" />
      </client-only>
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #__nuxt,#__layout,#__layout, #app {
  height: 100%;
  overflow: hidden;
}

body {
  background: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  padding: 32px;
  position: relative;

  height: 100vh;
}

nav {
  z-index: 1000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 40px;

  display: flex;

  img {
    width: 150px;
    height: 27px;
  }

  ul {
    list-style: none;
    font-weight: bold;

    a {
      text-decoration: none;
      color: black;
      font-size: 20px;
    }
  }
}

.amiibo-init {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<script>
import AmiiboViewer from '@/components/AmiiboViewer'

function toTitleCase(str) {
    let s = str.replace(
        /([-_][a-z])/g,
        (group) => group.toUpperCase()
                        .replace('-', '')
                        .replace('_', '')
    );
    return s.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){ return str.toUpperCase(); })
}

export default {
  layout: 'empty',
  data() {
    return {
    }
  },
  computed: {
    amiibos() {
      return {
        'ken': {
          name: 'Ken',
          description: 'Ken made his first appearance in the original Street Fighter released in 1987, and is the only other playable character in the game aside from Ryu.',
          image: require('@/assets/images/amiibo_Ken_Smash_char.png'),
          background: '#AB2330',
          origin: {
            name: 'Street Fighter',
            image: require('@/assets/images/Street_Fighter_Logo.png'),
          }
        }, 
        'young_link': {
          name: 'Young Link',
          description: 'Since his debut on the original Nintendo Entertainment System™ in 1987, Link\'s appearance has changed over and over again, each time adding to the mystique of his incomparable story. This younger incarnation is most often associated with the Legend of Zelda™: Ocarina of Time™ game.',
          image: require('@/assets/images/amiibo_YoungLink_Smash_char.png'),
          background: '#518A3B',
          origin: {
            name: 'The Legend of Zelda',
            image: require('@/assets/images/zelda_logo.png'),
          }
        },
        'link': {
          name: 'Link',
          description: 'This amiibo figure shows Link in his adorable incarnation from the Legend of Zelda™: Link’s Awakening game. In this game, Link has washed ashore on a mysterious island with strange and colorful inhabitants. To escape the island, Link must collect magical instruments and awaken the Wind Fish.',
          background: '#ECB700',
          image: require('@/assets/images/amiibo_Link_LinksAwakening_char.png'),
          origin: {
            name: 'The Legend of Zelda',
            image: require('@/assets/images/zelda_logo.png'),
          }
        }, 
        'pokemon_trainer': {
          name: 'Pokémon Trainer',
          description: 'A person who raises Pokémon™ and trains them as partners in battle. In battle, a Trainer gives orders to the Pokémon and uses items. It\'s not an exaggeration to say battles can be won or lost on a Trainer\'s single strategic move. Trainers pour their hearts into their Pokémon and share anger, sadness, and joy as they adventure in hopes of becoming Pokémon Masters.',
          background: '#FF645C',
          image: require('@/assets/images/amiibo_Trainer_Smash_char.png'),
          origin: {
            name: 'Pokemon',
            image: require('@/assets/images/pokemon_logo.png'),
          }
        },
        'pichu': {
          name: 'Pichu',
          description: 'A Tiny Mouse Pokémon™, Pichu charges itself with electricity more easily on days with thunderclouds or when the air is very dry. You can hear the crackling of static electricity coming off this Pokémon. Pichu has been known to flaunt its courage by touching tails with others and setting off sparks.',
          image: require('@/assets/images/amiibo_Pichu_Smash_char.png'),
          background: '#F4E476',
          origin: {
            name: 'Pokemon',
            image: require('@/assets/images/pokemon_logo.png'),
          }
        }, 
        'ivysaur': {
          name: 'Ivysaur',
          description: 'A Seed Pokémon™ that is the evolved form of Bulbasaur. It has a flower bulb on its back, the weight of which has made it develop strong legs and hips. If the blossom gets too big, the Pokémon can\'t stand on two legs alone. At a certain level, it evolves into Venusaur. When this happens, the bulb absorbs nutrients and blossoms into a large-petaled flower.',
          background: '#7AD6E4',
          image: require('@/assets/images/amiibo_Ivysaur_Smash_char.png'),
          origin: {
            name: 'Pokemon',
            image: require('@/assets/images/pokemon_logo.png'),
          }
        },
        'isabelle': {
          name: 'Isabelle',
          description: 'Isabelle is the mayor\'s highly capable secretary from the Animal Crossing: New Leaf game. She can be forgetful sometimes, but you can always count on her for information about the town, and she\'s happy to cheer you on in all your mayor-ly duties. She also has a twin brother named Digby.',
          image: require('@/assets/images/amiibo_Isabelle_Smash_char.png'),
          background: '#E7AF23',
          origin: {
            name: 'Animal Crossing',
            image: require('@/assets/images/animal_crossing_logo.png'),
          }
        },
        'villager': {
          name: 'Villager',
          description: 'An energetic young man from a peaceful town in Animal Crossing, he is eager to make new discoveries each day. Some of his hobbies include planting trees, fishing, digging for fossils, and catching insects with his net. Sometimes, he likes to just sit back and enjoy the scenery with friends.',
          image: require('@/assets/images/amiibo_Villager_Smash_char_v2.png'),
          background: '#E9423F',
          origin: {
            name: 'Animal Crossing',
            image: require('@/assets/images/animal_crossing_logo.png'),
          }
        }
      }
    },
    siblings() {
      let current_name = this.$route.query.name
      let names = Object.keys(this.amiibos)
      let last = null, next = null;
      for (let i = 0;i < names.length;i++) {
        if (i !== 0) last = names[i-1]
        if (names[i] === current_name) {
          next = names[i+1]
          break;
        }
      }
      return {
        last, next
      }
    },
    current() {
      return this.$route.query.name
    },
    more() {
      return this.$route.query.more
    },
    menu() {
      return this.$route.query.menu
    },
    about() {
      return this.$route.query.about
    }
  },
  beforeRouteUpdate (to, from, next) {
    let name = to.query.name
    if (name in this.amiibos) {
      next()
    } else {
      next(false)
    }
  },
  beforeRouteEnter (to, from, next) {
    let name = to.query.name
    next(vm => {
      if (!(name in vm.amiibos)) return false
    })
  },
  components: { AmiiboViewer }
}
</script>