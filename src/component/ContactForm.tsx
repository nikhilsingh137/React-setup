import React, { useState } from "react";
import Style from "./contactform.module.scss";

interface IPost {
  name: string;
  email: string;
  data: string;
  message: string;
}

const ContactForm = () => {
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    data: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [submmit, setSubmmit] = useState(true);

  const handleValue = (e: any) => {
    const newData: IPost = { ...detail, [e.target.id]: e.target.value };
    setDetail(newData);
  };
  const handleData = (e: any) => {
    e.preventDefault();
    if (detail.name === "") {
      setError("This field is required");
    } else {
      setError("");
    }
    if (detail.email === "") {
      setError1("This field is required");
    } else {
      setError1("");
    }
    if (detail.data === "") {
      setError2("This field is required");
    } else {
      setError2("");
    }
    if (detail.message === "") {
      setError3("This field is required");
    } else {
      setError3("");
    }
    if (
      detail.name === "" ||
      detail.email === "" ||
      detail.data === "" ||
      detail.message === ""
    ) {
      setSubmmit(true);
    } else {
      setSubmmit(false);
    }

    const objects: RequestInit = {
      method: "POST",
      body: JSON.stringify({
        name: detail.name,
        email: detail.email,
        data: detail.data,
        message: detail.message,
      }),
    };
    fetch("http://localhost:9000/post", objects)
      .then((res) => res.json())
      .then((value) => console.log(value));
  };
  return (
    <div className={Style.divide}>
      <div className={Style.content}>
        <div className={Style.data}>
          <h2>Our Location</h2>
          <p>
            608, Synergy Court, Kach Pada Road, Malad(West), Mumbai 400067.
            India
          </p>
        </div>
        <div className={Style.data}>
          <h2>Quick Contact</h2>
          <h3>Email Here</h3>
          <p>darpandalal@creative-mantra.com</p>
        </div>
        <div className={Style.data}>
          <h2>Office Hour</h2>
          <h3>Mon – Fri: 09 am to 07 pm</h3>
          <p>Sat – Sun: Off Day</p>
        </div>
      </div>
      {submmit ? (
        <div className={Style.contactform}>
          <h2>Get In Touch!</h2>
          <form onSubmit={handleData}>
            <div className={Style.form}>
              <label>Your name</label>
              <br />
              <input
                type="text"
                placeholder=""
                id="name"
                value={detail.name}
                onChange={handleValue}
              />
              <br />
              <span className={Style.error}>{error}</span>
            </div>
            <div className={Style.form}>
              <label>Your Email</label> <br />
              <input
                type="text"
                placeholder=""
                id="email"
                value={detail.email}
                onChange={handleValue}
              />
              <br />
              <span className={Style.error}>{error1}</span>
            </div>
            <div className={Style.form}>
              <label>Subject</label> <br />
              <input
                type="text"
                id="data"
                placeholder=""
                value={detail.data}
                onChange={handleValue}
              />
              <br />
              <span className={Style.error}>{error2}</span>
            </div>
            <div className={Style.message}>
              <label>Your message (optional)</label> <br />
              <textarea
                title="text"
                placeholder=""
                id="message"
                value={detail.message}
                onChange={handleValue}
              />
              <br />
              <span className={Style.error}>{error3}</span>
            </div>
            <button>Submit</button>
          </form>
        </div>
      ) : (
        <p>Your Data is Submitted</p>
      )}
    </div>
  );
};

export default ContactForm;
