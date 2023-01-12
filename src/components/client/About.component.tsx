import React, {useState} from 'react';

//Images
import frontdesk from '../../images/frontdesk.jpg';
import stars from '../../images/stars.png';

//Icons
import { AiFillSafetyCertificate, AiOutlineWifi } from "react-icons/ai";
import {RiServiceFill} from 'react-icons/ri';
import { FaBed } from "react-icons/fa";
import {ImAirplane} from "react-icons/im";

const About = () => {
    let [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
      if (
        window.innerWidth <= 405 ||
        (window.innerWidth >= 410 && window.innerWidth <= 600)
      )
        setWindowInnerWidth(window.innerWidth);
    });

  return (
    <section
      id="AboutUs"
      className="w-[86%] md:w-[96%] md:h-[500px] bg-[#EAEAEA] shadow-xl rounded-md grid md:flex m-7"
    >
      <img
        src={frontdesk}
        alt=""
        className="md:rounded-tl-md md:rounded-bl-md rounded-tl-md rounded-tr-md w-full md:w-[50%] h-[500px]"
      />
      <div className="grid justify-items-center">
        <h1 className="text-5xl"> About Us </h1>
        <img src={stars} alt="" />
        <p className="w-[80%] text-center">
          Located at Kirkos Sub-City • In front of Africa Union HQ, Addis Ababa
          <br /> We are located in the main gate of Africa union HQ, just a two
          minute walk{" "}
          <a
            className="text-blue-900 underline"
            href="https://www.google.com/maps/place/Sodere+Hotel+-+AU/@9.0028208,38.7425017,19z/data=!4m8!3m7!1s0x164b85ea930e6d93:0x9d675416a3941e31!5m2!4m1!1i2!8m2!3d9.0028386!4d38.7424067!5m1!1e4"
          >
            View in Maps
          </a>
          <br />
        </p>

        <div>
          <div className="flex justify-center">
            <div className="grid justify-items-center w-1/3 p-5">
              <FaBed color="#FFD500" size={65} />
              <p className="text-[11px]">38 Guest Rooms</p>
            </div>

            <div className="grid justify-items-center w-1/3 p-5">
              <AiFillSafetyCertificate
                color="#00B000 "
                size={windowInnerWidth <= 590 ? 35 : 65}
              />
              <p className="text-[11px]">
                Security & Safety • Our building is equipped with emergency
                exists and fire extinguishers
              </p>
            </div>

            <div className="grid justify-items-center w-1/3 p-5">
              <RiServiceFill
                color="#CB0000"
                size={windowInnerWidth <= 590 ? 35 : 65}
              />
              <p className="text-[11px]">
                High quality service and feeling secured physically due to our
                strategic location
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid justify-items-center w-1/3 p-5">
              <AiOutlineWifi
                color="indigo"
                size={windowInnerWidth <= 590 ? 35 : 50}
              />
              <p className="text-[11px]">High Speed WiFi Connection</p>
            </div>

            <div className="grid justify-items-center w-1/3 p-5">
              <ImAirplane
                color="grey"
                size={windowInnerWidth <= 590 ? 35 : 50}
              />
              <p className="text-[11px]">Shuttle Service from and to airport</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
