import React, { useState } from "react";
import SongBar from "./Songbar";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useDispatch,  } from "react-redux";



const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  artistid,
}) => {
 
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };
  console.log("data",data);
  
  if (data && typeof data === 'object') {
    for (const [key, value] of Object.entries(data)) {
      // Check if the current value has the necessary nested structure
      if (value?.attributes?.title) {
        console.log(`${value.attributes.title}`);
      } else {
        console.log(`Title not found for ${key}`);
      }
    }
  } else {
    console.error('Data is undefined or not an object');
  }
  console.log(data);

  
 

  // if (data === !undefined) {
    return (
      <div className="flex flex-col mt-5">
        <h1 className="text-2xl font-bold text-white">Related Songs: </h1>
        <div className="mt-6 w-full flex flex-col">
          {data?.map((song, index) => {
            return (
              <SongBar
                key={song?.key}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, index)}
                song={song}
                index={index}
                data={data}
              />
            );
          })}
        </div>
      </div>
    );
  }
// };

export default RelatedSongs;
