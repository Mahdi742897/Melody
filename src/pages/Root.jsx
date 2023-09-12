import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, TopPlay } from "../components";
import { logo } from "../assets";

const Root = () => {
  return (
    <>
    
      <Sidebar />

      <div className="flex md:flex-row flex-col-reverse">
        <div className="min-h-screen flex basis-3/4">
          <Outlet />
        </div>
        <div className="relative xl:sticky top-0 h-fit mt-20 md:mt-4 md:min-h-[calc(100vh-200px)]">
          <TopPlay />
        </div>
      </div>
      
    </>
  );
};

export default Root;
