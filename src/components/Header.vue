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
    <h1> {{ store.mainTitle }} </h1>
  
  <div>
    <input type="text" 
    class="form-control" 
    placeholder="search" 
    v-model.trim="store.apiParams.query">
  </div>
  <button @click="$emit('searchMovie')"> cerca</button>
</div>
</template>

<style lang="scss" >
@use '../../src/assets/scss/partials/variables' as *;

.container{
  background-color: $main-color;
    h1{
      color : $primary-color;
      text-align: left;
    }
    input{
      margin-top: 30px;
      
    }
    button{
      margin-top: 30px;
      height: 30px;
    }
  }


</style>