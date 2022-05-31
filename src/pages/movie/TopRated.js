import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";

function TopRatedMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Movies movies={movies} title={"Top Rated Movies"} />
    </div>
  );
}

export default TopRatedMovie;
