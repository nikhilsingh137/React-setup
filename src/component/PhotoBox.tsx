import React from "react";
import Style from "./photobox.module.scss";
import PhImg from "../img/photo1.jpg";

const PhotoBox = () => {
  return (
    <div className={Style.photobox}>
      <img src={PhImg} alt="" />
    </div>
  );
};

export default PhotoBox;
