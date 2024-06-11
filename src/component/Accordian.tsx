import React, { useEffect, useState } from "react";
import Style from "./accordian.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";

const Accordian = () => {
  const [accordian, setAccordian] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  const handleData = (id: string) => {
    setAccordian((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className={Style.container}>
      <div className={Style.accordian}>
        {data.headerData?.Accordian &&
          data.headerData.Accordian.map((item) => {
            const isOpen = accordian === String(item.id);
            return (
              <div className={Style.front}>
                <div
                  className={Style.text}
                  key={item.id}
                  onClick={() => handleData(String(item.id))}
                >
                  <h2>
                    <img src={item.img} alt="" />
                    {item.title}
                  </h2>
                  <i
                    className={`fa-solid ${
                      isOpen ? "fa-angle-up" : "fa-angle-down"
                    }`}
                  ></i>
                </div>
                {isOpen && (
                  <div
                    className={`${Style.content} ${
                      accordian ? Style.open : ""
                    }`}
                    style={{ maxHeight: accordian ? "3000px" : "0px" }}
                  >
                    <p>{item.paragraph}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Accordian;
