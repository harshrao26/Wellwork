import React from "react";
import bannerImg from "../../../assets/whyaltis/why_altis_banner_img.jpg";
import "../css/whyaltis.css";
import useWindowDimensions from "../../../utils/WindowDimension";
const WhyAltisBanner = () => {
  const { height, width, height1, width1, windowDimensions } =
    useWindowDimensions(0.49);

  return (
    <div>
      <div
        className="about_banner"
        style={{
          background: `url('${bannerImg}')`,
          backgroundSize: "100% 100%",
          height: windowDimensions.width < 600 ? "28vh" : "75vh" /*height1  */,
        }}
      >
        <div className="why_banner_content">
          <p
            className="why_banner_heading"
            style={{ fontSize: windowDimensions.width < 600 ? "20px" : "40px" }}
          >
            Why WellWork
          </p>
          <p
            className="why_banner_desc"
            style={{ fontSize: windowDimensions.width < 600 ? "14px" : "16px" }}
          >
            Work where ideas ignite, productivity thrives, and possibilities
            take flight. This is WellWork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyAltisBanner;
