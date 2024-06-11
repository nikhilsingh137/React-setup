import React, { useEffect } from "react";
import Style from "./footer.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";

const Footer = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);
  return (
    <div className={Style.footer}>
      <div className={Style.content}>
        {data.headerData?.Footer &&
          data.headerData.Footer.map((item, index) => {
            return (
              <>
                <div
                  className={`${Style.main} ${index === 0 ? Style.first : ""}`}
                >
                  <div
                    className={`${Style.image} ${
                      index === 0 ? Style.show : ""
                    }`}
                  >
                    <img src={item.logo} alt="" />
                  </div>
                  <div className={Style.File}>
                    <h2>{item.title}</h2>
                  </div>
                  <div className={Style.detail}>
                    <ul>
                      {item.nav &&
                        item.nav.map((item) => {
                          return (
                            <li>
                              <a href="/">{item.content}</a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className={Style.bottom}>
        <div className={Style.bottomtext}>
          <h2>© 2024 Code . All Rights Reserved.</h2>
          <h3>Made with 💛 by Code </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
