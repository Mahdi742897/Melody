import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "swiper/element/bundle";
register();

import Error from "../Error";

import PlayPause from "../PlayPause";
import { setActiveSong, playPause } from "../../redux/features/playerSlice";
import { useGetAllPopularSongsQuery } from "../../redux/services/Shazam";
import TopChartCard from "./TopChartCard";
import Swiper from "swiper";

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data,error } = useGetAllPopularSongsQuery();

  const topPlay = data?.tracks.slice(0, 5);

  const topArtists = data?.tracks.slice(0, 10);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  if(error) return <Error/>

console.log("activeSong activeSong activeSong",activeSong);
console.log("data data data",data);
  
  return (

    <div className="ml-0 xl:ml-6 xl:mb-0 mb-6 relative  flex-1 flex flex-col md:max-w-[500px] md:min-h-[calc(100vh-200px)]">
      <div className="w-full flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold">Top Chart</h2>
          <Link to="/Melody/top-chart">
            <p className="text-gray-300 text-base cursor-pointer">see more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
        
          {topPlay &&
            topPlay.map((track, index) => {
              return (
                <TopChartCard
                  track={track}
                  index={index}
                  key={track.key}
                  activeSong={activeSong}
                  isPlaying={isPlaying}
                  handlePauseClick={handlePauseClick}
                  handlePlayClick={() => handlePlayClick(track, index)}
                />
              );
            })}
        </div>
        <div className="w-full mt-8">
          <div className="flex justify-between items-center px-3">
            <h2 className="text-white text-2xl font-bold">Top Artists</h2>
            <Link to="/top-artists">
              <p className="text-gray-300 text-base cursor-pointer">see more</p>
            </Link>
          </div>

          <swiper-container
            slides-per-view="auto"
            space-between="15"
            free-mode="true"
            class="mt-5"
          >
            {topArtists &&
              topArtists.map((track, index) => {
                return (
                  <swiper-slide
                    key={track?.key}
                    class="shadow-lg rounded-full w-1/4 h-auto"
                  >
                    <Link to={`/Melody/artists/${track?.artists[0]?.adamid}`}>
                      <img
                        src={track?.images?.background}
                        className="rounded-full"
                      />
                    </Link>
                  </swiper-slide>
                );
              })
            }
          </swiper-container>
        </div>
      </div>
    </div>
  
  )
  
  
};

export default TopPlay;
