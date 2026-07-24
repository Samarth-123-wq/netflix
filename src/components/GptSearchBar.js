import React from "react";

const GptSearchBar = () => {
  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full flex justify-center z-10">
      <form className="bg-black grid grid-cols-12 w-1/2 rounded-lg">
        <input
          className="m-4 p-4 col-span-9 rounded-lg"
          placeholder="What you want"
          type="text"
        />
        <button className="col-span-3 rounded-lg px-4 m-4 py-2 text-white bg-red-600">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
