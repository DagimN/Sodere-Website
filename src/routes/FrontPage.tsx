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

const FrontPage = () => {
  
  return (
    <>
      <Navbar />

      <ContentSlider />

      <Booking />

      <section className="w-full h-[500px] bg-[#D9D9DA] grid justify-items-center place-content-start sm:pt-[150px] pt-[50px] sm:h-[600px]">
        <h1 className="text-5xl"> About Us </h1>
        <p className="w-[80%] mt-10 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          delectus blanditiis explicabo similique dolorum repudiandae ipsa modi
          excepturi laborum deleniti nemo assumenda eligendi a nostrum fugit
          dolores rerum, aliquam vel. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sed optio magnam cum, ducimus exercitationem minus
          quia reiciendis architecto iure, ipsum impedit inventore eos sunt
          facere, amet non adipisci culpa delectus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis in totam ducimus culpa ea,
          vero inventore cupiditate nisi velit obcaecati, debitis voluptatibus
          autem quia repudiandae aperiam mollitia impedit soluta. Excepturi.
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
