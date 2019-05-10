<template>
  <div class="List">
    <h1>Hello User</h1>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      title: 'Title list page'
    }
  },
  mounted () {
    this.$store.dispatch('changeTitle', this.title)
  }
}
</script>

<style>

</style>
