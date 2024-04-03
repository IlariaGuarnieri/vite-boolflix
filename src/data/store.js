import { reactive } from 'vue'

export const store = reactive ({
  // qui ci metto le info globali (per ora)
  mainTitle: 'BoolFlix',
  apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
  apiTvUrl: 'https://api.themoviedb.org/3/search/tv',
  cardsList: [],

  queryParams:{
    api_key: '5fe42b12386f9ba919296382ebb6abbd',
    query: 'matrix',
    language: 'it-IT'
  }
  
})