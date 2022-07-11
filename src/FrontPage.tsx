import React from "react";

//Components
import Navbar from "./components/Navbar.component";
import ContentSlider from "./components/ContentSlider.component";
import Rooms from "./components/Rooms.component";
import Services from "./components/Services.component";
import Reviews from "./components/Reviews.component";
import Booking from "./components/Booking.component";
import Footer from "./components/Footer.component";

//Icons 

const FrontPage = () => {
  return (
    <>
      <Navbar />

      <ContentSlider />

      <Booking />

      <section className="w-full h-[600px] bg-[#D9D9DA] grid justify-items-center place-content-start pt-[150px]">
        <h1 className="text-5xl"> About Us </h1>
        <p className="w-[70%] mt-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus blanditiis explicabo similique dolorum repudiandae ipsa modi 
          excepturi laborum deleniti nemo assumenda eligendi a nostrum fugit dolores rerum, aliquam vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sed optio magnam cum, ducimus exercitationem minus quia reiciendis architecto iure, ipsum impedit inventore eos sunt facere, amet non adipisci culpa 
          delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in totam ducimus culpa ea, vero inventore cupiditate nisi velit obcaecati, 
          debitis voluptatibus autem quia repudiandae aperiam mollitia impedit soluta. Excepturi.</p>
      </section>

      <Rooms />

      <Services />

      <Reviews />

      <Footer />
    </>
  );
};

export default FrontPage;
