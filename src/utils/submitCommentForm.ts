import { Dispatch, SetStateAction } from "react";
import fetchTimeout from "../utils/fetchTimeout";


export async function submitCommentForm(event: React.FormEvent<HTMLFormElement>, setSubmitState: Dispatch<SetStateAction<number>>,{customerName, customerEmail, customerMessage}:{customerName:string, customerEmail:string, customerMessage:string}) {
  event.preventDefault();
  //TODO: Validate values
  try {
    let res = await fetchTimeout("http://sodereresorthotelau.com/api/qa", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        name: customerName,
        email: customerEmail,
        message: customerMessage,
      }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Origin: "http://sodereresorthotelau.com",
      },
    });

    if (res.status === 200) {
      setSubmitState(2);
    } else {
      setSubmitState(3);
    }
  } catch (error) {
    setSubmitState(3);
    console.error(error);
  }
}
