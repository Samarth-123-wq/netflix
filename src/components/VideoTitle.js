import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="text-white p-4 px-14 bg-gray-600 mx-3 rounded-lg text-lg bg-opacity-51">
          Play
        </button>
        <button className="text-white p-4 px-14 bg-gray-600 rounded-lg text-lg bg-opacity-51">
          Pause
        </button>
      </div>
      {/* < */}
    </div>
  );
};

export default VideoTitle;
