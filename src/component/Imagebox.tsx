import React from "react";
import Style from "./imagebox.module.scss";
import { TypeAnimation } from "react-type-animation";

const Imagebox = () => {
  return (
    <div className={Style.imagebox}>
      <div className={Style.text}>
        <h2>
          I am a learner of{" "}
          <span>
            <TypeAnimation
              sequence={[
                "Html",
                1000,
                "Css",
                1000,
                "Javascript",
                1000,
                "Jquery",
                1000,
                "React.js",
                1000,
                "Next.js",
                1000,
                "Node.js",
                1000,
                "Bootstrip",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Imagebox;
