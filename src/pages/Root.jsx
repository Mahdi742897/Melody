import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, TopPlay } from "../components";
import { logo } from "../assets";

const Root = () => {
  return (
    <>
    
      <Sidebar />

      <div className="flex md:flex-row flex-col-reverse min-w-[80vw] justify-between">
        <div className="flex w-[80%] min-h-screen md:max-h-screen md:overflow-scroll hide-scrollbar">
          <Outlet />
        </div>
        <div className="relative xl:static right-0 top-0 h-fit mt-20 md:mt-4 md:min-h-[calc(100vh-200px)]">
          <TopPlay />
        </div>
      </div>
      
    </>
  );
};

export default Root;
