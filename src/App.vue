<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  components:{
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params: store.queryParams
      })
      .then(result=>{
        store.cardMovieList = result.data.results;
        console.log(store.cardMovieList);
      })
      .catch( error=>{
        console.log(error);
      })
    }
  },
  mounted() {
    this.getApi()
  }
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss" scoped>
@use './assets/scss/partials/main.scss';
</style>