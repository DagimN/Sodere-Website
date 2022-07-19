import React, { useState, useEffect } from 'react';

//Images
import room1 from '../images/1.jpg';
import room2 from "../images/5.jpg";
import room3 from "../images/6.jpg";
import room4 from "../images/7.jpg";
import room5 from "../images/9.jpg";

//Icons
import { FaBed } from 'react-icons/fa';
import { IoMdPeople, IoMdPricetags, IoMdTime } from 'react-icons/io';

const Rooms = () => {
  const SLIDERTRANSITION100 =
    "h-[350px] sm:h-[400px] w-1/3 rounded-tr-xl rounded-br-xl z-0 absolute transition-all duration-300 opacity-100";
  const SLIDERTRANSITION0 =
    "h-[350px] sm:h-[400px] w-1/3 rounded-tr-xl rounded-br-xl z-0 absolute transition-all duration-300 opacity-0";
    let rooms = [room1, room2, room3, room4, room5];
    let [isIndexClicked, setIndexClickBool] = useState(false);
    let [roomIndex, setRoomIndex] = useState({
      index: 0,
      attribute: SLIDERTRANSITION100,
      active: true,
    });
    
    useEffect(() => {
        if (roomIndex.active)
          setTimeout(() => {
            setRoomIndex({
              ...roomIndex,
              attribute: SLIDERTRANSITION0,
              active: false,
            });
          }, 2500);
        else
          setTimeout(() => {
            if (!isIndexClicked)
              setRoomIndex({
                index: (roomIndex.index + 1) % rooms.length,
                attribute: SLIDERTRANSITION100,
                active: true,
              });
            else setIndexClickBool(false);
          }, 1300);
    }, [roomIndex, rooms.length, isIndexClicked]);

  return (
    <section className="w-[90%] sm:w-[95%] h-[350px] sm:h-[400px] m-5 rounded-xl bg-[#45303C] flex">
      <article className="grid w-2/3 h-[300px]">
        <h1 className="m-5 text-5xl text-[#EB9A3E]">Room Type Name</h1>

        <div className="grid grid-cols-2 ml-5 sm:ml-24">
          <div className="flex gap-5">
            <FaBed size={35} color="#EB9A3E" />
            <p className="text-[#DAE2E0] mt-2">King Sized Bed</p>
          </div>

          <div className="flex gap-5">
            <IoMdPeople size={35} color="#EB9A3E" />
            <p className="text-[#DAE2E0] mt-2">For 2 people</p>
          </div>

          <div className="flex gap-5">
            <IoMdPricetags size={35} color="#EB9A3E" />
            <p className="text-[#DAE2E0] mt-2">5000.00 ETB</p>
          </div>

          <div className="flex gap-5">
            <IoMdTime size={35} color="#EB9A3E" />
            <p className="text-[#DAE2E0] mt-2">Per Day</p>
          </div>
        </div>
      </article>

      <article className="w-1/3 h-full bg-white rounded-tr-xl rounded-br-xl justify-center">
        <img
          src={rooms[roomIndex.index]}
          alt=""
          className={roomIndex.attribute}
        />

        <div className="flex gap-3 z-10 relative top-[90%] justify-center">
          {rooms.map((value, index) => {
            if (index === roomIndex.index)
              return (
                <div
                  key={index}
                  className="bg-white rounded-full w-4 h-4 z-20"
                ></div>
              );
            else
              return (
                <div
                  key={index}
                  className="bg-transparent border-white border-2 rounded-full w-4 h-4 hover:cursor-pointer"
                  onClick={() => {
                    setIndexClickBool(true);
                    setRoomIndex({
                      index: index - 1,
                      attribute: SLIDERTRANSITION0,
                      active: false,
                    });
                  }}
                ></div>
              );
          })}
        </div>
      </article>
    </section>
  );
}

export default Rooms;
