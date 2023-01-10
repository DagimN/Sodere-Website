import React,{useState} from "react";

//Images
import logo from "../../images/Logo2.png";

//Components
import RegionInfo from "./RegionInfo.component";

//Icons
import { AiFillHome } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  let [popUpVisibility, setPopUpVisibility] = useState('invisible');
  let activateNavBarPopUp = (value:string) => {
    setPopUpVisibility(value);
  } 

  return (
    <nav className="w-full h-[120px] bg-white py-1">
      <a href="/" className="inline-flex">
        <img
          src={logo}
          alt="logo"
          className="h-[90px] w-[170px] ml-4 mt-2 mb-2"
        />
      </a>

      <div className="relative top-[30px] right-5 flex float-right">
        <div className="relative bottom-7">
          <a href="/" className="mx-10">
            <AiFillHome color="#52BBCE" size={25} className="relative top-7" />
            <div className="bg-[#52BBCE] h-[5px] w-7 relative bottom-3 right-[1px]"></div>
          </a>
          <a href="#Rooms" className="mx-5 hidden md:inline">
            Rooms
          </a>
          <a href="#Services" className="mx-5 hidden md:inline">
            Services
          </a>
          <a href="/" className="mx-5 hidden md:inline">
            Gallery
          </a>
          <a href="/" className="mx-5 hidden md:inline">
            More
          </a>
        </div>

        <RegionInfo visibility="hidden" activatePopup={activateNavBarPopUp} />

        <button className="md:hidden mx-3" id="navigationPanelButton" onClick={()=>activateNavBarPopUp('visible')}>
          <GoThreeBars size={20} />

          <div
            onMouseLeave={()=>activateNavBarPopUp('invisible')}
            className={`grid md:hidden ${popUpVisibility} cursor-default absolute z-20 w-[250%] h-[400%] bg-white border-2 border-[#52BBCE] p-3 right-[10%] top-7 rounded-xl`}
          >
            <RegionInfo visibility="grid" activatePopup={activateNavBarPopUp}/>

            <a href="#Rooms" className="mx-5">
              Rooms
            </a>
            <a href="#Services" className="mx-5">
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
