import React from "react";

//Images
import logo from "../images/Logo.png";

//Components
import RegionInfo from "./RegionInfo.component";

//Icons
import { AiFillHome } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="w-full h-[120px] bg-white py-1">
      <a href="/" className="inline-flex">
        <img
          src={logo}
          alt="logo"
          className="h-[75px] w-[100px] ml-4 mt-4 mb-2"
        />
      </a>

      <div className="relative top-[30px] right-5 flex float-right">
        <div className="relative bottom-7">
          <a href="/" className="mx-10">
            <AiFillHome color="#52BBCE" size={25} className="relative top-7" />
            <div className="bg-[#52BBCE] h-[5px] w-7 relative bottom-3 right-[1px]"></div>
          </a>
          <a href="/" className="mx-5 hidden md:inline">
            Rooms
          </a>
          <a href="/" className="mx-5 hidden md:inline">
            Services
          </a>
          <a href="/" className="mx-5 hidden md:inline">
            Gallery
          </a>
          <a href="/" className="mx-5 hidden md:inline">
            More
          </a>
        </div>

        <RegionInfo visibility="hidden" />

        <button className="md:hidden mx-3 group">
          <GoThreeBars size={20} />

          <div className="grid md:hidden invisible group-focus:visible absolute z-20 w-[250%] h-[400%] bg-white border-2 border-[#52BBCE] p-3 right-[10%] top-7 rounded-xl">
            <RegionInfo visibility="grid" />

            <a href="/" className="mx-5">
              Rooms
            </a>
            <a href="/" className="mx-5">
              Services
            </a>
            <a href="/" className="mx-5">
              Gallery
            </a>
            <a href="/" className="mx-5">
              More
            </a>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
