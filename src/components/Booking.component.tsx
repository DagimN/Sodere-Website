import React, {useState} from 'react';

const Booking = () => {
  let [customerName, setCustomerName] = useState('');
  let [customerEmail, setCustomerEmail] = useState("");
  let [customerPhone, setCustomerPhone] = useState("");
  let [customerType, setCustomerType] = useState("");
  let [customerRooms, setCustomerRooms] = useState("");
  let [customerOther, setCustomerOther] = useState("");

  let telephoneInput = (
    <>
      <h2 className="text-sm my-2">Telephone</h2>
      <input
        type="text"
        placeholder="Phone Number"
        name="phone"
        className="p-2 w-[95%] rounded-md"
        onChange={(e) => {
          setCustomerPhone(e.target.value);
        }}
      />
    </>
  );

  let othSubmitInput = (
    <>
      <div className="mt-3 md:mr-5 ml-6">
        <label htmlFor="other">
          <h2 className="text-sm my-2">Additional Requirements</h2>
          <textarea
            name="other"
            cols={48}
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
        type="submit"
        className="mb-5 w-1/2 bg-green-700 p-3 rounded-lg text-white ml-[22.5%] inline lg:hidden"
      >
        Make Reservation
      </button>
    </>
  );
  let submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let res = await fetch("http://localhost:5001/book", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
        type: customerType,
        rooms: customerRooms,
        other: customerOther,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) console.log("success");
    else console.log("failure");

    //TODO: Add a GIF to notify of the status
    document.location.reload();
  };

  return (
    <section className="w-full bg-[#52BBCE]">
      <h1 className="text-4xl flex justify-center pt-3">BOOK NOW</h1>
      <form onSubmit={submitForm}>
        <div className="md:flex md:justify-between grid justify-center">
          <div className="ml-5 mt-3 lg:w-1/3 w-full">
            <label htmlFor="name">
              <h2 className="text-sm my-2">Full Name</h2>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="p-2 w-[95%] rounded-md mr-5"
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
              />
            </label>

            <label htmlFor="email">
              <h2 className="text-sm my-2">Email</h2>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="p-2 w-[95%] rounded-md"
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }}
              />
            </label>

            <label htmlFor="phone" className="md:hidden lg:inline">
              {telephoneInput}
            </label>
          </div>

          <div className="mt-3 mx-5 w-full lg:w-1/3">
            <label htmlFor="phone" className="hidden md:inline lg:hidden">
              {telephoneInput}
            </label>

            <div className="flex gap-20 md:gap-10 w-full sm:justify-center">
              <label htmlFor="type">
                <h2 className="text-sm my-2">Room Type</h2>
                <select
                  name="type"
                  className="rounded-md p-1"
                  onChange={(e) => {
                    setCustomerType(e.target.value);
                  }}
                >
                  <option value="1">Room1</option>
                  <option value="2">Room2</option>
                  <option value="3">Room3</option>
                  <option value="4">Room4</option>
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

        <div className="grid justify-center lg:hidden">{othSubmitInput}</div>
        <button
          type="submit"
          className="mb-5 w-1/4 bg-green-700 p-3 rounded-lg text-white ml-[40%] lg:inline justify-center hidden"
        >
          Make Reservation
        </button>
      </form>
    </section>
  );
  
}

export default Booking;
