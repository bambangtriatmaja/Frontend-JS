/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(getDetailMovie, []);

  // Mendapatkan 1 data dari trending movies
  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    console.log(response.data.results[0]);
    return response.data.results[0];
  }

  // Membuat fungsi untuk mendapatkan detail movie
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    console.log(response.data);

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <div>
        <section>
          <div class="left">
            <h2>{movie.title}</h2>
            <h3>Genre: {genres}</h3>
            <p>{movie.overview}</p>
            <Button
              as="a"
              href={trailer}
              target="_blank"
              size="md"
              variant="secondary"
            >
              Watch
            </Button>
          </div>
          <div class="right">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.Title}
            />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
