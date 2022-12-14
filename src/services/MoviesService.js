import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = async pageNo => {
  const res = await axios.get(`${API_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${pageNo}`);
  return res.data.results;
};

const getMovie = async movieId => {
  const res = await axios.get(`${API_URL}/3/movie/${movieId}?api_key=${API_KEY}`);
  return res.data;
};

const getClips = async movieId => {
  const res = await axios.get(`${API_URL}/3/movie/${movieId}/videos?api_key=${API_KEY}`);
  return res.data.results;
};

export const MoviesService = {
  getMovies,
  getMovie,
  getClips,
};
