<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  components:{
    Header,
    Main,
  },
  data() {
    return {
      store
    }
  },
  // methods:{
  //   getApi(){
  //     axios.get(store.apiUrl, {
  //       params: store.queryParams
  //     })
  //     .then(result=>{
  //       store.cardMovieList = result.data.results;
  //       console.log(store.cardMovieList);
  //     })
  //     .catch( error=>{
  //       console.log(error);
  //     })
  //   }
  // },
  methods:{

    getApi(type){
      console.log(store.apiUrl + type);
      axios.get(store.apiUrl + type,{
        params: store.apiParams
      })
      .then ( res => {
        store[type] =res.data.results;  //uso le [] per prendere dinamicamente type e quindi il suo contenuto
        console.log(store[type]);
      })
      .catch( error=>{
        console.log(error);
      })
    },
    startSearch(){
      this.getApi('movie')
      this.getApi('tv')
    }
  },

    mounted() {
    this.startSearch()
  }
}


  // mounted() {
  //   this.getApi()
  // }
// }
</script>

<template>
  <Header @searchMovie = "getApi" />
  <!-- <CardMovie /> -->
  <Main type="movie" v-if="store.movie.lenght > 0" />
  <Main type="movie" v-if="store.movie.lenght > 0" />
</template>

<style lang="scss" scoped>
@use './assets/scss/partials/main.scss';
</style>