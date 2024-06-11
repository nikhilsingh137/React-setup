import React, { useState } from "react";
import Style from "./formbox.module.scss";

const FormBox = () => {
  const [data, setData] = useState();
  const handleData = (e: any) => {
    e.preventDefault();
    window.location.href = `/${data}`;
  };
  const handle = (e: any) => {
    setData(e.target.value);
  };
  return (
    <div className={Style.formbox}>
      <form onSubmit={handleData}>
        <div className={Style.form}>
          <input
            type="text"
            placeholder="Search"
            value={data}
            onChange={handle}
          />
        </div>
      </form>
    </div>
  );
};

export default FormBox;
