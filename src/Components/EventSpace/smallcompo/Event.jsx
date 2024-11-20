import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { styled } from "@mui/material";
import { CustomDot } from "../../../utils/utils";
import EventSwiper from "../../../constants/EventSwiper";

const Image = styled("img")(({ theme }) => ({
  width: "80%",
  height: "80%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    // height: 180
  },
}));

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

const Event = () => {
  return (
    <div className="banner_event_main_component">
      <div className="banner_event_content">
        <p className="banner_event_content_heading">
          Host An Unforgettable Event
        </p>
        <p className="banner_event_content_text">
          Make your next event truly memorable with WellWork! Our spaces are
          designed to ensure every gathering, from professional conferences to
          vibrant celebrations, leaves a lasting impression. With our blend of
          cutting-edge technology, flexible layouts, and a supportive team ready
          to bring your vision to life, hosting at WellWork means crafting
          experiences that resonate long after the day is done.
        </p>
      </div>
      <div className="banner_event_carousel">
        <EventSwiper />
      </div>
    </div>
  );
};

export default Event;
