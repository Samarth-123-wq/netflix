import { useEffect } from "react";
import { OPTION } from "../utility/constants";
import { useDispatch } from "react-redux";
import { popularMovies } from "../utility/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      OPTION,
    );
    const resp = await data.json();
    console.log(resp.results);
    dispatch(popularMovies(resp.results));
  };
  useEffect(() => {
    popularmovies();
  }, []);
};

export default usePopularMovies;
