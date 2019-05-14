<template>
  <div class="hello">
    <h1>Сегодняшний курс валют</h1>

    <ul>
      <li class="curencyList listHeader">
        <div class="itm">Валюта</div>
        <div class="itm">Покупка</div>
        <div class="itm">Продажа</div>
      </li>
      <li v-for="item in rate" :key="item.ccy" class="curencyList">
        <div class="itm">{{item.ccy}}</div>
        <div class="itm">{{item.buy}}</div>
        <div class="itm">{{item.sale}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      timeout: 0,
      rate: []
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
    },
    loadCurencyRate () {
      axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(response => {
          this.rate = response.data
        })
    }
  },
  mounted () {
    this.loadCurencyRate()
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
  max-width: 640px;
  margin: auto;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.listHeader{
  margin-bottom: 10px;
}
.curencyList{
  display: flex;
  justify-content: space-around;
  .itm{
    width: 100%;
  }
}
a {
  color: #42b983;
}
</style>
