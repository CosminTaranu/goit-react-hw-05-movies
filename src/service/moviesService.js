import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '0d3671a53348a330ce765e3453fa0a61';

const getTrending = async () => {
  const ENDPOINT = '/trending/movie/day';
  const response = await axios.get(`${ENDPOINT}?api_key=${API_KEY}`);
  return response.data;
};

const getSearchedMovies = async searchedQuery => {
  const ENDPOINT = `/search/movie?query=${searchedQuery}`;
  const response = await axios.get(`${ENDPOINT}&api_key=${API_KEY}`);
  return response.data;
};

const getMovieDetails = async movieId => {
  const ENDPOINT = `/movie/${movieId}`;
  const response = await axios.get(`${ENDPOINT}?api_key=${API_KEY}`);
  return response.data;
};

const getMovieCredits = async movieId => {
  const ENDPOINT = `/movie/${movieId}/credits`;
  const response = await axios.get(`${ENDPOINT}?api_key=${API_KEY}`);
  return response.data;
};

const getMovieReviews = async movieId => {
  const ENDPOINT = `/movie/${movieId}/reviews`;
  const response = await axios.get(`${ENDPOINT}?api_key=${API_KEY}`);
  return response.data;
};

const moviesService = {
  getTrending,
  getSearchedMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default moviesService;
