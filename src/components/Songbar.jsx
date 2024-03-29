import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,  } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const Songbar = ({
  song,
  index,
  artistId,
  isPlaying,
  activeSong,
  data,
  handlePauseClick,
handlePlayClick
}) => {

  
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
        activeSong?.title === song?.attributes?.title
          ? "bg-[#4c426e]"
          : "bg-transparent"
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={
            artistId
              ? song?.attributes?.images?.artistAvatar
              : song?.attributes?.images?.coverArt
          }
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          {!artistId ? (
            <Link to={`/songs/${song.key}`}>
              <p className="text-xl font-bold text-white">
                {song?.attributes?.title}
              </p>
            </Link>
          ) : (
            <p className="text-xl font-bold text-white">
              {song?.attributes?.artist}
            </p>
          )}
          <p className="text-base text-gray-300 mt-1">
            {artistId ? song?.attributes?.albumName : song?.attributes?.artist}
          </p>
        </div>
      </div>
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          
        />
      ) : null}
    </div>
  );
};

export default Songbar;
