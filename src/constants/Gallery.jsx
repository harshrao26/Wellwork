import React, { useRef, useState } from "react";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import useWindowDimensions from "../utils/WindowDimension";

const Gallery = ({ title, img2, img3, img4, img5, imageData = [] }) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const sliderRef = useRef();
  const { windowDimensions } = useWindowDimensions();
  console.log(windowDimensions.width);
  const ButtonGroup = () => {
    return (
      <div
        style={{
          position: "absolute",
          justifyContent: "space-between",
          width: "90%",
          display: showNavigation ? "flex" : "none",
          paddingInline: "5%",
          // height: "100%",
          alignItems: "center",
          zIndex: 10,
          marginTop: "40%",
          marginBottom: "50%",
        }}
      >
        <div
          style={{
            height: 25,
            width: 25,
            backgroundColor: "#6aadd7",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => sliderRef.current?.slidePrev()}
        >
          <GoChevronLeft color="#fff" size={20} />
        </div>
        <div
          style={{
            height: 25,
            width: 25,
            backgroundColor: "#6aadd7",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => sliderRef.current?.slideNext()}
        >
          <GoChevronRight size={20} color="#fff" />
        </div>
      </div>
    );
  };
  return (
    <div className="gallery_main_div">
      <div className="gallery_main_div_heading">{title}</div>
      <div className="gallery_main">
        <div
          className="gallery_main_div_l"
          style={{ position: "relative" }}
          onMouseEnter={() => setShowNavigation(true)}
          onMouseLeave={() => setShowNavigation(false)}
        >
          <ButtonGroup />
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
            {imageData.map((e, index) => (
              <SwiperSlide key={index}>
                <img
                  src={process.env.REACT_APP_API_KEY + e.path}
                  style={{
                    height: "100%",
                    minHeight: "100%",
                    width: "100%",
                    objectFit: "fill",
                  }}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {windowDimensions.width < 600 || (
          <div className="gallery_main_div_r">
            <div className="gallery_right_div_t">
              <img src={img2} alt="img1" className="gallery_img" />
            </div>
            <div className="gallery_right_div_b">
              <div className="gallery_r_bottom_div">
                <div className="gallery_r_bottom_l">
                  <img src={img3} alt="img1" className="gallery_img" />
                </div>
                <div className="gallery_r_bottom_r">
                  <div className="gallery_r_bottom_r_top">
                    <img src={img4} alt="img1" className="gallery_img" />
                  </div>
                  <div className="gallery_r_bottom_r_bottom">
                    <img src={img5} alt="img1" className="gallery_img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
