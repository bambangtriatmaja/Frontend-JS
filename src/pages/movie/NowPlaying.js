import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Movies movies={movies} title="Now Playing Movies" />
    </div>
  );
}

export default NowPlayingMovie;
