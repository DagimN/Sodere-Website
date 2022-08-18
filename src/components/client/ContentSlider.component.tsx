import React, { useEffect, useState } from "react";

//Images
import image1 from "../../images/2.jpg";
import image2 from "../../images/3.jpg";
import image3 from "../../images/8.jpg";

const ContentSlider = () => {
  const SLIDERTRANSITION100 =
    "h-[400px] sm:h-[550px] w-full z-0 transition-all duration-300 opacity-100";
  const SLIDERTRANSITION0 =
    "h-[400px] sm:h-[550px] w-full z-0 transition-all duration-300 opacity-0";
  let contentImages = [image1, image2, image3];
  let [contentIndex, setContentIndex] = useState({
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

    if (tempIndex === contentIndex.index && tempIndex !== -1) setTempIndex(-1);

    if (tempIndex !== -1) {
      setTimeout(() => {
        setContentIndex({
          index: tempIndex,
          attribute: SLIDERTRANSITION100,
          active: true,
        });
      });
    }
  }, [tempIndex, contentIndex.index, timeoutIds]);

  useEffect(() => {
    if (contentIndex.active) {
      let id = setTimeout(() => {
        setContentIndex({
          index: contentIndex.index,
          attribute: SLIDERTRANSITION0,
          active: false,
        });
      }, 10000);
      timeoutIds.push(id);
      addTimeoutId(timeoutIds);
    } else {
      let id = setTimeout(() => {
        setContentIndex({
          index: (contentIndex.index + 1) % contentImages.length,
          attribute: SLIDERTRANSITION100,
          active: true,
        });
      }, 300);
      timeoutIds.push(id);
      addTimeoutId(timeoutIds);
    }
  }, [contentIndex, contentImages.length, timeoutIds]);

  // let titles = [
  //   "Swimming Pools",
  //   "Natural Spring",
  //   "Accomodations",
  //   "Delights",
  // ];
  // let descriptions = [
  //   "Indoor and Outdoor",
  //   "Hot and Cozy",
  //   "Vast rooms and suites",
  //   "Bar/Restaurant and Others",
  // ];

  return (
    <main className="h-[400px] sm:h-[550px]">
      <img
        src={contentImages[contentIndex.index]}
        alt=""
        className={contentIndex.attribute}
      />
{/*       
      <aside className="bg-black/30 w-full h-36 z-10 relative bottom-44 sm:flex grid grid-cols-2 justify-around">
        <div className="grid place-items-center">
          <h1 className="text-white">{titles[0]}</h1>
          <p className="text-white relative sm:bottom-10">{descriptions[0]}</p>
        </div>

        <div className="grid place-items-center">
          <h1 className="text-white">{titles[1]}</h1>
          <p className="text-white relative sm:bottom-10">{descriptions[1]}</p>
        </div>

        <div className="grid place-items-center mt-4 sm:mt-0">
          <h1 className="text-white">{titles[2]}</h1>
          <p className="text-white relative sm:bottom-10">{descriptions[2]}</p>
        </div>

        <div className="grid place-items-center mt-4 sm:mt-0">
          <h1 className="text-white">{titles[3]}</h1>
          <p className="text-white relative sm:bottom-10">{descriptions[3]}</p>
        </div>
      </aside>
 */}
      <div className="absolute left-1/2 flex gap-3 top-[495px] sm:top-[645px] z-20">
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
                  setTempIndex(index);
                }}
              ></div>
            );
        })}
      </div>
    </main>
  );
};

export default ContentSlider;
