import React from "react";
import { Link } from "react-router-dom";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { PlayPause } from "../components";
import { useDispatch } from "react-redux";

const SongCard = ({ song, index, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };
  // console.log(song?.artists[0]?.adamid);
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 backdrop-blur-sm rounded-lg cursor-pointer animate-slideup">
      <div className="relative w-full h-56 group">
        <img
          src={song?.images?.coverart}
          alt="songimage"
          className="rounded-md"
        />

        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song?.title
              ? "flex bg-black opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        </div>
      </div>
      <div className="mt-2 flex flex-col text-white">
        <p className="font-semibold text-base truncate">
          <Link to={`/Melody/songs/${song?.key}`}>{song?.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-400">
          <Link
            to={
              song.artists ? `/Melody/artists/${song.artists[0].adamid}` : "/Melody/top-artists"
            }
          >
            {song.artists ? song?.subtitle : "no artist"}
            </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
