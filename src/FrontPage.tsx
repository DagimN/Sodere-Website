import React from "react";

//Components
import Navbar from "./components/Navbar";
import ContentSlider from "./components/ContentSlider";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";

//Icons 

const FrontPage = () => {
  return (
    <>
      <Navbar />

      <ContentSlider />

      <Booking />

      <section className="w-full h-[600px] bg-[#D9D9DA]"></section>

      <Rooms />

      <Services />

      <Reviews />

      <a href="https://www.google.com/maps/place/Sodere+Resort+Hotel/@8.404191,39.387584,13.95z/data=!4m8!3m7!1s0x164ad9f29d528e33:0x170cf8c5481ecf61!5m2!4m1!1i2!8m2!3d8.4016215!4d39.3934114">
        Location
      </a>
    </>
  );
};

export default FrontPage;
