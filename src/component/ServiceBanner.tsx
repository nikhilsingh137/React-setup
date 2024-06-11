import { useEffect } from "react";
import Style from "./serviceBanner.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchService } from "../redux/Slice";

const ServiceBanner = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);
  return (
    <div className={Style.serviceBanner}>
      {data.serviceItem?.service &&
        data.serviceItem.service.map((item) => {
          return (
            <>
              <div className={Style.Heading}>
                <h2>{item.title}</h2>
              </div>
            </>
          );
        })}
      <div className={Style.serviceData}>
        {data.serviceItem?.service &&
          data.serviceItem?.service.map((item, index) => {
            return (
              <>
                {item.Data &&
                  item.Data.map((item) => {
                    return (
                      <a
                        href={`/service/${item.id.toString()}`}
                        className={`${index === 1 ? Style.active : ""}`}
                      >
                        <img src={item.img} alt="" />
                        <h2>{item.title}</h2>
                        <p>{item.paragraph}</p>
                        <button>{item.button}</button>
                      </a>
                    );
                  })}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ServiceBanner;
