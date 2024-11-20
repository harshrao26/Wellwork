import React, { useContext, useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import BannerForm from "./BannerForm";
import "./css/banner.css";
import Typewriter from "typewriter-effect";
import "../../App.css";
import CustomBanner from "../../constants/CustomBanner";
import useWindowDimensions from "../../utils/WindowDimension";
import { base_url } from "../../context/data/myState";
// import banner1 from "../assets/new/banner1.webp";

const Banner = () => {
  const { height, width, height1, width1 } = useWindowDimensions(0.53);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${base_url}slider-info/pagename/Home`
        );
        const respJson = await response.json();

        setData(respJson.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="banner_main_div" style={{ height: height1,maxHeight:"100%" }}>
      <div className="carousel_banner_form">
        <div
          className="carousel_banner_heading"
          // style={{
          //   fontSize: 40,
          //   fontWeight: "700",
          //   color: "#fff",
          //   textAlign: "center",
          // }}
        >
          {/* Reach your peak with */}
        </div>
        <div
          className="typewriter-container carousel_banner_heading"
          // style={{
          //   fontSize: 40,
          //   fontWeight: "700",
          //   color: "#fff",
          //   textAlign: "center",
          //    marginBottom: "10%",
          // }}
        >
          {/* <Typewriter
            style={{ textShadow: "none" }}
            options={{
              strings: [
                "Collaboration.",
                "Innovation.",
                "Flexibility.",
                "One desk at a time.",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          /> */}
        </div>
      </div>
      <div className="carousel_banner_form1">
        <BannerForm />
      </div>
      <CustomBanner imageData={data} path={false} height={"100%"} />
    </div>
  );
};

export default Banner;
