<template>
  <div id="app" @changeTitle="test(data)">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  methods: {
    test (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
