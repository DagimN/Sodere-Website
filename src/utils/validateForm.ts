// eslint-disable-next-line
export default function ({
  customerName,
  customerEmail,
  customerPhone,
  arrivalDate,
  leavingDate
}: {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  arrivalDate: string
  leavingDate: string
}) {
  const errors = { nameError: "", emailError: "", phoneError: "" , leavingDateError: ""};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneRegex = /^(0|\+251)([0-9]{9})$/i;

  if (!customerName) errors["nameError"] = "Username is required!";

  if (!customerEmail) errors["emailError"] = "Email is required!";
  else if (!emailRegex.test(customerEmail))
    errors["emailError"] = "This is not a valid email format!";

  if (!customerPhone) errors["phoneError"] = "Telephone is required!";
  else if (!phoneRegex.test(customerPhone))
    errors["phoneError"] = "This is not a valid email format!";

  if(!leavingDate) errors["leavingDateError"] = "Leaving Date is required!";
  else if(Date.parse(leavingDate) < Date.parse(arrivalDate)) errors["leavingDateError"] = "Arrival Date should preceed departure date";
  
  return errors;
}
