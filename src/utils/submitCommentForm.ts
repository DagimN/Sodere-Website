import { Dispatch, SetStateAction } from "react";
import fetchTimeout from "../utils/fetchTimeout";

export default async function submitCommentForm(
  setSubmitState: Dispatch<SetStateAction<number>>,
  {
    customerName,
    customerEmail,
    customerMessage,
  }: { customerName: string; customerEmail: string; customerMessage: string }
) {
  try {
    let res = await fetchTimeout("api/qa", {
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
        Origin: "sodereresorthotelau.com",
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
