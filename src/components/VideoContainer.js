import React, { useEffect } from "react";
import { OPTION } from "./../utility/constants.js";
const VideoContainer = ({ id }) => {
  const movieclips = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      OPTION,
    );
    const res = await data.json();
    console.log(res);
    const trailer = res.results.filter((item) => item.type === "Trailer");
    const trailers = trailer.length ? trailer[0] : res.results[0];
  };
  useEffect(() => {
    movieclips();
  });
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nhxCXH5R7bY?si=Hr0699SMSic2jrjj"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
