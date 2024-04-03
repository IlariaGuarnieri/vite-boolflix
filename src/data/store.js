import { reactive } from 'vue'

export const store = reactive ({
  // qui ci metto le info globali (per ora)
  mainTitle: 'BoolFlix',
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  apiTvUrl: 'https://api.themoviedb.org/3/search/tv',
  cardMovieList: [],
  // creare un secondo array per le series

  queryParams:{
    api_key: '5fe42b12386f9ba919296382ebb6abbd',
    query: '',
    language: 'it'
  }
})