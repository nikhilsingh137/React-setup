import React, { useEffect, useState } from "react";
import Style from "./pricing.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchPricing } from "../redux/Slice";

const Pricing = () => {
  const [active, setActive] = useState("1");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchPricing());
  }, [dispatch]);
  return (
    <div className={Style.pricing}>
      <div className={Style.pricingData}>
        <div className={Style.button}>
          {data.pricingItem?.data &&
            data.pricingItem.data.map((item) => {
              return (
                <h2
                  onClick={() => setActive(item.id.toString())}
                  className={`${
                    active === item.id.toString() ? Style.active : ""
                  }`}
                >
                  {item.button}
                </h2>
              );
            })}
        </div>
        {data.pricingItem?.data &&
          data.pricingItem.data.map((item) => {
            return (
              <div
                className={`${Style.content} ${
                  active === item.id.toString() ? Style.active : ""
                }`}
              >
                {item.data &&
                  item.data.map((item) => {
                    return (
                      <div className={Style.data}>
                        <h1>{item.basic}</h1>
                        <h2>{item.rate}</h2>
                        <h3>{item.account}</h3>
                        <h4>{item.style}</h4>
                        <h5>{item.product}</h5>
                        <h6>{item.image}</h6>
                        <span>{item.band}</span>
                        <strong>{item.support}</strong>
                        <a href="/contact">{item.sign}</a>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pricing;
