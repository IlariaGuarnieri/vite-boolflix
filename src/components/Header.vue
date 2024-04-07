<script>
import {store} from '../data/store'

export default {
  data() {
    return {
      store
    }
  },
  
}
</script>

<template>
  <div class="container text-center d-flex">
    <img class="mt-2" src="/img/logo-boolflix.png" alt="">
  
  <div>
    <input type="text" 
    class="form-control" 
    placeholder="search movie, serie.." 
    v-model.trim="store.apiParams.query">
  </div>
  <button class="btn btn-danger " @click="$emit('searchMovie')"> cerca</button>
</div>
</template>

<style lang="scss" >
@use '../../src/assets/scss/partials/variables' as *;

.container{
  background-color: #262626;
  justify-content: space-around;
    img{
      width: 160px;
      height: 70px;
    }
    input{
      margin: 25px;
      margin-left: 10px;
    }
    button{
      margin: 30px;
      height: 30px;
      padding: 2px;
      width: 80px;
    }
  }


</style>