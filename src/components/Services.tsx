import React from "react";

//Images
import image1 from '../images/2.jpg';
import image2 from '../images/3.jpg';

const Services = () => {
  return (
    <section>
      <h1 className="flex place-content-center text-3xl my-5">Services</h1>
      <article className="grid grid-cols-2 gap-y-4 gap-x-2">
        <div className="bg-black grid h-[400px] justify-items-center group cursor-pointer">
          <img
            src={image1}
            alt=""
            className="h-[400px] w-full relative z-0 opacity-60"
          />
          <h1 className="z-10 relative bottom-[250px] text-2xl text-white transition-all duration-300 ease-in group-hover:text-4xl">
            Service Name
          </h1>
          <p className="z-10 relative bottom-[230px] text-md text-white transition-all duration-300 ease-in group-hover:text-2xl">
            Service Description
          </p>
        </div>

        <div className="bg-black grid h-[400px] justify-items-center group cursor-pointer">
          <img
            src={image2}
            alt=""
            className="h-[400px] w-full relative z-0 opacity-60"
          />
          <h1 className="z-10 relative bottom-[250px] text-2xl text-white transition-all duration-300 ease-in group-hover:text-4xl">
            Service Name
          </h1>
          <p className="z-10 relative bottom-[230px] text-md text-white transition-all duration-300 ease-in group-hover:text-2xl">
            Service Description
          </p>
        </div>

        <div className="bg-black grid h-[400px] justify-items-center group cursor-pointer">
          <img
            src={image2}
            alt=""
            className="h-[400px] w-full relative z-0 opacity-60"
          />
          <h1 className="z-10 relative bottom-[250px] text-2xl text-white transition-all duration-300 ease-in group-hover:text-4xl">
            Service Name
          </h1>
          <p className="z-10 relative bottom-[230px] text-md text-white transition-all duration-300 ease-in group-hover:text-2xl">
            Service Description
          </p>
        </div>

        <div className="bg-black grid h-[400px] justify-items-center group cursor-pointer">
          <img
            src={image1}
            alt=""
            className="h-[400px] w-full relative z-0 opacity-60"
          />
          <h1 className="z-10 relative bottom-[250px] text-2xl text-white transition-all duration-300 ease-in group-hover:text-4xl">
            Service Name
          </h1>
          <p className="z-10 relative bottom-[230px] text-md text-white transition-all duration-300 ease-in group-hover:text-2xl">
            Service Description
          </p>
        </div>
      </article>
    </section>
  );
};

export default Services;
