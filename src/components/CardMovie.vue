<script>
import {store} from '../data/store'
import '@fortawesome/fontawesome-free/css/all.css' //(dopo aver aperto il terminale laterale e fatto npm i @fortawesome/fontawesome-free) importo qui i file di stile di font awesome
import '@fortawesome/fontawesome-free/js/all.js' //importo i file di javascript di font awesome

export default {
  props:{
    // title: String,
    // original_title: String,
    // language:String,
    // vote: String,
    cardObj: Object,
    poster_path: String
  },
  data() {
    return {
      store,
    }
  },
  methods:{
    getVote() {
      // Trasforma il voto da 1 a 10 a da 1 a 5 e arrotonda sempre per eccesso all'unità successiva
      return Math.ceil(this.cardObj.vote_average / 2);
    },
    getVoteEmpty() {
      // approsimazione per difetto di 5
      return Math.floor( 5 - this.cardObj.vote_average / 2);
    }
  }
}
</script>

<template>
  <div class="col container ">
    <div class="card mb-4">
      <!-- <img class="photo card-img-top" v-if=" "   :src="store.imgUrl + cardObj.poster_path"  :alt="immagine"> -->
      <img class="photo card-img-top" v-if= "cardObj.poster_path" :src="`http://image.tmdb.org/t/p/w342${cardObj.poster_path}`"  alt="immagine">
      <img class="photo card-img-top" v-else src="../assets/img/imgpellicolavuota.jpeg" alt="">
      <div class="card-body">
        <h5 class="card-title mt-3">{{ cardObj.title || cardObj.name }}</h5>
        <h6 class="card-subtitle mb-3 text-body-secondary">{{ cardObj.original_title || cardObj.original_name}}</h6>
        <!-- <p class="text-text">{{ cardObj.original_language }}</p> -->
        <!-- v-if e con il v-else-if lo so per dirgli che se l'a lingua originale è 'it' o 'en' lui mette le bandiere -->
        <img class="bandiera" v-if="cardObj.original_language === 'it'" :src="store.imgIt" alt="it">  
        <img class="bandiera" v-else-if="cardObj.original_language === 'en'" :src="store.imgEng" alt="en">
        <!-- con il v-else  se non è ne 'it' ne 'en' stampa la sigla originale -->
        <span v-else>{{ cardObj.original_language }}</span>
        <!-- <p class="text-text">{{ getVote() }} </p> -->
        <div>
        <i 
        v-for="star in getVote()"
        :key="star"
        class="fa-solid fa-star"
        >
        </i>

        <i 
        v-for="starEmpty in getVoteEmpty()"
        :key="starEmpty"
        class="fa-regular fa-star"
        >
        </i>
        </div>
        <p class="descrizione">{{ cardObj.overview }}</p>
        
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

.container{
  background-color: rgb(46, 45, 45);
}

.bandiera{
  width: 20px;
}
span{
  text-transform: uppercase;
}
.fa-solid{
  color:rgb(18, 78, 58);
  font-size: 1.5rem;
}

.descrizione{
  height: 90px;
  overflow: hidden;
  &:hover{
    overflow-y: auto;
  }
}

</style>