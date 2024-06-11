import React, { useState } from "react";
import Style from "./formData.module.scss";

const FormData = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassord] = useState("");
  const [confirmpassword, setConfirmPassord] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");

  const handledata = (e: any) => {
    e.preventDefault();
    if (name === "") {
      setError("Please Enter Name");
    } else {
      setError("");
    }
    if (lastname === "") {
      setError1("Please Enter Last Name");
    } else {
      setError1("");
    }
    if (email === "") {
      setError2("Please Enter Email");
    } else {
      setError2("");
    }
    if (number === "") {
      setError3("Please Enter Number");
    } else {
      setError3("");
    }
    if (password === "") {
      setError4("Please Enter Password");
    } else {
      setError4("");
    }
    if (confirmpassword === "") {
      setError5("Please Enter confirm Password");
    } else if (password !== confirmpassword) {
      setError5("Please Enter Same Passord");
    } else {
      setError5("");
    }
  };
  return (
    <div className={Style.formdata}>
      <div className={Style.form}>
        <form onSubmit={handledata}>
          <div className={Style.formbar}>
            <div className={Style.divide}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e: any) => setName(e.currentTarget.value)}
              />
              <span className={Style.error}>{error}</span>
            </div>
            <div className={Style.divide}>
              <input
                type="text"
                placeholder="LastName"
                value={lastname}
                onChange={(e: any) => setLastName(e.currentTarget.value)}
              />
              <span className={Style.error}>{error1}</span>
            </div>
          </div>
          <div className={Style.formbar}>
            <div className={Style.divide}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: any) => setEmail(e.currentTarget.value)}
              />
              <span className={Style.error}>{error2}</span>
            </div>
            <div className={Style.divide}>
              <input
                type="text"
                placeholder="Number"
                value={number}
                onChange={(e: any) => setNumber(e.currentTarget.value)}
              />
              <span className={Style.error}>{error3}</span>
            </div>
          </div>
          <div className={Style.formbar}>
            <div className={Style.divide}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: any) => setPassord(e.currentTarget.value)}
              />
              <span className={Style.error}>{error4}</span>
            </div>
            <div className={Style.divide}>
              <input
                type="password"
                placeholder="Confirm Passsword"
                value={confirmpassword}
                onChange={(e: any) => setConfirmPassord(e.currentTarget.value)}
              />
              <span className={Style.error}>{error5}</span>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
