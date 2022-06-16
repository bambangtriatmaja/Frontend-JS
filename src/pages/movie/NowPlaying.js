import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovie } from "../../features/movieSlice";

function NowPlayingMovie() {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);

    dispatch(updateMovie(response.data.results));
  }

  return (
    <div>
      <Movies title="Now Playing Movies" />
    </div>
  );
}

export default NowPlayingMovie;
