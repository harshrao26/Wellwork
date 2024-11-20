import React from "react";
import useWindowDimensions from "../../../utils/WindowDimension";
const EventBanner = ({ bannerImg, title, onClick }) => {
  const { windowDimensions } = useWindowDimensions();
  return (
    <div
      className="location1_banner"
      style={{
        backgroundImage: `url('${bannerImg}')`,
        height:
          windowDimensions.width < 600
            ? "28vh"
            : windowDimensions.width < 900
            ? "60vh"
            : "80vh",
        width: "100vw",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="about_banner_content">
        <h1
          className="workspace_banner_heading"
          style={{
            alignSelf: "start",
            color: "white",
          }}
        >
          {title}
        </h1>
        <p className="w1_banner_desc">Host Your Events At WellWork</p>
        <button
          // className="work_heading_button"
          className="w1_banner_button"
          onClick={onClick}
          style={{ alignSelf: "flex-start" }}
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default EventBanner;
