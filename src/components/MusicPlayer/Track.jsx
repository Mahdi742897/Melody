import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start w-1/2 md:w-1/3">
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_4s_linear_infinite]" : ""
      } hidden sm:block h-[3.5rem] w-[3.5rem] mr-4`}
    >
      {/* artistAvatar */}
      <img
        src={activeSong?.images ? activeSong?.images?.coverart: activeSong?.attributes?.images?.artistAvatar}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[60%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title
          ? activeSong?.title
          : activeSong?.attributes?.title
          ? activeSong?.attributes?.title
          : "No active Song"}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.artists?.alias
          ? activeSong?.artists[0]?.alias
          : activeSong?.subtitle
          ? activeSong?.subtitle
          : activeSong?.attributes?.artist
          ? activeSong?.attributes?.artist
          : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
