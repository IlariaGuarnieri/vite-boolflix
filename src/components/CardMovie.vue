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
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="col container ">
    <div class="card mb-3">
      <!-- <img :src="/img/${item.}" class="photo card-img-top" :alt="immagine"> -->
      <div class="card-body">
        <h5 class="card-title mt-3">{{ cardObj.title || cardObj.name }}</h5>
        <h6 class="card-subtitle mb-3 text-body-secondary">{{ cardObj.original_title || cardObj.original_name}}</h6>
        <!-- <p class="text-text">{{ cardObj.original_language }}</p> -->
        <!-- v-if e con il v-else-if lo so per dirgli che se l'a lingua originale è 'it' o 'en' lui mette le bandiere -->
        <img v-if="cardObj.original_language === 'it'" :src="store.imgIt" alt="it">  
        <img v-else-if="cardObj.original_language === 'en'" :src="store.imgEng" alt="en">
        <!-- con il v-else  se non è ne 'it' ne 'en' stampa la sigla originale -->
        <span v-else>{{ cardObj.original_language }}</span>
        <p class="text-text">{{ cardObj.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

// .container{
//   background-color: rgb(46, 45, 45);
// }

img{
  width: 20px;
}
span{
  text-transform: uppercase;
}
</style>