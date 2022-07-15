import React, {useState} from "react";

//Images
import logo from "../images/Logo.png";

//Icons
import { FaBullhorn } from "react-icons/fa";
import {IoIosBookmarks} from "react-icons/io";

const Footer = () => {
  let [customerName, setCustomerName] = useState<string>('');
  let [customerEmail, setCustomerEmail] = useState<string>('');
  let [customerMessage, setCustomerMessage] = useState<string>('');
  let submitForm = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    let res = await fetch("http://localhost:5001/qa", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        name: customerName,
        email: customerEmail,
        message: customerMessage,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) console.log("success");
    else console.log("failure");

    //TODO: Add a GIF to notify of the status
    document.location.reload();
  };

  return (
    <section className="w-full h-[450px] bg-[#252525] flex justify-between">
      <article className="grid mx-10 w-2/3">
        <article className="h-[200px] flex">
          <img src={logo} alt="logo" className="h-full mt-5" />

          <div>
            <h1 className="text-4xl text-[#09d6be] my-5">
              Sodere Resort Hotel SC
            </h1>
            <p className="text-[#727272]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque eligendi veniam dolore rerum quis officia expedita
              neque voluptatem. Mollitia sit ipsam neque facilis quos harum nemo
              debitis aut labore deserunt.
            </p>
          </div>
        </article>
        <article>
          <h1 className="text-3xl text-white my-3">Contact Us</h1>
          <div className="flex gap-5">
            <div className="bg-[#363636] rounded-xl p-3 w-full flex justify-between">
              <div>
                <p className="text-[#727272]">Reservations</p>
                <p>+251221113400</p>
                <p>+251937868196</p>
              </div>

              <IoIosBookmarks size={60} className="mr-6 mt-1" color="#252525" />
            </div>

            <div className="bg-[#363636] rounded-xl p-3 w-full flex justify-between">
              <div>
                <p className="text-[#727272]">Marketing Office</p>
                <p>+251930107514</p>
              </div>

              <FaBullhorn size={60} className="mr-6" color="#252525" />
            </div>
          </div>
        </article>
      </article>

      <article className="grid justify-items-center place-content-start w-[250px]">
        <h1 className="text-3xl text-white my-3">Quick Link</h1>
        <a href="/" className="text-[#727272] my-5">
          Home
        </a>
        <a href="/" className="text-[#727272] my-5">
          About Us
        </a>
        <a href="/" className="text-[#727272] my-5">
          Services
        </a>
        <a href="/" className="text-[#727272] my-5">
          Rooms
        </a>

        <a
          href="https://www.google.com/maps/place/Sodere+Resort+Hotel/@8.404191,39.387584,13.95z/data=!4m8!3m7!1s0x164ad9f29d528e33:0x170cf8c5481ecf61!5m2!4m1!1i2!8m2!3d8.4016215!4d39.3934114"
          className="text-[#727272] my-5"
        >
          Location
        </a>
      </article>

      <article className="bg-[#333333] w-1/4 shadow-inner shadow-black">
        <h1 className="text-3xl text-[#FDBE34] my-3 mx-5">Any Comments?</h1>
        <form onSubmit={submitForm} className="grid">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="mx-5 rounded-md p-3 my-3"
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="mx-5 rounded-md p-3 my-3"
            onChange={(e) => {
              setCustomerEmail(e.target.value);
            }}
          />
          <textarea
            name="message"
            cols={30}
            rows={5}
            placeholder="Write Message"
            className="mx-5 rounded-md p-3 my-3 resize-none"
            onChange={(e) => {
              setCustomerMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-[#FDBE34] mx-5 rounded-md p-3"
          >
            Send Message
          </button>
        </form>
      </article>
    </section>
  );
};

export default Footer;
