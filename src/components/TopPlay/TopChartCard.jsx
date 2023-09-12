import React from "react";
import { Link } from "react-router-dom";
import PlayPause from "../PlayPause";

const TopChartCard = ({
  track,
  index,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className="w-full flex items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <h3 className="font-bold text-base text-white mr-3">{index + 1}</h3>
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <Link to={`/songs/${track.key}`}>
            <img
              src={track?.images?.coverart}
              alt={track?.titlez}
              className="w-16 rounded-xl"
            />
          </Link>
          <div className="flex flex-col justify-center mx-3">
            <Link to={`/songs/${track.key}`}>
              <p className="text-white text-base font-bold">{track.title}</p>
            </Link>
            <Link to={`/artists/${track?.artists[0]?.adamid}`}>
              <p className="text-gray-400 text-xs font-bold">
                {track.subtitle}
              </p>
            </Link>
          </div>
        </div>
        <div>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={track}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TopChartCard;
