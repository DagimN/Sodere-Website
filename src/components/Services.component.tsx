import React from "react";

//Components
import ServiceHeroContainer from "./ServiceHeroContainer.component";

//Images
import image1 from '../images/2.jpg';
import image2 from '../images/3.jpg';

const Services = () => {
  return (
    <section>
      <h1 className="flex place-content-center text-3xl my-5">Services</h1>
      <article className="grid grid-cols-2 gap-y-4 gap-x-2">
        <ServiceHeroContainer
          {...{
            service: {
              name: "Service Title",
              description: "Service Description",
            },
            image: image1,
            isLeft: true
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Service Title",
              description: "Service Description",
            },
            image: image2,
            isLeft: false
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Service Title",
              description: "Service Description",
            },
            image: image2,
            isLeft: true
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Service Title",
              description: "Service Description",
            },
            image: image1,
            isLeft: false
          }}
        />
      </article>
    </section>
  );
};

export default Services;
