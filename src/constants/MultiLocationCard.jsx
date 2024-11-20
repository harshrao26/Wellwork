import React, { useRef, useState } from "react";
import "./multiLocationCard.css";
import users from "../assets/users.png";
import { TbArrowsHorizontal } from "react-icons/tb";
import { BsCheckLg } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GoDotFill } from "react-icons/go";

const MultiLocationCard = ({
  title,
  address,
  carouselData = [],
  setName,
  index,
  featurs_data = [],
  line,
  size,
  onClick,
}) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const sliderRef = useRef();
  console.log("title ====", title);

  const ButtonGroup = () => {
    return (
      <div
        style={{
          position: "absolute",
          justifyContent: "space-between",
          width: "90%",
          display: showNavigation ? "flex" : "none",
          paddingInline: "5%",
          height: "100%",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: 25,
            width: 25,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => sliderRef.current?.slidePrev()}
        >
          <GoChevronLeft color="#6aadd7" size={20} />
        </div>
        <div
          style={{
            height: 25,
            width: 25,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => sliderRef.current?.slideNext()}
        >
          <GoChevronRight size={20} color="#6aadd7" />
        </div>
      </div>
    );
  };

  const featurs_list = title.includes("Gachibowli")
    ? [
        "One 15-Seater Conference room & Two 6 Seater Meeting Rooms",
        "Nearest Metro Station is 2.5 Km away.",
        "Nearest Bus Stop  0.8 Km away.",
        "At the heart of business centres.",
      ]
    : title.includes("Ameerpet")
    ? [
        "One 15 Seater Conference Room & Two 6 Seater Meeting Rooms",
        "Nearest Metro Station is 2 minutes away.",
        "Nearest Bus Stop is 5 minutes away.",
        "At the heart of the city.",
      ]
    : title.includes("Banjara Hills")
    ? [
        "One 20 Seater Conference Room & Two 6 Seater Meeting Rooms",
        "Nearest Metro Station is 5 minutes away.",
        "Nearest Bus Stop is 4 minutes away.",
        "At the heart of bustling Hyderabad.",
      ]
    : [
        "One 10-Seater Conference room",
        "Nearest Metro Station is 2.5 Km away.",
        "Nearest Bus Stop  0.8 Km away.",
        "At the heart of business centres.",
      ];
  return (
    <div className="ml_main">
      <div
        className="ml_carousel_div"
        onMouseEnter={() => setShowNavigation(true)}
        onMouseLeave={() => setShowNavigation(false)}
      >
        {/* {carouselData?.length > 1 && <ButtonGroup />} */}
        <Swiper
          ref={sliderRef}
          onSwiper={(it) => (sliderRef.current = it)}
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          className="my-Swiper"
          loop={true}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={4000}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          style={{
            "--swiper-pagination-color": "#6aadd7",
            "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "6px",
            "--swiper-pagination-bullet-horizontal-gap": "2px",
          }}
        >
          {carouselData.map((e, index) => (
            <SwiperSlide>
              <img
                onClick={onClick}
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
      <div className="ml_content_div" onClick={onClick}>
        <div className="ml_content_title">{title}</div>
        <div className="ml_content_description" style={{ marginTop: "10px" }}>
          {address}
        </div>
        <div className="ml_content_row">
          <div className="ml_content_icon_div1">
            <TbArrowsHorizontal color="#fff" />
          </div>
          <div className="ml_content_description1">Net Size: {size}</div>
        </div>

        <div className="ml_content_row">
          <img src={users} className="ml_content_img" />

          <div className="ml_content_description1">
            {title == "Ameerpet" ? 4 : 3} Meeting Rooms
          </div>
        </div>
        {/* <div className="ml_content_row">
          <img src={users} className="ml_content_img" />

          <div className="ml_content_description">{line}</div>
        </div> */}
        {/* {featurs_data.map((v, i) => (
          <div className="ml_content_row" key={i}>
            <BsCheckLg color="#6aadd7" size={20} />
            <div className="ml_content_description">{v}</div>
          </div>
        ))} */}
        {featurs_list?.map((v, i) => (
          <div
            className="ml_content_row"
            style={{ alignItems: "center" }}
            key={i}
          >
            <GoDotFill color="#5b5050" size={10} />
            <div className="ml_content_description">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiLocationCard;
