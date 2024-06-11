import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";
import Style from "./formfilterdata.module.scss";

const FormFilterData = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  const filterData =
    data.headerData?.Content &&
    data.headerData.Content.filter((item) => item.title === userId);
  console.log(filterData, "hello");
  return (
    <div className={Style.content}>
      {filterData &&
        filterData.map((item) => {
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

export default FormFilterData;
