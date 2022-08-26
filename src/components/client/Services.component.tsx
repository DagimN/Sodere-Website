import React from "react";

//Components
import ServiceHeroContainer from "./ServiceHeroContainer.component";

//Images
import frontdesk from "../../images/frontdesk.jpg";
import restaurant from "../../images/restaurant.jpg";

const Services = () => {
  return (
    <section id="Services">
      <h1 className="flex place-content-center text-3xl my-5">Services</h1>
      <article className="grid grid-cols-2 gap-y-4 gap-x-2">
        <ServiceHeroContainer
          {...{
            service: {
              name: "Guest Room",
              description: "Service Description",
            },
            image: frontdesk,
            isLeft: true
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Restaurant",
              description: "Service Description",
            },
            image: restaurant,
            isLeft: false
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Bar",
              description: "Service Description",
            },
            image: restaurant,
            isLeft: true
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Conference Room",
              description: "Service Description",
            },
            image: frontdesk,
            isLeft: false
          }}
        />
      </article>
    </section>
  );
};

export default Services;
