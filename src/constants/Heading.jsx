import React from "react";
import backArrow from "../assets/arrow_back_ios.png";
import forwardArrow from "../assets/arrow_forward_ios (1).png";
import "./heading.css";
import useWindowDimensions from "../utils/WindowDimension";

const Heading = ({ onBackClick, title, onNextClick, icons }) => {
  const { fontSize } = useWindowDimensions();
  return (
    <div className="heading_main_div">
      {icons && <div className="arrow_img_div_1 arrow_img_div"></div>}
      <h1
        className="heading_text"
        style={{
          fontSize: fontSize > 32 ? "32px" : fontSize < 18 ? "18px" : fontSize,
        }}
      >
        {title}
      </h1>
      {icons && (
        <div className="arrow_img_div">
          <img
            src={backArrow}
            alt=""
            className="arrow_img"
            onClick={onBackClick}
          />
          <img
            src={forwardArrow}
            alt=""
            className="arrow_img"
            onClick={onNextClick}
          />
        </div>
      )}
    </div>
  );
};

export default Heading;
