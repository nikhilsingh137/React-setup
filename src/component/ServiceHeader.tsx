import React from "react";
import Style from "./serviceheader.module.scss";

const ServiceHeader = () => {
  return (
    <div className={Style.serviceheader}>
      <div className={Style.serviceBackground}>
        <h2>Service Coding Related Data</h2>
      </div>
    </div>
  );
};

export default ServiceHeader;
