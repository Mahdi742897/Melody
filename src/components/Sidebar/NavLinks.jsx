import React from "react";
import { links } from "../../assets/constants/constants";
import { NavLink } from "react-router-dom";
const NavLinks = ({handleClick}) => {
  return (
    <ul className="mt-16">
      {links.map((link, index) => (
        <li className="my-7 text-gray-400 font-medium" key={link.name}>
          <NavLink
            to={link.to}
            className="hover:text-cyan-400 transition duration-300 flex items-center justify-start"
            onClick={() => handleClick && handleClick()}
          >
            <link.icon className="w-6 h-6 mr-2" />
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
