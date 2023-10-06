import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Error, DetailsHeader, RelatedSongs } from "../components";
import { useState } from "react";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/Shazam";
import { data } from "autoprefixer";

const SongDetail = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails,error:songError } =
    useGetSongDetailsQuery({ songid });
  const { data: relatedSongsData, isFetching: isFetchingRelatedSongs,error:relatedSongError } =
    useGetSongRelatedQuery({ songid });

  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Loading Song Details" />;
    
    if(songError,relatedSongError) return <Error />

  // console.log(songData);
  // console.log(relatedSongsData.tracks);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div className="mt-5 px-4">
      <DetailsHeader artistId="" artistData="" songData={songData} />
      <div className="mb-32">
        <h2 className="text-2xl font-bold text-white">Lyrics :</h2>
        <div className="mt-5">
          <div className="pl-5" dir="ltr">
            {songData?.sections[1].type === "LYRICS" ? (
              songData?.sections[1].text.map((item, index) => {
                return (
                  <p key={index} className="text-gray-400 text-base">
                    {item}
                  </p>
                );
              })
            ) : (
              <p className="text-gray-400 text-base">Lyrics Is Not Available</p>
            )}
          </div>
        </div>
      </div>

      <RelatedSongs
        data={relatedSongsData}
        activeSong={activeSong}
        isPlaying={isPlaying}
        handlePlayClick={handlePlayClick}
        handlePauseClick={handlePauseClick}
      />
    </div>
  );
};

export default SongDetail;
