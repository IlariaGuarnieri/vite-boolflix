<script>
import CardMovie from './CardMovie.vue';
import {store} from '../data/store'

export default {
  components:{
    CardMovie
  },
  props:{
    type: String
  },
  data() {
    return {
      store
    }
  },
  computed:{
    title(){
      return this.type === 'movie' ? 'Film' : 'Serie TV'
    }
  }
}
</script>

<template>
  <div class="text-center container ">
    <h3>{{ title }} </h3>
    <div class="row row-cols-4">
      <CardMovie 
      v-for=" card in store[type]" 
      :key="card.id" 
      :title="card.title"
      :cardObj="card"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  background-color: rgb(38, 38, 38);

}
h3{
  color: red;
  text-transform: uppercase;
}
</style>