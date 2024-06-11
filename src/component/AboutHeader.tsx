import React from "react";
import Style from "./aboutHeader.module.scss";

const AboutHeader = () => {
  return (
    <div className={Style.aboutHeader}>
      <video muted autoPlay loop>
        <source src="https://assets.codeavengers.com/file/cloud/videos/jr-loop-2.mp4" />
      </video>
    </div>
  );
};

export default AboutHeader;
