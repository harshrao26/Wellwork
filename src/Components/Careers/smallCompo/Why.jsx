import React, { useState } from "react";
import forward from "../../../assets/arrow_forward_ios (1).png";
import backward from "../../../assets/arrow_back_ios.png";
import { slidesData } from "../../../constants/Data";

const Why = () => {
  const [flag, setFlag] = useState(0);
  const handleFlag = () => {
    setFlag((flag + 1) % 4);
  };
  const handleFlagMinus = () => {
    setFlag((flag - 1 + 4) % 4);
  };
  return (
    <div className="why_career_main">
      <div className="why_career_header" style={{ marginTop: "40px" }}>
        <p className="header_tittle" style={{ margin: "0", flex: 1 }}>
          Why Us?
        </p>
        <div className="arrow_img_div">
          <img
            src={backward}
            alt=""
            className="arrow_img"
            onClick={handleFlag}
          />
          <img
            src={forward}
            alt=""
            className="arrow_img"
            onClick={handleFlagMinus}
          />
        </div>
      </div>
      <div className="why_career_inner">
        <div className="why_career_inner_content">
          <p className="wcic_heading">{slidesData[flag].title}</p>
          <p className="wcic_desc">{slidesData[flag].data}</p>
        </div>
        <div className="why_career_inner_image">
          <img src={slidesData[flag].img} alt="" style={{ height: "320px" }} />
        </div>
      </div>
    </div>
  );
};

export default Why;
