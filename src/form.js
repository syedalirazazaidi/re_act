import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handlechange = (e) => {
    setValues((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <input
        id="first-name"
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handlechange}
        value={values.firstName}
      />

      <input
        id="last-name"
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={values.lastName}
        onChange={handlechange}
      />

      <input
        id="email"
        type="text"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handlechange}
      />
    </div>
  );
};

export default Form;
