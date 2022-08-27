import React from "react";

//Components
import Navbar from "../components/client/Navbar.component";
import ContentSlider from "../components/client/ContentSlider.component";
import About from "../components/client/About.component";
import Rooms from "../components/client/Rooms.component";
import Services from "../components/client/Services.component";
import Reviews from "../components/client/Reviews.component";
import Booking from "../components/client/Booking.component";
import Footer from "../components/client/Footer.component";

//Icons 
//TODO: Add a prompt for admin login
const FrontPage = () => {
  
  return (
    <>
      <Navbar />

      <ContentSlider />

      <Booking />

      <About />
      
      <Rooms />

      <Services />

      <Reviews />

      <Footer />
    </>
  );
};

export default FrontPage;
