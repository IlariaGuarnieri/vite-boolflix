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
  <div class="container text-center">
    <h1>{{ store.mainTitle }}</h1>
  
  <div>
    <input type="text" class="form-control" placeholder="search" v-model.trim="store.query">
  </div>
  <button @click="$emit('searchMovie')"> cerca</button>
</div>
</template>

<style lang="scss" >
@use '../../src/assets/scss/partials/variables' as *;

.container{
  height: 100px;
  background-color: $main-color;
    h1{
      color : $primary-color;
      text-align: left;
    }
  }

</style>