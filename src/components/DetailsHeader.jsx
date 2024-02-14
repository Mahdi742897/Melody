import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData, songid }) => {
  return (
    <div className="w-full flex flex-col mb-10 relative">
      <div className="w-full bg-gradient-to-l from-transparent to-black h-28 md:h-44" />
      <div className="absolute inset-0 flex items-center w-72 md:w-80">
        <img
          src={
            songData && songData?.["shazam-songs"]?.[songid]?.attributes?.images?.coverArt
          }
          alt="artist"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-[3px] border-gray-400 shadow-2xl shadow-black"
        />

        <div className="ml-4 min-w-full md:pr-40 lg:pr-16">
          <p className="font-bold text-lg md:text-xl lg:text-2xl text-white">
            {artistId
              ? artistData?.attributes?.name
              : songData?.["shazam-songs"]?.[songid]?.attributes?.title}
          </p>
          {!artistId && (
            <Link
              to={`/Melody/artists/${songData?.["shazam-songs"]?.[songid]?.relationships?.artists?.data[0]?.id}`}
            >
              <p className="text-gray-400 text-base md:text-lg">
                {songData?.["shazam-songs"]?.[songid]?.attributes?.artist}
              </p>
            </Link>
          )}
          <p className="text-gray-400 text-sm">
            {artistId
              ? `${artistData?.attributes?.genreNames[0]} Singer`
              : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full h-20" />
    </div>
  );
};

export default DetailsHeader;
