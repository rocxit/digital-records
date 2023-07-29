import { useState } from "react";
import FormNav from "../components/FormNav";

import "./styles.scss";

const Field = ({ label, id, onChange, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const Select = ({ label, id, children, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} {...rest}>
      {children}
    </select>
  </div>
);

const Textarea = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} {...rest} />
  </div>
);

const UserForm = () => {
  const [user, setUser] = useState({});
  console.log("tewt", user);

  return (
    <div className="mainDiv home">
      <div>
      <FormNav></FormNav>
      </div>
      <div className="container">
      <Field label="Reg. No." id="reg-no" name="reg-no" onChange= {(regNo) => {setUser((prev) => ({...prev, regNo}))}} />
      <Field label="Member Name" id="member-name" name="memberName" />
      <Field label="F/H/D/S of Name" id="gaurdian-name" name="gaurdianName" />
      <Field label="Add1" id="add1" name="add1" />
      <Field label="Add2" id="add2" name="add2" />
      <Field label="Add3" id="add3" name="add3" />
      <Field label="City" id="city" name="city" />
      <Field label="Pin Code" id="pin-code" name="pinCode" />
      <Field label="State" id="state" name="state" />
      <Field label="Country" id="country" name="country" />
      <Field label="Tel. No." id="tel-no" name="telNo" />
      <Field label="Mob. 1" id="mob1" name="mob1" />
      <Field label="Mob. 2" id="mob2" name="mob2" />
      <Field label="PAN no." id="pan-no" name="panNo" />
      <Field label="Occupation" id="occupation" name="occupation" />
      <Field label="Qualification" id="qualification" name="qualification" />
      <Field label="Date of Birth" id="dob" name="dob" type="date" />
      <Field label="M. Anniversary Date" id="anversary-date" name="anversaryDate" type="date" />
      <Field label="Diksha Place" id="diksha-place" name="dikshaPlace" />
      <Field label="Diksha Date" id="diksha-date" name="dikshaDate" type="date" />
      <Textarea label="Remarks" id="remarks" name="remarks" />
      <Field label="Date" id="date" name="date" type="date" />
      <input type="submit" />
      </div>
    </div>
  );
}

export default UserForm;
