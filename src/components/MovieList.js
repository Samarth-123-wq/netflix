import React from "react";
import MovieCard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }
  return (
    <div className="px-6 bg-black">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll px-6">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
