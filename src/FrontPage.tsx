import React from "react";

//Components
import Navbar from "./components/Navbar";
import ContentSlider from "./components/ContentSlider";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

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

      <Footer />
    </>
  );
};

export default FrontPage;
