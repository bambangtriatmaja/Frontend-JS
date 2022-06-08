import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  //   DETAIL: `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`
  HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
};

export default ENDPOINTS;
