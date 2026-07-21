import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../hooks/useNowplayingmovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
  useNowplayingmovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <Secondarycontainer />
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
