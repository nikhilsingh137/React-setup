import React, { useEffect } from "react";
import Style from "./servicefilterdata.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";
import { useParams } from "react-router-dom";

const ServiceFilterData = () => {
  const { ServiceId } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  const filterData =
    data.headerData?.Tab &&
    data.headerData.Tab.filter((item) => item.id.toString() === ServiceId);
  console.log(filterData, "nikhil");
  return (
    <div className={Style.servicefilterdata}>
      {filterData &&
        filterData.map((item) => {
          return (
            <div className={Style.container}>
              <h2>{item.title}</h2>
              <p>{item.paragraph}</p>
              <img src={item.img} />
            </div>
          );
        })}
    </div>
  );
};

export default ServiceFilterData;
