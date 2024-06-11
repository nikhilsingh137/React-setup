import React, { useEffect } from "react";
import Style from "./middleData.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";
import { Link, useLocation } from "react-router-dom";

const MiddleData = () => {
  const location = useLocation();
  const gelUrl = location.pathname;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  const filterData =
    data.headerData?.Data &&
    data.headerData.Data.filter(
      (item) => item.data.category.listingUrl === gelUrl
    );
  console.log(gelUrl);
  console.log(filterData, "hello");
  return (
    <div className={Style.middleData}>
      {data.headerData?.Data &&
        gelUrl === "/" &&
        data.headerData.Data.map((item, index) => {
          const firstIndex: any = index === 0 ? Style.Change : "";
          return (
            <>
              {firstIndex && (
                <div className={`${Style.content} ${firstIndex}`}>
                  <Link to={`${item.shortUrl}`}>
                    <h2>
                      <span style={{ color: item.data.category.color }}>
                        {item.data.header.slug}
                      </span>{" "}
                      : {item.data.header.title}
                    </h2>
                    <img src={item.data.header.media[0].url} alt="" />
                  </Link>
                </div>
              )}
              {!firstIndex && (
                <div className={Style.content}>
                  <Link to={`${item.shortUrl}`}>
                    <h2>
                      <span style={{ color: item.data.category.color }}>
                        {item.data.header.slug}
                      </span>{" "}
                      : {item.data.header.title}
                    </h2>
                    <img src={item.data.header.media[0].url} alt="" />
                  </Link>
                </div>
              )}
            </>
          );
        })}
      {filterData &&
        gelUrl !== "/" &&
        filterData.map((item, index) => {
          const firstIndex: any = index === 0 ? Style.Change : "";
          return (
            <>
              {firstIndex && (
                <div className={`${Style.content} ${firstIndex}`}>
                  <Link to={`${item.shortUrl}`}>
                    <h2>
                      <span style={{ color: item.data.category.color }}>
                        {item.data.header.slug}
                      </span>{" "}
                      : {item.data.header.title}
                    </h2>
                    <img src={item.data.header.media[0].url} alt="" />
                  </Link>
                </div>
              )}
              {!firstIndex && (
                <div className={Style.content}>
                  <Link to={`${item.shortUrl}`}>
                    <h2>
                      <span style={{ color: item.data.category.color }}>
                        {item.data.header.slug}
                      </span>{" "}
                      : {item.data.header.title}
                    </h2>
                    <img src={item.data.header.media[0].url} alt="" />
                  </Link>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};

export default MiddleData;
