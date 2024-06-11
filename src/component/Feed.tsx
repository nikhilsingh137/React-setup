import React from "react";
import Style from "./feed.module.scss";
import LeftData from "./LeftData";
import MiddleData from "./MiddleData";

const Feed = () => {
  return (
    <div className={Style.container}>
      <LeftData />
      <MiddleData />
    </div>
  );
};

export default Feed;
