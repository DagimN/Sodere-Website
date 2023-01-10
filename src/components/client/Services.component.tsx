import React from "react";

//Components
import ServiceHeroContainer from "./ServiceHeroContainer.component";

//Images
import guestRoom from "../../images/guest_room.jpg";
import restaurant from "../../images/restaurant.jpg";
import bar from "../../images/bar.jpg";
import conference from "../../images/conference.jpg";

const Services = () => {
  return (
    <section id="Services">
      <h1 className="flex place-content-center text-3xl my-5">Services</h1>
      {/* //TODO: Add content elements for each services */}
      <article className="grid grid-cols-2 gap-y-4 gap-x-2">
        <ServiceHeroContainer
          {...{
            service: {
              name: "Guest Room",
              description: "Comfortable rooms to suite your needs",
              content: {}
            },
            image: guestRoom,
            isLeft: true
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Restaurant",
              description: "A delicious range of cuisines provided by out top chefs",
              content: {}
            },
            image: restaurant,
            isLeft: false
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Bar",
              description: "Take a chill and relax with a fitting drink in our bar ",
              content: {}
            },
            image: bar,
            isLeft: true
          }}
        />

        <ServiceHeroContainer
          {...{
            service: {
              name: "Conference Room",
              description: "Capable of accomodating vast amount of people",
              content: {}
            },
            image: conference,
            isLeft: false
          }}
        />
      </article>
    </section>
  );
};

export default Services;
