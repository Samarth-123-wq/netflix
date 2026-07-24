import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchContainer from "./GptSearchContainer";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_large.jpg"
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptSearchContainer />
    </div>
  );
};

export default GptSearch;
