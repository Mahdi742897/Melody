import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants/constants.js";
import { useGetAllPopularSongsQuery } from "../redux/services/Shazam";
import { useDispatch, useSelector } from "react-redux";


const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  
  const { data, isFetching, error}  = useGetAllPopularSongsQuery();
  
  console.log(data?.tracks);
  const genre = "pop";

  if (isFetching) return <Loader title="Loading Songs.." />;
  if (error) return <Error />;
  return (
    <section className="flex flex-col min-h-screen max-h-screen">
      <div className="flex w-full items-center justify-center flex-col gap-4 sm:flex-row sm:justify-between mt-4 mb-10">
        <h1 className="text-white font-bold text-2xl">Discover {genre}</h1>
        <select className="bg-black text-gray-300 flex justify-between text-sm outline-none items-center rounded-lg w-28 p-2">
          {genres.map((genre, index) => {
            return (
              <option key={genre.value} className="" value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-h-screen overflow-y-scroll hide-scrollbar">
        {data?.tracks.map((song, index) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              index={index}
              activeSong={activeSong}
              isPlaying={isPlaying}
              data = {data?.tracks}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Discover;
