<script>
import CardMovie from './CardMovie.vue';
import {store} from '../data/store'
export default {
  components:{
    CardMovie
  },
  data() {
    return {
      store
    }
  },
  methods:{

  }
}
</script>

<template>
  <div class="text-center container">
    <div class="row row-cols-4">
      <CardMovie 
      v-for=" card in store.cardMovieList" 
      :key="card.id" 
      :title="card.title"
      :original_title="card.original_title"
      :original_language="card.original_language"
      :vote-average="card.vote-average"
      />
    </div>
</div>
</template>

<style lang="scss" scoped>
// .container{
  // background-color: rgb(38, 38, 38);
  // height: 100vh;
// }
</style>