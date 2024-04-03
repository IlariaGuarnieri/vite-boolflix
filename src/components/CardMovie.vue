<script>
export default {
  props:{
    title: String,
    original_title: String,
    language:String,
    vote: String,
  }
}
</script>

<template>
  <div class="col mb-3">
    <div class="mt-3">
      <img :src="image" class="photo card-img-top" :alt="name">
      <div class="card-body">
        <h5 class="card-title mt-3">{{ title }}</h5>
        <h6 class="card-title">{{ original_title }}</h6>
        <p class="text-center">{{ vote-average }}</p>
        <p class="text-center">{{ original_language }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

</style>