import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";
import Style from "./content.module.scss";

const Content = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);
  return (
    <div className={Style.content}>
      {data.headerData?.Content &&
        data.headerData.Content.map((item) => {
          return (
            <div className={Style.image}>
              <img src={item.img} alt="" />
              <div className={Style.overlay}>
                <div className={Style.text}>
                  <h2>{item.title}</h2>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Content;
