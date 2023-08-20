const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data;
}

export async function getMovieDetails(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

export async function getMovieCredits(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

export async function getMovieReviews(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

export async function getTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

export async function searchMoviesByKeyword(keyword) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`);
  const data = await response.json();
  return data;
}

