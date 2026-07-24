import React from "react";
import { CDN_MOVIE_URL } from "../utility/constants";

const MovieCard = ({ poster_path }) => {
  console.log(poster_path);
  return (
    <div className="w-48 pr-6">
      <img alt="Movie Cards" src={CDN_MOVIE_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
