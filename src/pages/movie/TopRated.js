import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Movies movies={movies} title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
