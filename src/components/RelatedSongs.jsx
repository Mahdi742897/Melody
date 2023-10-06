import React from "react";
import SongBar from "./Songbar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
}) => {
  console.log(data.tracks);

  {
    data || data == !undefined && (
      <div className="flex flex-col mt-5">
        <h1 className="text-2xl font-bold text-white">Related Songs: </h1>
        <div className="mt-6 w-full flex flex-col">
          {data?.tracks.map((song, index) => {
            return (
              <SongBar
                key={song?.key}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
                song={song}
                index={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default RelatedSongs;
