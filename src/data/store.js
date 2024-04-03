import { reactive } from 'vue'

export const store = reactive ({
  // qui ci metto le info globali (per ora)
  mainTitle: 'BoolFlix',
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  apiTvUrl: 'https://api.themoviedb.org/3/search/tv',
  cardsList: [],

  queryParams:{
    api_key: '5fe42b12386f9ba919296382ebb6abbd',
    title: '',
    original_title: '',
    language: 'it',
    vote: '',
    num: 10,  //array di 20 elementi
    offset: 0  //partendo da 0 = quindi vuol dire che sono a pagina 1
  }
  
})