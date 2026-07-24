import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchContainer from "./GptSearchContainer";
import { BGROUND_URL } from "../utility/constants";

const GptSearch = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-screen object-cover"
        alt="BGROUND_URL"
        src={BGROUND_URL}
      />

      <GptSearchBar />
      <GptSearchContainer />
    </div>
  );
};

export default GptSearch;
