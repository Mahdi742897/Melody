import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, TopPlay } from "../components";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Root = () => {

  const { activeSong } = useSelector((state) => state.player);


  return (
    <>
      <Sidebar />
    
      <div className={`flex md:flex-row flex-col-reverse min-w-[calc(100vw-220px)] justify-between ${activeSong.title ? "max-h-[calc(100vh-70px)]" : "min-h-screen"}`}>
        <div className="flex w-[80%] md:max-h-screen md:overflow-scroll hide-scrollbar">
          <Outlet />
        </div>
        <div className="relative xl:static right-0 top-0 h-fit mt-20 md:mt-4">
          <TopPlay />
        </div>
      </div>
      
    </>
  );
};

export default Root;
