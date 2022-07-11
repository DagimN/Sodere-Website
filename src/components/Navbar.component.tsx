import React from 'react';

//Images
import logo from "../images/Logo.png";

//Components
import RegionInfo from './RegionInfo.component';

//Icons
import {AiFillHome} from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="w-full h-[120px] bg-white py-1 flex gap-[45%]">
      <a href="/">
        <img src={logo} alt="logo" className="h-[75px] ml-4 mt-4 mb-2" />
      </a>

      <div className="relative top-[30px] flex">
        <div className="relative bottom-5">
          <a href="/" className="mx-10">
            <AiFillHome color="#52BBCE" size={25} className="relative top-6" />
            <div className="bg-[#52BBCE] h-[5px] w-7 relative bottom-3 right-[1px]"></div>
          </a>
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

        <RegionInfo />
      </div>
    </nav>
  );
}

export default Navbar;
