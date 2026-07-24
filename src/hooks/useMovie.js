import { useEffect } from "react";
import { trailerIds } from "../utility/MovieSlice";
import { OPTION } from "../utility/constants";
import { useDispatch } from "react-redux";

const useMovie = (id) => {
  const dispatc = useDispatch();
  console.log(id);
  const movieclips = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      OPTION,
    );
    const res = await data.json();
    console.log(res);
    const trailer = res.results.filter((item) => item.type === "Trailer");
    const trailers = trailer.length ? trailer[0] : res.results[0];
    dispatc(trailerIds(trailers));
  };
  useEffect(() => {
    movieclips();
  }, []);
};

export default useMovie;
