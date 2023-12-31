/* eslint-disable no-undef */
export const API_KEY = "57abb4c36175724bc8597e8802dfdd7a";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const URL = "https://netflix-backend-qhft.onrender.com";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTVShows: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
};
