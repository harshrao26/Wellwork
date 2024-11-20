import React, { useContext, useRef } from "react";
import myContext from "../context/data/myContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import "./reviews_main.css";

const Reviews = ({ list = [] }) => {
  const sliderRef = useRef();
  return (
    list?.length == 0 || (
      <div className="reviews_main">
        <div className="reviews_main_div">
          <div className="reviews_heading" style={{}}>
            What Our Members Are Saying
          </div>

          <div className="reviews_swiper">
            <div className="reviews_arrow_div">
              <div></div>
              <div
                className="reviews_arrow_circle"
                onClick={() => sliderRef.current?.slideNext()}
              >
                <MdNavigateNext size={30} color="#fff" />
              </div>
            </div>
            <Swiper
              ref={sliderRef}
              onSwiper={(it) => (sliderRef.current = it)}
              slidesPerView={list.length < 2 ? 1 : 2}
              //   spaceBetween={100}
              loop={true}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 1,
                },
                639: {
                  slidesPerView: 1,
                },
                865: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: list.length < 2 ? 1 : 2,
                },
                1500: {
                  slidesPerView: list.length < 2 ? 1 : 2,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {list?.map((v, i) => (
                <SwiperSlide key={i}>
                  <div className="reviews_swiper_content">
                    <img
                      src={process.env.REACT_APP_API_KEY + v.IMAGE_URL}
                      className="reviews_swiper_content_img"
                      // style={{
                      //   height: "120px",
                      //   width: "120px",
                      //   objectFit: "contain",
                      // }}
                      alt=""
                    />
                    <div className="reviews_contents">
                      <div className="reviews_content_company">
                        {v.COMPANY_NAME}
                      </div>
                      <div className="reviews_content_name">
                        {v.PERSON_NAME},{v.DESIGNATION}
                      </div>
                      <div className="reviews_content_desc">{v.REVIEW}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    )
  );
};

export default Reviews;
