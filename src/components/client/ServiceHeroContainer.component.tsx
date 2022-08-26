import React from 'react';

type ServiceType = {
  name: string,
  description: string
};

const ServiceHeroContainer = ({service, image, isLeft}:{service:ServiceType, image:string, isLeft:boolean}) => {
    let containerAttribute =
      "bg-black grid h-[300px] sm:h-[400px] justify-items-center object-cover group transition-all duration-[1000ms]";
    let focusedDivAttribute = isLeft
      ? "group-focus:visible invisible group-focus:bg-white bg-transparent absolute left-[1px] h-[300px] sm:h-[400px] w-1/2 transition-all duration-[1000ms] cursor-pointer group-focus:rounded-tr-lg group-focus:rounded-br-lg group-focus:z-30 group-focus:w-[95%] group-focus:shadow-5xl group-focus:shadow-black/80 group-focus:shadow-inner"
      : "group-focus:visible invisible group-focus:bg-white bg-transparent absolute  right-[1px] h-[300px] sm:h-[400px] w-1/2 transition-all duration-[1000ms] cursor-pointer group-focus:rounded-tr-lg group-focus:rounded-br-lg group-focus:z-30 group-focus:w-[95%] group-focus:shadow-5xl group-focus:shadow-black/80 group-focus:shadow-inner";

    let focusedDiv = isLeft ? (
      <div>
        <img
          src={image}
          alt=""
          className="h-[300px] sm:h-[400px] w-[99%] z-0 object-cover opacity-60 transition-all ease-in-out duration-[1000ms] absolute group-focus:w-2/3 group-focus:opacity-100 float-left"
        />

        <div className="float-right">
          <form action="">
            <input type="button" value="Close" />
          </form>
        </div>
      </div>
    ) : (
      <div className="flex relative right-[33%]">
        <div className="invisible group-focus:visible relative group-focus:left-[33.3%]">
          <form action="">
            <input type="button" value="Close" />
          </form>
        </div>

        <img
          src={image}
          alt=""
          className="h-[300px] sm:h-[400px] w-[99%] z-0 object-cover opacity-60 transition-all ease-in-out duration-[1000ms] absolute group-focus:w-2/3 group-focus:opacity-100 left-[33.7%] group-focus:left-[66.6%] rounded-tr-lg rounded-br-lg"
        />
      </div>
    );
  return (
    <>
      <button className={containerAttribute}>
        <div className="group-focus:invisible visible w-full">
          <img
            src={image}
            alt=""
            className="h-[300px] object-cover w-full sm:h-[400px] relative z-0 opacity-60"
          />
          <h1 className="z-10 relative bottom-[250px] text-2xl text-white transition-all duration-300 ease-in group-hover:text-4xl">
            {service.name}
          </h1>
          <p className="z-10 relative bottom-[230px] text-md text-white transition-all duration-300 ease-in group-hover:text-2xl">
            {service.description}
          </p>
        </div>

        <div className={focusedDivAttribute}>{focusedDiv}</div>
      </button>
    </>
  );
}

export default ServiceHeroContainer;
