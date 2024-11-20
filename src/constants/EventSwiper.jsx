import React, { useContext, useState } from "react";
import "./eventSwiper.css";
import { Controller, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import myContext from "../context/data/myContext";

const EventSwiper = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const { unforgettable_list } = useContext(myContext);
  return (
    <div className="es_main">
      <div className="es_bg_card"></div>
      <div className="es_bg_card_one">
        <Swiper
          modules={[Controller, Autoplay]}
          // autoplay={true}
          loop
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={4000}
          loopFillGroupWithBlank={true}
        >
          {unforgettable_list.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={process.env.REACT_APP_API_KEY + item.IMAGE_URL}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  backgroundColor: "#fff",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="es_bg_card_two">
        <Swiper
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          loop
          controller={{ control: firstSwiper }}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={4000}
          loopFillGroupWithBlank={true}
        >
          {unforgettable_list.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="es_bg_card_two_content">
                <div className="es_bg_card_two_content_line">
                  <div
                    style={{
                      height: "75%",
                      width: 1,
                      display: "flex",
                      backgroundColor: "#6aadd7",
                    }}
                  ></div>
                </div>
                <div className="es_bg_card_two_content_second">
                  <div className="es_bg_card_heading">{item.NAME}</div>
                  <div className="es_bg_card_heading3">{item.CITY}</div>
                  <div className="es_bg_card_heading4">{item.DESCRIPTION}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="es_bg_card1"></div>
    </div>
  );
};

export default EventSwiper;
