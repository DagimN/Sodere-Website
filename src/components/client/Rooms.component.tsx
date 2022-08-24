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
    "h-[350px] sm:h-[400px] w-[90%] sm:w-1/3 rounded-xl sm:rounded-tr-xl rounded-br-xl z-0 absolute right-7 transition-all duration-300 opacity-50 sm:opacity-100";
  const SLIDERTRANSITION0 =
    "h-[350px] sm:h-[400px] w-[90%] sm:w-1/3 rounded-xl sm:rounded-tr-xl rounded-br-xl z-0 absolute right-7 transition-all duration-300 opacity-0";
  let rooms = [
    {
      name: "Standard",
      bed: "King Sized Bed",
      price: ["1700.00 ETB", "1900.00 ETB"],
      duration: "Per Day",
      people1: "Single Occupancy",
      people2: "Double Occupancy",
      image: standard,
    },
    {
      name: "Deluxe",
      bed: "King Sized Bed",
      price: ["2200.00 ETB", "2400.00 ETB"],
      duration: "Per Day",
      people1: "Single Occupancy",
      people2: "Double Occupancy",
      image: conference,
    },
    {
      name: "Twins",
      bed: "King Sized Bed",
      price: ["2700.00 ETB", "2900.00 ETB"],
      duration: "Per Day",
      people1: "Single Occupancy",
      people2: "Double Occupancy",
      image: twins,
    },
    {
      name: "Suite",
      bed: "King Sized Bed",
      price: ["3200.00 ETB", "3400.00 ETB"],
      duration: "Per Day",
      people1: "Single Occupancy",
      people2: "Double Occupancy",
      image: standard,
    },
    {
      name: "Royal Suite",
      bed: "King Sized Bed",
      price: ["4200.00 ETB", "4400.00 ETB"],
      duration: "Per Day",
      people1: "Single Occupancy",
      people2: "Double Occupancy",
      image: twins,
    },
    {
      name: "Conference",
      bed: "",
      price: "4000.00 ETB",
      duration: "Per Day",
      people: "For 10 to 20",
      image: conference,
    },
  ];
  let [roomIndex, setRoomIndex] = useState({
    index: 0,
    attribute: SLIDERTRANSITION100,
    active: true,
  });
  let [priceIndex, setPriceIndex] = useState<number>(0);
  let [tempIndex, setTempIndex] = useState(-1);
  let [timeoutIds, addTimeoutId] = useState<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (tempIndex !== -1)
      timeoutIds.forEach((value) => {
        clearTimeout(value);
      });

    if (tempIndex === roomIndex.index && tempIndex !== -1)
      setTimeout(() => {
        setTempIndex(-1);
      }, 15000);
      
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
    if(tempIndex === -1){
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
    }
    
  }, [roomIndex, rooms.length, timeoutIds, tempIndex]);

  return (
    <section className="w-[90%] sm:w-[95%] h-[350px] sm:h-[400px] m-5 rounded-xl bg-black sm:bg-[#45303C] flex">
      <article className="grid w-2/3 h-[300px] absolute z-10">
        <h1 className="m-5 text-5xl text-[#EB9A3E]">
          {rooms[roomIndex.index].name ?? ""}
        </h1>

        <div className="grid grid-cols-2 ml-5 sm:ml-24 sm:gap-0 gap-x-20">
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
            {roomIndex.index !== 5 ? (
              <select
                name=""
                id=""
                className="rounded-lg h-12 bg-[#EB9A3E] shadow-md shadow-[#EB9A3E] text-[#45303C]"
                onFocus={(e)=>{
                  let focusedItemIcon = document.getElementById('focus');

                  focusedItemIcon?.focus()
                }}
                onChange={(e) =>
                  setPriceIndex(
                    e.currentTarget.value === rooms[roomIndex.index].people1
                      ? 0
                      : 1
                  )
                }
              >
                <option
                  value={rooms[roomIndex.index].people1}
                  onChange={() => {
                    if (roomIndex.index !== 5) setPriceIndex(0);
                  }}
                >
                  {rooms[roomIndex.index].people1}
                </option>
                <option
                  value={rooms[roomIndex.index].people2}
                  onChange={() => {
                    if (roomIndex.index !== 5) setPriceIndex(1);
                  }}
                >
                  {rooms[roomIndex.index].people2}
                </option>
              </select>
            ) : (
              <p className="text-[#DAE2E0] mt-2">
                {rooms[roomIndex.index].people}
              </p>
            )}
          </div>

          <div className="flex gap-5">
            <IoMdPricetags size={35} color="#EB9A3E" />
            <p className="text-[#DAE2E0] mt-2">
              {roomIndex.index !== 5
                ? rooms[roomIndex.index].price[priceIndex]
                : rooms[roomIndex.index].price}
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

      <article className="w-1/3 h-full bg-transparent rounded-tr-xl rounded-br-xl justify-center">
        <img
          src={rooms[roomIndex.index].image}
          alt=""
          className={roomIndex.attribute}
        />

        <div className="flex gap-3 z-10 relative top-[90%] justify-center left-[110%] sm:left-[200%]">
          {rooms.map((value, index) => {
            if (index === roomIndex.index)
              return (
                <button
                id="focus"
                  key={index}
                  className="bg-white rounded-full w-4 h-4 z-20 focus:w-8 focus:border-white focus:border-2 focus:bg-[#EB9A3E] transition-all duration-300"
                ></button>
              );
            else
              return (
                <button
                  key={index}
                  className="bg-transparent border-white border-2 rounded-full w-4 h-4 hover:cursor-pointer"
                  onClick={() => {
                    setTempIndex(index);
                  }}
                ></button>
              );
          })}
        </div>
      </article>
    </section>
  );
};

export default Rooms;
