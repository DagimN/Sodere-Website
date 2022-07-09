import React, { useEffect, useState } from "react";

//Images
import image1 from "../images/2.jpg";
import image2 from "../images/3.jpg";
import image3 from "../images/8.jpg";

const ContentSlider = () => {
  let contentImages = [image1, image2, image3];
  let [contentIndex, setContentIndex] = useState(0);
  let [isIndexClicked, setIndexClickBool] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!isIndexClicked)
        setContentIndex((contentIndex + 1) % contentImages.length);
      else setIndexClickBool(false);
    }, 5000);
  }, [contentIndex, contentImages.length, isIndexClicked]);

  let titles = [
    "Swimming Pools",
    "Natural Spring",
    "Accomodations",
    "Delights",
  ];
  let descriptions = [
    "Indoor and Outdoor",
    "Hot and Cozy",
    "Vast rooms and suites",
    "Bar/Restaurant and Others",
  ];

  return (
    <main className="h-[550px]">
      <img
        src={contentImages[contentIndex]}
        alt=""
        className="h-[550px] w-full z-0 transition duration-300"
      />
      <aside className="bg-black/30 w-full h-36 z-10 relative bottom-44 flex justify-around">
        <div className="grid place-items-center">
          <h1 className="text-white">{titles[0]}</h1>
          <p className="text-white relative bottom-10">{descriptions[0]}</p>
        </div>

        <div className="grid place-items-center">
          <h1 className="text-white">{titles[1]}</h1>
          <p className="text-white relative bottom-10">{descriptions[1]}</p>
        </div>

        <div className="grid place-items-center">
          <h1 className="text-white">{titles[2]}</h1>
          <p className="text-white relative bottom-10">{descriptions[2]}</p>
        </div>

        <div className="grid place-items-center">
          <h1 className="text-white">{titles[3]}</h1>
          <p className="text-white relative bottom-10">{descriptions[3]}</p>
        </div>
      </aside>

      <div className="relative bottom-[168px] left-1/2 flex gap-3 w-[10%]">
        {contentImages.map((value, index) => {
          if (index === contentIndex)
            return (
              <div key={index} className="bg-white rounded-full w-4 h-4"></div>
            );
          else
            return (
              <div
                key={index}
                className="bg-transparent border-white border-2 rounded-full w-4 h-4 hover:cursor-pointer"
                onClick={() => {
                  console.log(index);
                  setContentIndex(index);
                }}
              ></div>
            );
        })}
      </div>
    </main>
  );
};

export default ContentSlider;
