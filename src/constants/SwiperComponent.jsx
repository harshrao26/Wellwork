import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import myContext from "../context/data/myContext";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "../App.css";
import useWindowDimensions from "../utils/WindowDimension";

const SwiperComponent = ({
  icons,
  styles,
  slides,
  children,
  heading,
  mt_heading,
  mb_heading,
}) => {
  const sliderRef = useRef();
  const { fontSize } = useWindowDimensions();

  return (
    <div className="swiper_main">
      {heading && (
        <div
          className="swiper_heading_main_div"
          style={{ marginTop: mt_heading, marginBottom: mb_heading }}
        >
          {icons && <div className="arrow_img_div arrow_img_div_1"></div>}
          <h1
            className="swiper_heading_text header_tittle"
            // style={{
            //   fontSize:
            //     fontSize > 36 ? "36px" : fontSize < 18 ? "18px" : fontSize,
            // }}
          >
            {heading}
          </h1>
          {icons && (
            <div className="swiper_arrow_img_div">
              <MdArrowBackIos
                size={25}
                color="#5B5050"
                style={{ cursor: "pointer" }}
                onClick={() => sliderRef.current?.slidePrev()}
              />
              <MdArrowForwardIos
                size={25}
                color="#5B5050"
                style={{ cursor: "pointer" }}
                onClick={() => sliderRef.current?.slideNext()}
              />
            </div>
          )}
        </div>
      )}
      <div className={`${styles}`}>
        <Swiper
          ref={sliderRef}
          onSwiper={(it) => (sliderRef.current = it)}
          slidesPerView={slides || 3}
          spaceBetween={15}
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
              slidesPerView: slides - 1,
            },
            865: {
              slidesPerView: slides,
            },
            1000: {
              slidesPerView: slides,
            },
            1500: {
              slidesPerView: slides,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export const Card = ({
  IMAGE_URL,
  title,
  desc,
  onClick,
  style,
  extra,
  img_div_style,
}) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className={`swiper_card `}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="swiper_card_img" style={img_div_style}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            opacity: onHover ? 1 : 0.9,
          }}
          src={process.env.REACT_APP_API_KEY + IMAGE_URL}
          alt=""
        />
      </div>
      <div className="swiper_card_heading">{title}</div>
      <div className="swiper_card_heading1">{desc}</div>
      {extra && <div>{extra}</div>}
    </div>
  );
};
export default SwiperComponent;
