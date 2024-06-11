import React, { useEffect } from "react";
import Style from "./leftData.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";
import StickyBox from "react-sticky-box";

const LeftData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  return (
    <>
      <div className={Style.left}>
        <StickyBox>
          <div className={Style.leftData}>
            <ul>
              {data.headerData?.SideData &&
                data.headerData.SideData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={index === item.id ? Style.active : ""}
                    >
                      <a href={item.listingUrl}>
                        <img src={item.img} alt="" />
                        {item.title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </StickyBox>
      </div>
    </>
  );
};

export default LeftData;
