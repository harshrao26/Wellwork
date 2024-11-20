import React, { useContext, useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Heading from "../../../constants/Heading";
import useWindowDimensions from "../../../utils/WindowDimension";
import { base_url } from "../../../context/data/myState";

const Members = () => {
  const sliderRef = useRef();
  const { windowDimensions } = useWindowDimensions();
  const [company_logos, setCompany_logos] = useState([]);

  const getCompany_logos = async (name) => {
    try {
      // setLoading(true);
      const responce = await fetch(
        `${base_url}members-logos/list/Why Altis`,
        { method: "GET" }
      );
      const res = await responce.json();
      // setLoading(false);
      if (res.success) {
        setCompany_logos(res.data);
      } else {
        setCompany_logos([]);
      }
    } catch (error) {
      // setLoading(false);
    }
  };
  useEffect(() => {
    getCompany_logos();
  }, []);

  return (
    company_logos?.length == 0 || (
      <div>
        <div
          style={{
            marginTop: windowDimensions.width < 600 ? "20px" : "50px",
          }}
        >
          <Heading title={"Our Members"} />
        </div>
        {/* <p
          className="more_heading"
          style={{ width: "100vw", fontSize: "36px", marginTop: "70px" }}
        >
          Our Members
        </p> */}
        <div
          className={``}
          style={{
            marginTop: "3%",
            marginBottom: "1%",
            position: "relative",
          }}
        >
          <Swiper
            ref={sliderRef}
            onSwiper={(it) => (sliderRef.current = it)}
            slidesPerView={6}
            spaceBetween={20}
            loop
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 2,
              },
              639: {
                slidesPerView: 3,
              },
              865: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 5,
              },
              1500: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            speed={5500}
            loopFillGroupWithBlank={true}
            className="mySwiper"
            style={{
              "--swiper-pagination-color": "#6aadd7",
              "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "6px",
              "--swiper-pagination-bullet-horizontal-gap": "2px",
            }}
          >
            {company_logos?.map((v, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <img
                    src={process.env.REACT_APP_API_KEY + v.LOGO_URL}
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  );
};

export default Members;
