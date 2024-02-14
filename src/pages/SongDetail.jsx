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
import "../index.css";
// import { data } from "autoprefixer";

const SongDetail = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: songError,
  } = useGetSongDetailsQuery({ songid });

  const {
    data: relatedSongsData,
    isFetching: isFetchingRelatedSongs,
    error: relatedSongError,
  } = useGetSongRelatedQuery({ songid });

  if (isFetchingSongDetails) return <Loader title="Loading Song Details" />;

  if (songError) return <Error />;

  // console.log("data",songData);
  console.log("related", relatedSongsData);

  const relatedSongArray = [];
  for (const key in relatedSongsData?.resources?.["shazam-songs"]) {
    if (relatedSongsData?.resources?.["shazam-songs"].hasOwnProperty(key)) {
      const song = relatedSongsData?.resources?.["shazam-songs"][key];
      // Access song details here
      relatedSongArray.push(song);
    }
  }
  console.log(relatedSongArray);

  

  const lyricId =
    songData?.resources?.["shazam-songs"]?.[songid]?.relationships?.lyrics
      ?.data[0]?.id;

  return (
    <>
   
    
    <div className="mt-5 px-4 relative min-h-full">
        <DetailsHeader
          artistId=""
          artistData=""
          songData={songData?.resources}
          songid={songid}
        />
      <div className="mb-32">
        <h2 className="text-2xl font-bold text-white">Lyrics :</h2>
        <div className="mt-5">
          <div className="pl-5 hide-scrollbar" dir="ltr">
            {songData?.resources?.lyrics?.[lyricId]?.type === "lyrics" ? (
              songData?.resources?.lyrics?.[lyricId]?.attributes?.text.map(
                (item, index) => {
                  return (
                    <p key={index} className="text-gray-400 text-base">
                      {item}
                    </p>
                  );
                }
              )
            ) : (
              <p className="text-gray-400 text-base">Lyrics Is Not Available</p>
            )}
          </div>
        </div>
      </div>

      <RelatedSongs
        data={relatedSongArray}
        activeSong={activeSong}
        isPlaying={isPlaying}
        // handlePlayClick={handlePlayClick}
        // handlePauseClick={handlePauseClick}
      />
    </div>
    </>
  );
};

export default SongDetail;
