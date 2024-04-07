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
    <div class="card mb-4" style=" position: relative">
      <!-- <img class="photo card-img-top" v-if=" "   :src="store.imgUrl + cardObj.poster_path"  :alt="immagine"> -->

      <div class="cont-poster">
          <img class=" poster photo card-img-top" v-if= "cardObj.poster_path" :src="`http://image.tmdb.org/t/p/w342${cardObj.poster_path}`"  alt="immagine">
          <img class="poster photo card-img-top" v-else src="../assets/img/imgpellicolavuota.jpeg" alt="">

  <div class="hover-zone">
          <div class="card-body">
          <h5 class="card-title mt-3">Titolo: {{ cardObj.title || cardObj.name }}</h5>
          <h7 class="card-subtitle mb-3 ">Titolo originale: {{ cardObj.original_title || cardObj.original_name}}</h7>
          <!-- <p class="text-text">{{ cardObj.original_language }}</p> -->
          <div class="language">
            <!-- v-if e con il v-else-if lo so per dirgli che se la lingua originale è 'it' o 'en' lui mette le bandiere -->
            <img class="bandiera" v-if="cardObj.original_language === 'it'" :src="store.imgIt" alt="it">  
            <img class="bandiera" v-else-if="cardObj.original_language === 'en'" :src="store.imgEng" alt="en">
            <!-- con il v-else  se non è ne 'it' ne 'en' stampa la sigla originale -->
            <span v-else>{{ cardObj.original_language }}</span>
            <!-- <p class="text-text">{{ getVote() }} </p> -->
        </div>
      </div>
<!-- STELLINE VOTAZIONE FILM -->
<div class="voto d-flex  ">
      <p>voto: </p>
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
        <p class="descrizione">Overview: {{ cardObj.overview }}</p>

    </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

.container{
  background-color: rgb(46, 45, 45);
  .bandiera{
  width: 30px;
  height: 18px;
  }
  // p{
  //   margin-bottom: 1px;
  // }
  .voto{
    margin-left: 40px;
  }
  span{
  text-transform: uppercase;
  }
  .fa-solid, .fa-regular{
  color:yellow;
  font-size: 1.5rem;
  }
  .descrizione{
  height: 90px;
  overflow: hidden;
  &:hover{
    overflow-y: auto;
    }
  }
  .hover-zone {
  // display: none; // gli elementi sono nascosti
  // z-index: 1;
  // padding: 20px;
  // box-sizing: border-box;
  // transition: transform 2s ease; /* Aggiungi la transizione per il testo */
  // transform: translateY(100%);
  // background-color: rgba(140, 34, 206, 0.331);
  // color: rgb(150, 6, 6);

  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); //Sfondo semitrasparente
  color: white;
  padding: 20px;
  box-sizing: border-box;
  }

  .card{
    position: relative;
  }

  .poster{
    height: 400px;
    width: 100%;
  }

  // .cont-poster:hover .hover-zone {
    // display: block; // visiono .hover-zone quando sono in hover sopra .cont-poster
    // position: absolute;
    // top: 0;
    // left: 0;
    // color: rgb(75, 1, 1);
    // background-color: rgba(169, 64, 234, 0.368);
    // height: 100%;
    // padding: 20px; 

  // }
  .cont-poster:hover + .hover-zone {
    display: block; // Mostra .hover-zone quando il mouse è sopra .cont-poster
    transition-duration: 2s;
    transition: opacity 0.7s ; // Transizione Opacità
    transition: width 2s;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);

  }
  .card:hover .hover-zone {
    display: block;
    transform: translateY(0); 
  }

.card-body{
  transition: all 2s ease;
  }
}

</style>