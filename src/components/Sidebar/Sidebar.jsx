import React from "react";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { logo } from "../../assets";
import NavLinks from "./NavLinks";
import { useGetAllPopularSongsQuery } from "../../redux/services/Shazam";

const Sidebar = () => {
  const { isFetching } = useGetAllPopularSongsQuery();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`hidden flex-col lg:min-w-[250px] md:w-[1100px] py-10 px-4 bg-[#191624] flex-grow items-start ${
          isFetching ? "hidden" : "md:flex"
        }`}
      >
        <img src={logo} alt="logo" className="w-20 mx-auto" />

        <NavLinks />
      </div>

      <div className="absolute md:hidden top-4 right-0 flex justify-between w-full px-4">
      <img src={logo} width={70} className="inline" alt="Logo"/>
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-8 h-8 text-white animate-slideup"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-8 h-8 text-white animate-slideup"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
        

      </div>
{/* mobile sidebar */}

      <div
        className={`fixed flex justify-center items-center flex-col top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10
         to-[#483d8b] backdrop-blur-lg z-50 md:hidden transition-all duration-[350ms] p-6 ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
      
        <img src={logo} alt="logo" className="w-20" />

        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
