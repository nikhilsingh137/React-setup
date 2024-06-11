import React from "react";
import Style from "./banner.module.scss";
import BnImg from "../img/coding1.jpg";
import BnImg1 from "../img/coding2.jpeg";
import BnImg2 from "../img/coding3.jpeg";

const Banner = () => {
  return (
    <div className={Style.banner}>
      <div className={Style.image}>
        <img src={BnImg} alt="" />
        <div className={Style.content}>
          <h2>Coding</h2>
        </div>
      </div>
      <div className={Style.image}>
        <img src={BnImg1} alt="" />
        <div className={Style.content}>
          <h2>Learning</h2>
        </div>
      </div>
      <div className={Style.image}>
        <img src={BnImg2} alt="" />
        <div className={Style.content}>
          <h2>Detail</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
