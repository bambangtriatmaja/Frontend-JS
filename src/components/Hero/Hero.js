/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import ENDPOINTS from "../utils/constants/endpoints";
import StyledHero from "./Hero.styled";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(getDetailMovie, []);

  // Mendapatkan 1 data dari trending movies
  async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
  }

  // Membuat fungsi untuk mendapatkan detail movie
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <div>
        <section>
          <div className="left">
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
          <div className="right">
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
