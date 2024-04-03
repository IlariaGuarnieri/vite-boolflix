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
  <div class="container text-center my-5">
    <h1>{{ store.mainTitle }}</h1>
  </div>
</template>

<style lang="scss" >
@use '../../src/assets/scss/partials/variables' as *;

.container{
  height: 80px;
  background-color: $main-color;
    h1{
      color : $primary-color;
      text-align: left;
    }
  }

</style>