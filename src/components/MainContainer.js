import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const moview = useSelector((store) => store.movie?.nowplayingmovie);
  if (moview == null) return;
  const { original_title, overview, id } = moview[0];
  console.log(moview);
  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer id={id} />
    </div>
  );
};

export default MainContainer;
