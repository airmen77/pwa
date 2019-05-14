<template>
    <div id="menu">
      <svg :class="showMenu ? 'openMenu ham hamRotate ham4 active' : 'openMenu ham hamRotate ham4'" viewBox="0 0 100 100" width="45" @click="toogleMenu">
        <path class="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
        <path class="line middle" d="m 70,50 h -40" />
        <path class="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
      </svg>

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
    right: 0;
    transform: translateX(130%);
    bottom: 0;
    width: 250px;
    background-color: #fff;
    box-shadow: -10px 0 5px rgba(#ccc, .2);
    transition: all .4s ease-out 0s;
    z-index: 2;
    &.show{
      transform: translateX(0);
      transition: all .4s ease-in 0s;
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
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:#000;
    stroke-width:5.5;
    stroke-linecap:round;
  }
  .ham4 .top {
    stroke-dasharray: 40 121;
  }
  .ham4 .bottom {
    stroke-dasharray: 40 121;
  }
  .ham4.active .top {
    stroke-dashoffset: -68px;
  }
  .ham4.active .bottom {
    stroke-dashoffset: -68px;
  }
</style>
