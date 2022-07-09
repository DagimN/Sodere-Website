import React from 'react';

//Images
import logo from "../images/Logo.png";

//Components
import RegionInfo from './RegionInfo';

const Navbar = () => {
  return (
    <nav className="w-full h-[120px] bg-white py-1 flex gap-[45%]">
      <a href="/">
        <img src={logo} alt="logo" className="h-[75px] ml-4 mt-4 mb-2" />
      </a>

      <div className="relative top-[30px] flex">
        <div className='relative top-[20px]'>
          <a href="/" className="mx-5">
            Home
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
