<template>
    <div id="menu">
      <img class="openMenu" @click="toogleMenu" src="../assets/baseline-menu-24px.svg" alt="menu">

      <transition>
        <div :class="showMenu ? 'menuContainer show' : 'menuContainer'">
          <ul>
            <li>Пункт меню 1</li>
            <li>Пункт меню 2</li>
            <li>Пункт меню 3</li>
            <li>Пункт меню 4</li>
            <li>Пункт меню 5</li>
            <li>Пункт меню 6</li>
            <li>Пункт меню 7</li>
            <li>Пункт меню 8</li>
          </ul>
        </div>
      </transition>
      <div v-if="showMenu" @click="hideMenu" class="overlay"></div>
    </div>
</template>

<script>
export default {
  name: 'nav-menu',
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toogleMenu () {
      this.showMenu = !this.showMenu
    },
    hideMenu () {
      this.showMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
  #menu{
    height: 100%;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .openMenu{
      position: relative;
      z-index: 3;
    }
  }
  .menuContainer{
    position: fixed;
    top: 0;
    right: -100%;
    bottom: 0;
    width: 250px;
    background-color: #fff;
    box-shadow: -10px 0 5px rgba(#ccc, .2);
    transition: all .3s ease-out 0s;
    z-index: 2;
    &.show{
      right: 0;
      transition: all .3s ease-in 0s;
    }
    ul{
      list-style: none;
      margin: 70px 0 0 0;
      text-align: left;
      li{
        margin: 10px 0;
        color: #4c4c4c;
        transition: all .3s ease 0s;
        &:hover{
          transform: translateX(3px);
        }
      }
    }
  }
  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: transparent;
  }
</style>
