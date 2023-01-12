import React, { useState } from "react";
import submitCommentForm from "../../utils/submitCommentForm";

//Images
import logo from "../../images/Logo2.png";

//Icons
import { FaBullhorn } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { PuffLoader } from "react-spinners";
import { VscError } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  let [customerName, setCustomerName] = useState<string>("");
  let [customerEmail, setCustomerEmail] = useState<string>("");
  let [customerMessage, setCustomerMessage] = useState<string>("");
  let [submitState, setSubmitState] = useState(0);
  let [emailError, setEmailError] = useState("");

  let innerSubmitButtonComponent;

  if (submitState === 0) {
    innerSubmitButtonComponent = <h1>Send Message</h1>;
  } else if (submitState === 1) {
    innerSubmitButtonComponent = <PuffLoader size={30} className="ml-[50%]" />;
  } else if (submitState === 2) {
    innerSubmitButtonComponent = <TiTick className="ml-[50%]" />;
  } else {
    innerSubmitButtonComponent = <VscError className="ml-[50%]" />;
  }

  let [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    if (window.innerWidth === 300 || window.innerWidth === 310)
      setWindowInnerWidth(window.innerWidth);
  });

  return (
    <section className="w-full bg-[#252525] lg:flex lg:justify-between grid">
      <article className="lg:flex grid mx-10 justify-center">
        <article className="lg:w-2/3 grid">
          <img
            src={logo}
            alt="logo"
            className="relative mt-5 w-2/3 lg:left-[5%] left-[10%] sm:left-[20%]"
          />

          <div>
            <h1 className="text-4xl text-[#09d6be] my-5">
              Sodere Resort Hotel SC
            </h1>
            <p className="text-[#727272]">
              Whether you're staying a few days, a few weeks or longer, Sodere
              Resort Hotel gives you the opportunity to make the most of your
              time. Located at Kirkos Sub-City • In front of Africa Union HQ,
              Addis Ababa We are located in the main gate of Africa union HQ,
              just a two minute walk
            </p>
          </div>
        </article>

        <article className="w-full lg:w-1/3">
          <h1 className="text-3xl text-white my-3">Contact Us</h1>
          <div className="lg:grid md:flex grid gap-5">
            <div className="bg-[#363636] rounded-xl p-3 w-full grid justify-center justify-items-center">
              <FaBullhorn size={60} className="mr-4" color="#252525" />

              <div className="grid justify-items-center">
                <div className="my-3">
                  <p className="text-[#777777]">For Reservations</p>
                  <p className="text-[#777777]">+251115573594</p>
                </div>

                <div className="my-3">
                  <p className="text-[#777777]">Hotel Manager</p>
                  <p className="text-[#777777]">+251911508734</p>
                </div>

                <p className="text-[#777777] w-10 relative right-20">
                  info@sodereresorthotelau.com
                </p>
              </div>

              <div className="flex mt-3 gap-5">
                <a href="https://www.facebook.com/profile.php?id=100083357041873">
                  <BsFacebook size={35} color="#777777" />
                </a>

                <a href="https://www.google.com/maps/place/Sodere+Hotel+-+AU/@9.0028208,38.7425017,19z/data=!4m8!3m7!1s0x164b85ea930e6d93:0x9d675416a3941e31!5m2!4m1!1i2!8m2!3d9.0028386!4d38.7424067!5m1!1e4">
                  <HiLocationMarker size={40} color="#777777" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </article>

      <article className="grid justify-items-center lg:w-[300px] mr-7">
        <h1 className="text-3xl text-white my-3 lg:h-[0px]">Quick Link</h1>
        <div className="grid lg:ml-0 lg:gap-0 justify-items-center">
          <div className="lg:grid lg:gap-0 flex justify-items-center gap-[17%]">
            <a href="/" className="text-[#727272] my-5">
              Home
            </a>
            <a href="#AboutUs" className="text-[#727272] my-5 w-40 lg:w-full">
              About Us
            </a>
            <a href="#Services" className="text-[#727272] my-5">
              Services
            </a>
          </div>

          <div className="lg:grid lg:gap-0 flex justify-center justify-items-center gap-[17%]">
            <a href="#Rooms" className="text-[#727272] my-5">
              Rooms
            </a>

            <a href="https://github.com/DagimN" className="text-[#727272] my-5">
              Developer
            </a>
          </div>
        </div>
      </article>

      <article
        className={`bg-[#333333] lg:w-1/3 sm:w-full shadow-inner shadow-black`}
      >
        <h1 className="text-3xl text-[#FDBE34] my-3 mx-5">Any Comments?</h1>
        <form
          onInvalid={() => {
            setSubmitState(0);
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

            if (!emailRegex.test(customerEmail)) {
              setEmailError("This is not a valid email format!");
              setSubmitState(3);
            } else {
              setEmailError("");
              submitCommentForm(setSubmitState, {
                customerName,
                customerEmail,
                customerMessage,
              });
            }
          }}
          className="grid w-[95%]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="mx-5 rounded-md p-3 my-3"
            required
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="mx-5 rounded-md p-3 my-3"
            required
            onChange={(e) => {
              setCustomerEmail(e.target.value);
            }}
          />
          <h2 className="text-[#de4034] text-sm mx-5">{emailError}</h2>
          <textarea
            name="message"
            cols={windowInnerWidth >= 405 ? 45 : 30}
            rows={5}
            placeholder="Write Message"
            className="mx-5 rounded-md p-3 my-3 resize-none"
            required
            onChange={(e) => {
              setCustomerMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              setSubmitState(1);
            }}
            onMouseLeave={() => {
              if (submitState === 3 || submitState === 2) setSubmitState(0);
            }}
            className="bg-[#FDBE34] mx-5 rounded-md p-3"
          >
            {innerSubmitButtonComponent}
          </button>
        </form>
      </article>
    </section>
  );
};

export default Footer;
