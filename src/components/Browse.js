import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../hooks/useNowplayingmovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearchTogg = useSelector((store) => store.Gpt.showgpt);
  useNowplayingmovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {gptSearchTogg ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <Secondarycontainer />
        </>
      )}

      {/* 
            -MainContainer
               - VideoPlayuing
               - VideoTitle
            -Secondary Conatinser
               -Movieslist*n
               -Cards*n 
      */}
    </div>
  );
};

export default Browse;
