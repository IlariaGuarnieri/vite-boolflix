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
      this.store.cardsList = [];
      console.log('GET API')
      console.log(this.store)
      axios.get(this.store.apiUrl, {
        params: store.queryParams
      })
      .then(results=>{
        this.store.cardsList = result.data.results;
        console.log(this.store.cardsList);
      })
      .catch( error=>{
        console.log(error);
      })
    }
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