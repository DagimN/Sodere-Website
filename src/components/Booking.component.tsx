import React, {useState} from 'react';

const Booking = () => {
  let [customerName, setCustomerName] = useState('');
  let [customerEmail, setCustomerEmail] = useState("");
  let [customerPhone, setCustomerPhone] = useState("");
  let [customerType, setCustomerType] = useState("");
  let [customerRooms, setCustomerRooms] = useState("");
  let [customerOther, setCustomerOther] = useState("");

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
    <section className="w-full bg-[#52BBCE] h-[370px]">
      <h1 className="text-4xl flex justify-center">BOOK NOW</h1>
      <form onSubmit={submitForm}>
        <div className="flex justify-between">
          <div className="ml-5 mt-3">
            <label htmlFor="name">
              <h2 className="text-sm my-2">Full Name</h2>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="p-2 w-[200%] rounded-md"
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
                className="p-2 w-[200%] rounded-md"
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }}
              />
            </label>

            <label htmlFor="phone">
              <h2 className="text-sm my-2">Telephone</h2>
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="p-2 w-[200%] rounded-md"
                onChange={(e) => {
                  setCustomerPhone(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="mt-3">
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
                className="p-2 w-[200%] rounded-md"
                onChange={(e) => {
                  setCustomerRooms(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="mr-5 mt-3">
            <label htmlFor="other">
              <h2 className="text-sm my-2">Additional Requirements</h2>
              <textarea
                name="other"
                cols={50}
                rows={8}
                placeholder="Anything else you need?"
                className="resize-none p-2 rounded-md"
                onChange={(e) => {
                  setCustomerOther(e.target.value);
                }}
              ></textarea>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="ml-[45.5%] bg-green-700 p-3 rounded-lg text-white"
        >
          Make Reservation
        </button>
      </form>
    </section>
  );
  
}

export default Booking;
