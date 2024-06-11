import React, { useEffect, useState } from "react";
import Style from "./tab.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";

const Tab = () => {
  const [active, setActive] = useState("1");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);
  return (
    <div className={Style.tab}>
      <div className={Style.navbar}>
        <ul>
          {data.headerData?.Tab &&
            data.headerData.Tab.map((item) => {
              const isActive = active === String(item.id);
              return (
                <li
                  onClick={() => setActive(String(item.id))}
                  className={`${isActive ? Style.active : ""}`}
                >
                  {item.title}
                </li>
              );
            })}
        </ul>
      </div>
      <div className={Style.content}>
        {data.headerData?.Tab &&
          data.headerData.Tab.map((item, index) => {
            const isActive = active === String(item.id);
            return (
              <div className={`${Style.text} ${isActive ? Style.active : ""} `}>
                <span className={`${index === 1 ? Style.file : ""}`}>
                  <div className={`${Style.image}`}>
                    <img src={item.img} alt="" />
                  </div>
                  <p>{item.paragraph}</p>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tab;
