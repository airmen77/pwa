<template>
  <div class="home">
    <HelloWorld msg="Welcome at Home"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      title: 'Hello User'
    }
  },
  mounted () {
    this.$store.dispatch('changeTitle', this.title)
  }
}
</script>
