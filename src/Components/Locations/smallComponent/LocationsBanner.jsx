import React, { useContext, useRef } from "react";
import bannerImg from "../../../assets/whyaltis/Rectangle 73 (2).png";
import { GrNext } from "react-icons/gr";
import myContext from "../../../context/data/myContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const WhyAltisBanner = () => {
  const { location_list } = useContext(myContext);
  const sliderRef = useRef();

  return (
    <div className="banner_carousell">
      <div
        style={{
          position: "absolute",
          display: "flex",
          zIndex: 10,
          right: "2%",
          top: "45%",
        }}
      >
        <GrNext
          onClick={() => sliderRef.current?.slideNext()}
          size={25}
          color="#fff"
        />
      </div>
      <Swiper
        ref={sliderRef}
        onSwiper={(it) => (sliderRef.current = it)}
        navigation={false}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        pagination={{ clickable: true }}
        // autoplay={true}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={4000}
        loopFillGroupWithBlank={true}
        style={{
          "--swiper-pagination-color": "#6aadd7",
          "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "6px",
          "--swiper-pagination-bullet-horizontal-gap": "2px",
        }}
      >
        {location_list?.map((e, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className="about_banner"
              style={{
                background: `url('${bannerImg}')`,
                backgroundSize: "100% 100%",
                height: "80vh",
              }}
            >
              <div className="why_banner_content">
                <p
                  className="why_banner_heading"
                  style={{ marginLeft: "0%", fontSize: "40px" }}
                >
                  {e.B_NAME}
                </p>
                <p
                  className="why_banner_desc"
                  style={{
                    fontWeight: "600",
                    fontSize: "24px",
                    margin: "0 0 0 0%",
                  }}
                >
                  {e.LOCATION_NAME}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyAltisBanner;
