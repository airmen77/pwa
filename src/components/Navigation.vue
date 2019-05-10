<template>
  <div class="navigationWrapper">
    <div class="logo">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/logo.png">
      </router-link>
    </div>
    <div id="navigation" :class="windowWidth > 640 ? 'desktop' : 'mobile'">
      <template v-if="windowWidth > 640">
        <div id="navDesktop">
          <template v-for="(route, i) in routes">
            <router-link :to="route.path" :key="i">{{route.name}}</router-link>
          </template>
        </div>
      </template>
      <template v-else>
        <div id="navMobile">
          <template v-for="(route, i) in routes">
            <router-link :to="route.path" :key="i">
              <img :src="imgPath(route.icon)" :alt="route.name">
            </router-link>
          </template>
        </div>
      </template>
    </div>
    <div v-if="windowWidth <= 640" class="pageTitle">{{titleText}}</div>
    <div class="menu">
      <nav-menu></nav-menu>
    </div>
  </div>
</template>

<script>
import navMenu from '@/components/TopMenu.vue'

export default {
  name: 'Navigation',
  components: {
    'nav-menu': navMenu
  },
  data () {
    return {
      testIcon: 'logo.png',
      windowWidth: document.body.clientWidth
    }
  },
  methods: {
    imgPath (pic) {
      return require('../assets/' + pic)
    }
  },
  computed: {
    routes () {
      return this.$router.options.routes
    },
    titleText () {
      return this.$store.getters.changeTitle
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = document.body.clientWidth
    })
  }
}
</script>

<style lang="scss" scoped>
  .navigationWrapper{
    display: flex;
    box-shadow: 0 3px 5px rgba(#ccc, .2);
    margin-bottom: 30px;
    min-height: 50px;
    .menu{
      margin-left: auto;
    }
    .pageTitle {
      width: 100%;
      align-self: center;
      font-weight: bold;
      color: #42b983;
    }
    .logo {
      align-self: center;
      img {
        width: 50px;
      }
    }
  }
  #navigation {
    &.desktop {
      display: flex;
      width: 100%;
    }

    &.mobile {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      height: 45px;
    }

    #navMobile {
      padding: 0;
      height: 100%;
      background-color: #459eff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      a {
        display: block;
        margin: 0 15px;
      }
    }

    #navDesktop {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 30px;
      a {
        display: block;
        margin: 0 15px;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
          text-decoration: underline;
        }
      }
    }

  }
</style>
