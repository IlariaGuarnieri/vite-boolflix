<script>
import {store} from '../data/store'
export default {
  props:{
    // title: String,
    // original_title: String,
    // language:String,
    // vote: String,
    cardObj: Object,
  },
}
</script>

<template>
  <div class="col">
    <div class="card mb-3">
      <!-- <img :src="image" class="photo card-img-top" :alt="name"> -->
      <div class="card-body">
        <h5 class="card-title mt-3">{{ cardObj.title || cardObj.name }}</h5>
        <h6 class="card-subtitle mb-3 text-body-secondary">{{ cardObj.original_title || cardObj.original_name}}</h6>
        <p class="text-text">{{ cardObj.vote_average }}</p>
        <p class="text-text">{{ cardObj.original_language }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

</style>