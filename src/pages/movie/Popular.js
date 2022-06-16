import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovie } from "../../features/movieSlice";

function PopularMovie() {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.POPULAR);

    // Simpan data ke state movie
    dispatch(updateMovie(response.data.results));
  }

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
