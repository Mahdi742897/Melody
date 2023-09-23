import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  return (
    <div className="w-full flex flex-col relative mb-10">
      <div className="w-full bg-gradient-to-l from-transparent to-black h-28 md:h-44" />
      <div className="absolute inset-0 flex items-center w-fit">
        <img
          src={artistId ? artistId : songData?.images?.coverart}
          alt="artist"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-[3px] border-gray-400 shadow-2xl shadow-black"
        />
        <div className="ml-4 min-w-full md:pr-40 lg:pr-16">
            <p className="font-bold text-lg md:text-xl lg:text-2xl text-white">{artistId? artistId: songData?.title}</p>
            {!artistId && 
            <Link to={`/Melody/artists/${songData?.artists[0].adamid}`}>
                <p className="text-gray-400 text-base md:text-lg">{songData?.subtitle}</p>
            </Link>
            }
            <p className="text-gray-400 text-sm">{artistId ? "dynamic" : songData?.genres?.primary}</p>
        </div>
      </div>
      <div className="w-full h-20" />
    </div>
  );
};

export default DetailsHeader;
