import React, { useState } from "react";
import  submitBookingForm  from "../../utils/submitBookingForm";
import validateForm from "../../utils/validateForm";

//Icons
import { TiTick } from "react-icons/ti";
import { PuffLoader } from "react-spinners";
import { VscError } from "react-icons/vsc";


const Booking = () => {
  let [customerName, setCustomerName] = useState("");
  let [customerEmail, setCustomerEmail] = useState("");
  let [customerPhone, setCustomerPhone] = useState("");
  let [arrivalDate, setArrivalDate] = useState(
    `${new Date().getFullYear().toString()}-${
      new Date().getMonth() / 10 > 1
        ? new Date().getMonth() + 1
        : "0" + (new Date().getMonth() + 1)
    }-${new Date().getDate().toString()}`
  );
  let [leavingDate, setLeavingDate] = useState("");
  let [customerType, setCustomerType] = useState("Standard");
  let [customerRooms, setCustomerRooms] = useState("1");
  let [customerOther, setCustomerOther] = useState("");
  let [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    leavingDateError: ""
  });
  let [submitState, setSubmitState] = useState(0);
  let innerSubmitButtonComponent;

  let [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    if (
      window.innerWidth <= 405 ||
      (window.innerWidth >= 410 && window.innerWidth <= 600)
    )
      setWindowInnerWidth(window.innerWidth);
  });

  if (submitState === 0) {
    innerSubmitButtonComponent = <h1>Make Reservation</h1>;
  } else if (submitState === 1) {
    innerSubmitButtonComponent = <PuffLoader size={30} />;
  } else if (submitState === 2) {
    innerSubmitButtonComponent = <TiTick className="ml-[50%]" />;
  } else {
    innerSubmitButtonComponent = <VscError className="ml-[50%]" />;
  }

  let telephoneInput = (
    <>
      <h2 className="text-md my-2">Telephone</h2>
      <input
        type="text"
        placeholder="Phone Number"
        name="phone"
        className="p-2 w-[95%] rounded-md"
        onChange={(e) => {
          setCustomerPhone(e.target.value);
        }}
      />
      <h2 className="text-[#de4034] text-sm">{errors.phoneError}</h2>
    </>
  );

  let othSubmitInput = (
    <>
      <div className="mt-3 mr-5 ml-6">
        <label htmlFor="other">
          <h2 className="text-md my-2">Additional Requirements</h2>
          <textarea
            name="other"
            cols={windowInnerWidth >= 405 ? 45 : 30}
            rows={8}
            placeholder="Anything else you need?"
            className="resize-none p-2 rounded-md"
            onChange={(e) => {
              setCustomerOther(e.target.value);
            }}
          />
        </label>
      </div>

      <button
        onClick={() => {
          setSubmitState(1);
        }}
        onMouseLeave={() => {
          if (submitState === 3 || submitState === 2) setSubmitState(0);
        }}
        type="submit"
        className="mb-5 w-1/2 bg-green-700 p-3 rounded-lg text-white ml-[22.5%] inline lg:hidden"
      >
        {innerSubmitButtonComponent}
      </button>
    </>
  );

  return (
    <section className="w-full bg-[#52BBCE]">
      <h1 className="text-4xl flex justify-center pt-3">BOOK NOW</h1>
      <form
        onSubmit={(e) => {
          let errorsFound = validateForm({
            customerName,
            customerEmail,
            customerPhone,
            arrivalDate,
            leavingDate,
          });

          e.preventDefault();
          setErrors(errorsFound);

          if (
            errorsFound.emailError === "" &&
            errorsFound.phoneError === "" &&
            errorsFound.nameError === "" &&
            errorsFound.leavingDateError === ""
          )
            submitBookingForm(setSubmitState, {
              customerName,
              customerEmail,
              customerPhone,
              arrivalDate,
              leavingDate,
              customerType,
              customerRooms,
              customerOther,
            });
          else setSubmitState(3);
        }}
      >
        <div className="md:flex md:justify-between grid justify-center">
          <div className="ml-2 sm:ml-5 mt-3 lg:w-1/3 w-[95%]">
            <label htmlFor="name">
              <h2 className="text-md my-2">Full Name</h2>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="p-2 w-[95%] rounded-md mr-5"
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
              />
              <h2 className="text-[#de4034] text-sm">{errors.nameError}</h2>
            </label>

            <label htmlFor="email">
              <h2 className="text-md my-2">Email</h2>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="p-2 w-[95%] rounded-md"
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }}
              />
              <h2 className="text-[#de4034] text-sm">{errors.emailError}</h2>
            </label>

            <label htmlFor="phone" className="md:hidden lg:inline">
              {telephoneInput}
            </label>
          </div>

          <div className="mt-3 mx-2 sm:mx-5 w-[95%] lg:w-1/3">
            <label htmlFor="phone" className="hidden md:inline lg:hidden">
              {telephoneInput}
            </label>

            <div className="flex gap-20 md:gap-10 w-[95%] sm:justify-center">
              <label htmlFor="type">
                <h2 className="text-sm my-2">Room Type</h2>
                <select
                  name="type"
                  className="rounded-md p-1"
                  defaultValue="Standard"
                  onChange={(e) => {
                    setCustomerType(e.target.value);
                  }}
                >
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Twins">Twins</option>
                  <option value="Suite">Suite</option>
                  <option value="Royal Suite">Royal Suite</option>
                  <option value="Conference">Conference</option>
                </select>
              </label>

              <label htmlFor="rooms">
                <h2 className="text-sm my-2">Number of rooms</h2>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  name="rooms"
                  className="p-2 w-full rounded-md"
                  onChange={(e) => {
                    setCustomerRooms(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>

          <div className="lg:grid lg:justify-center hidden">
            {othSubmitInput}
          </div>
        </div>

        <div className="flex justify-center lg:justify-start gap-10 mx-2 sm:mx-5">
          <label htmlFor="startdate" className="grid my-2">
            Arrival
            <input
              type="date"
              name="startdate"
              onChange={(e) => setArrivalDate(e.target.value)}
              defaultValue={`${new Date().getFullYear().toString()}-${
                new Date().getMonth() / 10 > 1
                  ? new Date().getMonth() + 1
                  : "0" + (new Date().getMonth() + 1)
              }-${new Date().getDate().toString()}`}
              min={`${new Date().getFullYear().toString()}-${
                new Date().getMonth() / 10 > 1
                  ? new Date().getMonth() + 1
                  : "0" + (new Date().getMonth() + 1)
              }-${new Date().getDate().toString()}`}
              className="rounded-md p-2"
            />
          </label>

          <label htmlFor="enddate" className="grid my-2">
            Departure
            <input
              type="date"
              name="enddate"
              onChange={(e) => setLeavingDate(e.target.value)}
              min={`${new Date().getFullYear().toString()}-${
                new Date().getMonth() / 10 > 1
                  ? new Date().getMonth() + 1
                  : "0" + (new Date().getMonth() + 1)
              }-${new Date().getDate().toString()}`}
              id=""
              className="rounded-md p-2"
            />
            <h2 className="text-[#de4034] text-sm">
              {errors.leavingDateError}
            </h2>
          </label>
        </div>

        <div className="grid justify-center lg:hidden">{othSubmitInput}</div>
        <button
          onClick={() => {
            setSubmitState(1);
          }}
          onMouseLeave={() => {
            if (submitState === 3 || submitState === 2) setSubmitState(0);
          }}
          type="submit"
          className="mb-5 w-1/4 bg-green-700 p-3 rounded-lg text-white ml-[40%] lg:inline justify-center hidden"
        >
          {innerSubmitButtonComponent}
        </button>
      </form>
    </section>
  );
};

export default Booking;
