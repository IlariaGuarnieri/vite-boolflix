import { reactive } from 'vue'

export const store = reactive ({
  // qui ci metto le info globali (per ora)
  mainTitle: 'BoolFlix',
  apiUrl: 'https://api.themoviedb.org/3/search/',
  // apiTvUrl: 'https://api.themoviedb.org/3/search/tv',
  apiParams:{
    api_key : '5fe42b12386f9ba919296382ebb6abbd',
    language : 'it-IT',
    query : '',
  },
  movie: [],
  tv: [],
  eng: 'img/en.png',
  it: 'img/it.png'
  // creare un secondo array per le series

  // queryParams:{
  //   api_key: '5fe42b12386f9ba919296382ebb6abbd',
  //   query: '',
  //   language: 'it'
  // }

})