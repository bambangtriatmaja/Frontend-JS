import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovie } from "../../features/movieSlice";

function TopRatedMovie() {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <div>
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
