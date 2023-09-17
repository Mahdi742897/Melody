import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Error } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/Shazam";

const SongDetail = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {data , isFetching} = useGetSongDetailsQuery({songid});
  console.log(data);
  console.log(songid);

  return (
    <div className="mt-5">
      <div className="mb-3">Header</div>
      <div>
      <h2 className="text-2xl font-bold text-white">Lyric :</h2>
      <div className="mt-5">
        {data?.sections[1].type === "LYRICS" ? 
        data?.sections[1].text.map((item , index) => {
          return(
            <p>{item}</p>
          )
        }) : "dfdf"}
      </div>
      </div>
    </div>
  );
};

export default SongDetail;
