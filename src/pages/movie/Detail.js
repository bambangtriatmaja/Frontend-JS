import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovie } from "../../features/movieSlice";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendationMovies();
  }, [params.id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
    dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title={"Recommendation Movies"} />
    </>
  );
}

export default Detail;
