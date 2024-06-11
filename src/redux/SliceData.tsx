import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import { fetchAbout, fetchHeader, fetchPricing, fetchService } from "./Slice";

const SliceData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
    dispatch(fetchAbout());
    dispatch(fetchService());
    dispatch(fetchPricing());
  }, [dispatch]);
  return (
    <div>
      {data.headerData?.Header &&
        data.headerData.Header.map((item) => item.title)}
    </div>
  );
};

export default SliceData;
