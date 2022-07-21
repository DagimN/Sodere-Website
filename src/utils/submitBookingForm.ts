import { Dispatch, SetStateAction } from "react";

export async function submitBookingForm(
  event: React.FormEvent<HTMLFormElement>,
  setSubmitState: Dispatch<SetStateAction<number>>,
  {
    customerName,
    customerEmail,
    customerPhone,
    customerType,
    customerRooms,
    customerOther,
  }: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerType: string;
    customerRooms: string;
    customerOther: string;
  }
) {
  event.preventDefault();

  try {
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

    if (res.status === 200) {
      setSubmitState(2);
      console.log("success");
    } else {
      setSubmitState(3);
      console.log("failure");
    }
  } catch (error) {
    console.error(error);
    setSubmitState(3);
  } 
}
