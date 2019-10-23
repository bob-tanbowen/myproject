<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>100%客片,比你想象的更美</h4>
    <exam01></exam01>
  </div>
</template>

<script>
import exam01 from './lvpai/image.vue'
export default {
  components:{exam01},
  name: 'HelloWorld',
  data () {
    return {
      msg: '客照赏析 '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
