import { url } from "inspector";
import React, { useEffect, useState } from "react";

//Images
import image1 from "../images/2.jpg";
import image2 from "../images/3.jpg";
import image3 from "../images/8.jpg";
//BUG: Improve the fade transition and fix the switcher bug
const ContentSlider = () => {
  const SLIDERTRANSITION100 =
    "h-[550px] w-full z-0 transition-all duration-300 opacity-100";
  const SLIDERTRANSITION0 =
    "h-[550px] w-full z-0 transition-all duration-300 opacity-0";
  let contentImages = [image1, image2, image3];
  let [contentIndex, setContentIndex] = useState({
    index: 0,
    attribute: SLIDERTRANSITION100,
    active: true,
  });
  let [isIndexClicked, setIndexClickBool] = useState(false);

  useEffect(() => {
    if (contentIndex.active)
      setTimeout(() => {
        console.log("in 0: " + contentIndex.index);
        setContentIndex({
          index: contentIndex.index,
          attribute: SLIDERTRANSITION0,
          active: false,
        });
      }, 10000);
    else
      setTimeout(() => {
        console.log("in 100: " + contentIndex.index);
        if (!isIndexClicked)
          setContentIndex({
            index: (contentIndex.index + 1) % contentImages.length,
            attribute: SLIDERTRANSITION100,
            active: true,
          });
        else setIndexClickBool(false);
      }, 300);
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
        src={contentImages[contentIndex.index]}
        alt=""
        className={contentIndex.attribute}
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
          if (index === contentIndex.index)
            return (
              <div key={index} className="bg-white rounded-full w-4 h-4"></div>
            );
          else
            return (
              <div
                key={index}
                className="bg-transparent border-white border-2 rounded-full w-4 h-4 hover:cursor-pointer"
                onClick={() => {
                  setIndexClickBool(true);
                  setContentIndex({
                    index: index - 1,
                    attribute: SLIDERTRANSITION0,
                    active: false,
                  });
                }}
              ></div>
            );
        })}
      </div>
    </main>
  );
};

export default ContentSlider;
