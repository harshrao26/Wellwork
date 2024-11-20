import React, { useContext, useEffect, useState } from "react";
import "./css/career.css";
import Banner from "./smallCompo/Banner";
import Why from "./smallCompo/Why";
import Values from "./smallCompo/Values";
import Leaders from "./smallCompo/Leaders";
import GetInTouch from "./smallCompo/GetInTouch";
import myContext from "../../context/data/myContext";
import { SwiperSlide } from "swiper/react";
import LeadersDialog from "./smallCompo/LeadersDialog";
import SwiperComponent from "../../constants/SwiperComponent";
import ImageForm from "../../constants/ImageForm";

const Careers = () => {
  const [flag, setFlag] = useState(false);
  const { leaders_list, getReviewList } = useContext(myContext);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    // getReviewList("Career");
  }, []);
  useEffect(() => {
    const scrollToNavDiv = async () => {
      const navDiv = document.getElementById("career_page");
      if (navDiv) {
        await navDiv.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToNavDiv();
  }, []);
  useEffect(() => {
    const focusOnNavDiv = () => {
      const navButton = document.getElementById("navButton"); // Example: Replace 'navButton' with the id of your focusable element in the navbar
      if (navButton) {
        navButton.focus();
      }
    };

    focusOnNavDiv();
  }, []);

  return (
    <div className="career_main_component" id="career_page">
      <nav>
        <button
          id="navButton"
          tabIndex="0"
          style={{
            height: "0px",
            width: "0",
            background: "transparent",
            overflow: "hidden",
            border: "none",
            position: "absolute",
          }}
        >
          Navigate
        </button>
      </nav>

      <Banner />
      <Why />
      <Values />
      <div style={{ padding: "2% 4.5% 1% 4.5%" }}>
        {leaders_list?.length == 0 || (
          <SwiperComponent
            icons={true}
            heading={"Our Leaders"}
            styles={"leaders_swiper"}
            slides={3}
          >
            {leaders_list?.map((v, i) => (
              <SwiperSlide key={i}>
                <div
                  className="leaders_card"
                  onClick={() => {
                    setIndex(i);
                    setFlag(true);
                  }}
                >
                  <div className="leaders_card_img_div">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                      src={process.env.REACT_APP_API_KEY + v.IMAGE_URL}
                      alt=""
                    />
                  </div>
                  <div className="leaders_card_heading">{v.NAME}</div>
                  <div className="leaders_card_heading1">{v.DESIGNATION}</div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        )}
      </div>
      {flag && <LeadersDialog index={index} setFlag={setFlag} />}
      <Leaders />
      <div id="joinus">
        <ImageForm>
          <GetInTouch />
        </ImageForm>
      </div>
    </div>
  );
};

export default Careers;
