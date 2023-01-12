import { Dispatch, SetStateAction } from "react";
import fetchTimeout from './fetchTimeout';

export default async function submitBookingForm(
  setSubmitState: Dispatch<SetStateAction<number>>,
  {
    customerName,
    customerEmail,
    customerPhone,
    arrivalDate,
    leavingDate,
    customerType,
    customerRooms,
    customerOther,
  }: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    arrivalDate: string,
    leavingDate: string,
    customerType: string;
    customerRooms: string;
    customerOther: string;
  }
) {
  try {
    let res = await fetchTimeout("api/book", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
        arrival: arrivalDate,
        departure: leavingDate,
        type: customerType,
        rooms: customerRooms,
        other: customerOther,
      }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Origin: "sodereresorthotelau.com",
      },
    });
    
    if (res.status === 200) setSubmitState(2);
    else setSubmitState(3);
  } catch (error) {
    console.error(error);
    setSubmitState(3);
  }
}
