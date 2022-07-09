import React, { useState, useEffect } from 'react';

//Icons

const Rooms = () => {
    let rooms = ["Room1", "Room2", "Room3", "Room1", "Room2", "Room3"];
    let [isIndexClicked, setIndexClickBool] = useState(false);
    let [roomIndex, setRoomIndex] = useState(0);
    
    useEffect(() => {
        //TODO: Fix the bug
        console.log(`Before: ${roomIndex}`)
      setTimeout(() => {
        if(!isIndexClicked){
            console.log(`After: ${(roomIndex + 1) % rooms.length}`);
            setRoomIndex((roomIndex + 1) % rooms.length);
        }
        else
            setIndexClickBool(false);
        
      }, 5000);
    }, [roomIndex, rooms.length, isIndexClicked]);

  return (
    <section className="w-[97%] h-[400px] m-5 rounded-xl bg-blue-900 flex">
      <article className="grid w-2/3 h-[300px]">
        <h1 className="m-5 text-5xl">Room Type Name</h1>

        <div className="grid grid-cols-2 ml-24">
          <p>Type 1</p>
          <p>Type 2</p>
          <p>Type 3</p>
          <p>Type 4</p>
        </div>
      </article>

      <article className="w-1/3 h-full bg-red-500 rounded-tr-xl rounded-br-xl grid justify-center">
        <img src="" alt="" />

        <div className="flex gap-3 z-10 relative top-[85%]">
          {rooms.map((value, index) => {
            if (index === roomIndex)
              return (
                <div
                  key={index}
                  className="bg-white rounded-full w-4 h-4"
                ></div>
              );
            else
              return (
                <div
                  key={index}
                  className="bg-transparent border-white border-2 rounded-full w-4 h-4 hover:cursor-pointer"
                  onClick={() => {
                    setRoomIndex(index);
                    setIndexClickBool(true);
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
