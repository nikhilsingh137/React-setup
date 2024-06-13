import { useEffect } from "react";
import Style from "./header.module.scss";
import HDImg from "../img/nikhil-logo-removebg-preview.png";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchHeader } from "../redux/Slice";

const Header = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);
  return (
    <div className={Style.header}>
      <div className={Style.headerTop}>
        <div className={Style.logo}>
          <img src={HDImg} alt="" />
        </div>
        <div className={Style.Navbar}>
          <ul>
            {data.headerData?.Header &&
              data.headerData.Header.map((item) => {
                return (
                  <li>
                    <a href={`${item.url}`}>{item.title}</a>
                    <div className={Style.drop}>
                      {item.subMenu &&
                        item.subMenu.map((item) => {
                          return <a href="/">{item.title}</a>;
                        })}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
