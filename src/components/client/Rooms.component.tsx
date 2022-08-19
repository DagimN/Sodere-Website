import React, { useState, useEffect } from "react";

//Images
import twins from "../../images/twins.jpg";
import standard from "../../images/standard.jpg";
import conference from "../../images/conference.jpg";

//Icons
import { FaBed } from "react-icons/fa";
import { IoMdPeople, IoMdPricetags, IoMdTime } from "react-icons/io";

const Rooms = () => {
  const SLIDERTRANSITION100 =
    "h-[350px] sm:h-[400px] w-1/3 rounded-tr-xl rounded-br-xl z-0 absolute transition-all duration-300 opacity-100";
  const SLIDERTRANSITION0 =
    "h-[350px] sm:h-[400px] w-1/3 rounded-tr-xl rounded-br-xl z-0 absolute transition-all duration-300 opacity-0";
  let rooms = [
    {
      name: "Standard",
      bed: "King Sized Bed",
      price: "1500.00 ETB",
      duration: "Per Day",
      people: "Per Person",
      image: standard,
    },
    {
      name: "Deluxe",
      bed: "King Sized Bed",
      price: "2000.00 ETB",
      duration: "Per Day",
      people: "Per Person",
      image: conference,
    },
    {
      name: "Twins",
      bed: "King Sized Bed",
      price: "2500.00 ETB",
      duration: "Per Day",
      people: "Per Person",
      image: twins,
    },
    {
      name: "Suite",
      bed: "King Sized Bed",
      price: "3000.00 ETB",
      duration: "Per Day",
      people: "Per Person",
      image: standard,
    },
    {
      name: "Royal Suite",
      bed: "King Sized Bed",
      price: "4000.00 ETB",
      duration: "Per Day",
      people: "Per Person",
      image: twins,
    },
    {
      name: "Conference",
      bed: "",
      price: "4000.00 ETB",
      duration: "Per Day",
      people: "From 10 to 20",
      image: conference,
    },
  ];
  let [roomIndex, setRoomIndex] = useState({
    index: 0,
    attribute: SLIDERTRANSITION100,
    active: true,
  });
  let [tempIndex, setTempIndex] = useState(-1);
  let [timeoutIds, addTimeoutId] = useState<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (tempIndex !== -1)
      timeoutIds.forEach((value) => {
        clearTimeout(value);
      });

    if (tempIndex === roomIndex.index && tempIndex !== -1) setTempIndex(-1);

    if (tempIndex !== -1) {
      setTimeout(() => {
        setRoomIndex({
          index: tempIndex,
          attribute: SLIDERTRANSITION100,
          active: true,
        });
      });
    }
  }, [tempIndex, roomIndex.index, timeoutIds]);

  useEffect(() => {
    if (roomIndex.active) {
      let id = setTimeout(() => {
        setRoomIndex({
          index: roomIndex.index, //(roomIndex.index + 1) % rooms.length,
          attribute: SLIDERTRANSITION0,
          active: false,
        });
      }, 2500);
      timeoutIds.push(id);
      addTimeoutId(timeoutIds);
    } else {
      let id = setTimeout(() => {
        setRoomIndex({
          index: (roomIndex.index + 1) % rooms.length,
          attribute: SLIDERTRANSITION100,
          active: true,
        });
      }, 300);
      timeoutIds.push(id);
      addTimeoutId(timeoutIds);
    }
  }, [roomIndex, rooms.length, timeoutIds]);

  return (
    <section className="w-[90%] sm:w-[95%] h-[350px] sm:h-[400px] m-5 rounded-xl bg-[#45303C] flex">
      <article className="grid w-2/3 h-[300px]">
        <h1 className="m-5 text-5xl text-[#EB9A3E]">
          {rooms[roomIndex.index].name ?? ""}
        </h1>

        <div className="grid grid-cols-2 ml-5 sm:ml-24">
          {rooms[roomIndex.index].bed !== "" ? (
            <div className="flex gap-5">
              <FaBed size={35} color="#EB9A3E" />
              <p className="text-[#DAE2E0] mt-2">
                {rooms[roomIndex.index].bed}
              </p>
            </div>
          ) : null}

          <div className="flex gap-5">
            <IoMdPeople size={35} color="#EB9A3E" />
            <p className="text-[#DAE2E0] mt-2">
              {rooms[roomIndex.index].people}
            </p>
          </div>

          <div className="flex gap-5">
            <IoMdPricetags size={35} color="#EB9A3E" />
            <p className="text-[#DAE2E0] mt-2">
              {rooms[roomIndex.index].price}
            </p>
          </div>

          <div className="flex gap-5">
            <IoMdTime size={35} color="#EB9A3E" />
            <p className="text-[#DAE2E0] mt-2">
              {rooms[roomIndex.index].duration}
            </p>
          </div>
        </div>
      </article>

      <article className="w-1/3 h-full bg-white rounded-tr-xl rounded-br-xl justify-center">
        <img
          src={rooms[roomIndex.index].image}
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
                    setTempIndex(index);
                  }}
                ></div>
              );
          })}
        </div>
      </article>
    </section>
  );
};

export default Rooms;
