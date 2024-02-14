import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader, Error, DetailsHeader, RelatedSongs } from "../components";

import { useGetArtistDetailQuery } from "../redux/services/Shazam";
import Player from "../components/MusicPlayer/Player";

const ArtistDetail = () => {
  const { artistid } = useParams();
  
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistData,
    error,
  } = useGetArtistDetailQuery({ artistid });

  if (isFetchingArtistData) return <Loader />;
  if (error) return <Error />;

 
 

  return (
    <div className="mt-5 px-4">
      <DetailsHeader artistId={artistid} artistData={artistData.data[0]} />
      

      <RelatedSongs
        data={artistData.data[0]}
        activeSong={activeSong}
        isPlaying={isPlaying}
        artistid={artistid}
      />
    </div>
  );
};

export default ArtistDetail;
