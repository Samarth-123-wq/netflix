import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store?.movie);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-50px relative z-20">
        <MovieList
          title={"NowPlayingMovies"}
          movies={movies?.nowplayingmovie}
        />
        <MovieList title={"PopulMovies"} movies={movies?.popularMovie} />
        <MovieList
          title={"NowPlayingMovies"}
          movies={movies?.nowplayingmovie}
        />
        <MovieList
          title={"NowPlayingMovies"}
          movies={movies?.nowplayingmovie}
        />
        <MovieList
          title={"NowPlayingMovies"}
          movies={movies?.nowplayingmovie}
        />
        <MovieList
          title={"NowPlayingMovies"}
          movies={movies?.nowplayingmovie}
        />
      </div>
      {/*
      MovieList - NowPlaying
        n*MovieCard
      MovieList - Popular
    */}
    </div>
  );
};

export default Secondarycontainer;
