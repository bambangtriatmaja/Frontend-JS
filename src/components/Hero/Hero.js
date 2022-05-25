/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    // Melakukan side effect, fetch data movie (API)
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );
    const data = await response.json();

    setMovie(data);
  }

  useEffect(fetchMovie, []);

  console.log(movie);
  return (
    <StyledHero>
      <div>
        <section>
          <div class="left">
            <h2>{movie.Title}</h2>
            <h3>Genre: {movie.Genre}</h3>
            <p>{movie.Plot}</p>
            <Button size="md" variant="secondary">
              Watch
            </Button>
          </div>
          <div class="right">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
