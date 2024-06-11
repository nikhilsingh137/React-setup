import React from "react";
import Imagebox from "../component/Imagebox";
import Banner from "../component/Banner";
import PhotoBox from "../component/PhotoBox";
import Content from "../component/Content";
import FormBox from "../component/FormBox";
import Accordian from "../component/Accordian";
import Tab from "../component/Tab";
import Feed from "../component/Feed";
import FormData from "../component/FormData";

const HomePage = () => {
  return (
    <>
      <Feed />
      <Imagebox />
      <FormBox />
      <Banner />
      <PhotoBox />
      <Content />
      <Accordian />
      <Tab />
      <FormData />
    </>
  );
};

export default HomePage;
