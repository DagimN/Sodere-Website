import React from "react";

//Components
import Navbar from "../components/client/Navbar.component";
import ContentSlider from "../components/client/ContentSlider.component";
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

      <section
        id="AboutUs"
        className="w-full h-[500px] bg-[#D9D9DA] grid justify-items-center place-content-start sm:pt-[150px] pt-[50px] sm:h-[600px]"
      >
        <h1 className="text-5xl"> About Us </h1>
        <p className="w-[80%] mt-10 text-center">
          • 3.5 – Star Hotel <br /> 
          • located at kirkos sub city, in front of
          Africa union HQ, Addis Ababa.<br /> 
          • 38 Guest Rooms. Security & Safety<br /> 
          • We are located in the main gate of Africa union HQ, 2 Minutes’ walk <br />
          • High quality service and feeling secured physically due to our
          strategic location • our building equipped with Emergency exist and
          Fire extinguishers
        </p>
      </section>

      <Rooms />

      <Services />

      <Reviews />

      <Footer />
    </>
  );
};

export default FrontPage;
