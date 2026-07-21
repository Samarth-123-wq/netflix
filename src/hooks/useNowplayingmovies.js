import { useEffect } from "react";
import { OPTION } from "../utility/constants";
import { useDispatch } from "react-redux";
import { nowplayingMovie } from "../utility/MovieSlice";

const useNowplayingmovies = () => {
  const dispatch = useDispatch();
  const getnowplayingmovi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTION,
    );
    const resp = await data.json();
    console.log(resp.results);
    dispatch(nowplayingMovie(resp.results));
  };
  useEffect(() => {
    getnowplayingmovi();
  }, []);
};

export default useNowplayingmovies;
