import React, { useRef, useState } from "react";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import banner1 from "../assets/new/banner1.webp";
const CustomBanner = ({
  height,
  imageData = [banner1, banner1, banner1, banner1, banner1],
  path = true,
  moreData,
}) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const sliderRef = useRef();

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
    <div
      className="custom-banner-main"
      style={{ position: "relative", height: height }}
      onMouseEnter={() => setShowNavigation(true)}
      onMouseLeave={() => setShowNavigation(false)}
    >
      {/* <ButtonGroup /> */}
      {imageData?.length == 1 ? (
        <img
          src={
            path
              ? process.env.REACT_APP_API_KEY + imageData[0]?.path
              : process.env.REACT_APP_API_KEY + imageData[0].IMAGE_URL
          }
          className="custom-banner-main-img"
          alt=""
        />
      ) : (
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
            // pauseOnMouseEnter: true,
            delay: 2000,
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
              {/* <div
                className="custom-banner-main-img"
                style={{
                  background: path
                    ? `url(${process.env.REACT_APP_API_KEY + e.path})`
                    : `url(${process.env.REACT_APP_API_KEY + e.IMAGE_URL})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                }}
              ></div> */}
              <img
                src={
                  path
                    ? process.env.REACT_APP_API_KEY + e.path
                    : process.env.REACT_APP_API_KEY + e.IMAGE_URL
                }
                className="custom-banner-main-img"
                alt=""
              />
              {/* {moreData} */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default CustomBanner;
