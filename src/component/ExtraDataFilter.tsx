import React, { useEffect } from "react";
import Style from "./extradataFilter.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";
import { useParams } from "react-router-dom";

const ExtraDataFilter = () => {
  const { "*": shortUrl } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);
  console.log(shortUrl);

  const filterData =
    data.headerData?.HtmlData &&
    data.headerData.HtmlData.filter((item) => item.shortUrl === `/${shortUrl}`);

  console.log(shortUrl);

  console.log(filterData, "hello");
  return (
    <div className={Style.extradataFilter}>
      {filterData &&
        filterData.map((item) => {
          return (
            <div className={Style.content}>
              <h2>{item.title}</h2>
              <p>{item.paragraph}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ExtraDataFilter;
