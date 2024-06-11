import React, { useEffect } from "react";
import Style from "./aboutbanner.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchAbout } from "../redux/Slice";

const AboutBanner = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);
  return (
    <div className={Style.banner}>
      <div className={Style.bannerText}>
        {data.aboutItem &&
          data.aboutItem.map((item) => {
            return (
              <div className={Style.file}>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AboutBanner;
