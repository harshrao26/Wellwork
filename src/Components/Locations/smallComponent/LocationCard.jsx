import React, { useState } from "react";
import width from "../../../assets/location/width (3).png";
import rooms from "../../../assets/location1/diversity_3 (2).png";
import Carousel from "react-multi-carousel";
import check from "../../../assets/location1/check (2).png";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { CustomDot } from "../../../utils/utils";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LocationCard = ({ content, setName, index, name, setFlag1 }) => {
  const [flag, setFlag] = useState(false);
  // const handleFlag = () => {
  //     setFlag(true)
  // }
  const handleIndex = () => {
    if (index === 0) setName("Gachibowli");
    else if (index === 2) setName("Banjara Hills");
    else setName("Ameerpet");
    console.log(name, content.name);
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        style={{
          position: "absolute",
          justifyContent: "space-between",
          width: "90%",
          display: "flex",
          paddingInline: "5%",
        }}
      >
        <div
          style={{
            height: 30,
            width: 30,
            backgroundColor: "#6aadd7",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => previous()}
        >
          <GoChevronLeft color="#fff" size={25} />
        </div>
        <div
          style={{
            height: 30,
            width: 30,
            backgroundColor: "#6aadd7",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => next()}
        >
          <GoChevronRight size={25} color="#fff" />
        </div>
      </div>
    );
  };
  return (
    <div
      className="location_card_main"
      onMouseOver={() => setFlag1(false)}
      onMouseLeave={() => setFlag1(true)}
      onClick={handleIndex}
      style={{
        // background: `${name === content.name ? "" : ""}`,
        padding: "5px 0px",
        // paddingLeft: "0",
      }}
    >
      <div
        className="location_card_first_half"
        onMouseOver={() => setFlag(true)}
        onMouseLeave={() => setFlag(false)}
      >
        <Carousel
          // className=""
          responsive={responsive}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          infinite={true}
          swipeable={true}
          // arrows={flag}
          draggable={true}
          autoPlay={false}
          showDots
          autoPlaySpeed={2000}
          keyBoardControl={true}
          slidesToSlide={1}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          customDot={<CustomDot />}
        >
          {content.image.map((e, index) => (
            <img
              src={e.url}
              style={{ height: "100%" }}
              alt=""
              className="location_card_img"
            />
          ))}
        </Carousel>
      </div>
      <div className="location_card_second_half">
        <p className="second_half_title">{content.name}</p>
        <p className="second_half_description">{content.address}</p>
        <div className="width_location">
          <div className="first_width_location">
            <div
              style={{
                height: "18px",
                width: "20px",
                background: "#6aadd7",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "2px",
              }}
            >
              <img
                style={{ height: "10px", width: "17px" }}
                src={width}
                alt=""
              />
            </div>
            <p
              className="width_location_text"
              style={{ color: "black", fontWeight: "500" }}
            >
              Net Size: {content.width}
            </p>
          </div>
        </div>
        {content.points.map((e, i) => (
          <div className="location_points">
            <div className="first_width_location">
              <div
                style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  background: `${i === 0 ? "#6aadd7" : ""}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ height: "13px", width: "13px" }}
                  src={i === 0 ? rooms : check}
                  alt=""
                />
              </div>
              <p>{e}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
