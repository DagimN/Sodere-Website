import { Dispatch, SetStateAction } from "react";
import fetchTimeout from './fetchTimeout';

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
  //TODO: Validate values
  //TODO: Add timeout for submission (test)
  try {
    let res = await fetchTimeout("http://sodereresorthotelau.com/api/book", {
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
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Origin: "http://sodereresorthotelau.com",
      },
    });
    
    if (res.status === 200) setSubmitState(2);
    else setSubmitState(3);
  } catch (error) {
    console.error(error);
    setSubmitState(3);
  }
}
