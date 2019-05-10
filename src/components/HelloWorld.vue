<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      timeout: 0
    }
  },
  methods: {
    test () {
      return new Promise((resolve) => {
        this.timeout = 2500
        setTimeout(() => {
          resolve(this.timeout)
        }, this.timeout)
      })
    }
  },
  mounted () {
    this.test().then(function (data) {
      console.log(data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
