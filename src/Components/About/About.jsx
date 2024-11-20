import React, { useContext, useEffect, useRef, useState } from "react";
import "./css/about.css";
import vision_img from "../../assets/about5.jpeg";
import mission_img from "../../assets/about/our_mission.jpeg";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { styled } from "@mui/material";
import Values from "./smallCompo/Values";
import MemberFooter from "./smallCompo/MemberFooter";
import globe from "../../assets/about/globe.png";
import clock from "../../assets/about/clock.png";
import real_clock from "../../assets/about/real_clock.png";
import heart from "../../assets/about/heart.png";
import AboutImage from "./smallCompo/AboutImage";
import { CustomDot } from "../../utils/utils";
import Reviews from "../../constants/Reviews";
import useWindowDimensions from "../../utils/WindowDimension";
import { base_url } from "../../context/data/myState";

import img from '../../assets/MPM.png';

const Image = styled("img")(({ theme }) => ({
  width: "200px",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "border-box",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
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

const About = () => {
  const { height, width, height1, width1 } = useWindowDimensions(0.49);
  const [flag1, setFlag1] = useState(true);
  const targetRef = useRef(null);
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to the target element when it comes into view
          entry.target.classList.add("sliding_element_left");
        } else {
          // Remove the class if not in view
          entry.target.classList.remove("sliding_element_left");
        }
      });
    });

    observer.observe(targetRef.current);
    observer.observe(targetRef3.current);

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      if (targetRef3.current) {
        observer.unobserve(targetRef3.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to the target element when it comes into view
          entry.target.classList.add("sliding_element_right");
        } else {
          // Remove the class if not in view
          entry.target.classList.remove("sliding_element_right");
        }
      });
    });

    // Start observing the target element
    observer.observe(targetRef1.current);
    observer.observe(targetRef2.current);

    // Clean up
    // Clean up
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef1.current);
      }
      if (targetRef3.current) {
        observer.unobserve(targetRef2.current);
      }
    };
  }, []);

  const imgArr = [clock, real_clock, heart, globe];
  const f = (i) => {
    if (i === 1) return 30;
    else if (i === 0) return 20;
    else if (i === 3) return -30;
    return 0;
  };
  const arr = [
    {
      title: "WellWork",
      desc: "Where convenience meets productivity in every workspace.",
    },
    {
      title: "WellWork",
      desc: "Our spaces are a catalyst to streamline your workflow.",
    },
    {
      title: "WellWork",
      desc: "WellWork promotes work-life harmony, crafting spaces that inspire balance.",
    },
    {
      title: "WellWork",
      desc: "Our vibrant ecosystem encourages businesses to grow together.",
    },
  ];
  useEffect(() => {
    const scrollToNavDiv = async () => {
      const navDiv = document.getElementById("main_contact_nav_div");
      if (navDiv) {
        await navDiv.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToNavDiv();
  }, []);

  const [slider_list, setSlider_list] = useState([]);
  const getSliderList = async (name) => {
    try {
      const responce = await fetch(`${base_url}slider-info/pagename/About`, {
        method: "GET",
      });
      const res = await responce.json();

      // console.log(res);
      if (res.success) {
        setSlider_list(res?.data);
      } else {
        setSlider_list([]);
      }
    } catch (error) {}
  };
  const [review_list, setReview_list] = useState([]);
  const getReviewList = async (name) => {
    try {
      // setLoading(true);
      const responce = await fetch(`${base_url}reviews/list/pageName/About`, {
        method: "GET",
      });
      const res = await responce.json();
      // setLoading(false);
      if (res.success) {
        setReview_list(res.data);
      } else {
        setReview_list([]);
      }
    } catch (error) {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getReviewList();
    getSliderList();
  }, []);

  return (
    <div className="main_about_div">
      <div className="about_banner" style={{ height: height1 }}>
        <div className="about_banner_content">
          <h1 className="about_banner_heading" style={{ marginBottom: "0" }}>
            About WellWork
          </h1>
          <p className="about_banner_desc" style={{ margin: "0" }}>
            {/* A space where your vision becomes your reality */}A space where
            you get the best work-life balance.
          </p>
        </div>
      </div>
      {/* )} */}
      <div className="vision">
        <div className="vision_image" ref={targetRef1}>
          <AboutImage src={vision_img} />
        </div>
        <div className="vision_content" ref={targetRef}>
          <h1 className="smarter_content_heading">Our Vision</h1>
          <p className="smarter_content_desc">
            {/* WellWork was born from a vision to bridge a crucial gap in the
            coworking market – the need for an inclusive space that caters
            equitably to both small and large firms. Each benefiting from shared
            ideas, diverse networks, and a collective vibrancy that drives
            innovation and growth. */}
            WellWork was born from a vision to bridge a crucial gap in the
            coworking market – the need for an inclusive space that caters
            equitably to both small and large firms. Each benefits from shared
            ideas, diverse networks, and a collective vibrancy that drives
            innovation and growth.
          </p>
        </div>
      </div>
      <div className="vision1">
        <div className="vision_image sliding_element_right">
          <AboutImage src={vision_img} />
        </div>
        <div className="vision_content sliding_element_left">
          <h1 className="smarter_content_heading">Our Vision</h1>
          <p className="smarter_content_desc">
            Our mission at WellWork is to expand our footprint across India,
            bringing our unique coworking spaces to professionals in every
            corner of the country. We aim to create spaces that support the
            diverse needs of India's dynamic workforce, to establish WellWork as
            a hallmark in the Indian coworking arena.
          </p>
        </div>
      </div>
      <div className="vision">
        <div className="vision_content" ref={targetRef2}>
          <h1 className="smarter_content_heading">Our Mission</h1>
          <p className="smarter_content_desc">
            {/* Our mission at WellWork is to expand our footprint across India,
            bringing our unique coworking spaces to professionals in every
            corner of the country. We aim to create spaces that support the
            diverse needs of India's dynamic workforce, with the goal of
            establishing WellWork as a hallmark in the Indian coworking arena. */}
            Our mission at WellWork is to expand our footprint across India,
            bringing our unique coworking spaces to professionals in every
            corner of the country. We aim to create spaces that support the
            diverse needs of India's dynamic workforce, to establish WellWork as
            a hallmark in the Indian coworking arena.
          </p>
        </div>
        <div className={`vision_image`} ref={targetRef3}>
          <AboutImage src={mission_img} />
        </div>
      </div>
      <div className="vision1">
        <div className="vision_content">
          <div className="vision_image sliding_element_right">
            <AboutImage src={mission_img} />
          </div>
          <h1 className="smarter_content_heading sliding_element_left">
            Our Mission
          </h1>
          <p className="smarter_content_desc sliding_element_left">
            Our mission at WellWork is to expand our footprint across India,
            bringing our unique coworking spaces to professionals in every
            corner of the country. We aim to create spaces that support the
            diverse needs of India's dynamic workforce, with the goal of
            establishing WellWork as a hallmark in the Indian coworking arena.
          </p>
        </div>
      </div>
      <div className="smarter">
        <div className="smarter_content sliding_element_right">
          <h1 className="smarter_content_heading" style={{ marginTop: "60px" }}>
            Legacy in Focus: The MPM Story
          </h1>
          <p className="smarter_content_desc">
            MPM, the parent company of WellWork, stands as a leader in the real
            estate industry in Hyderabad, with a distinguished heritage of
            shaping residential and commercial landscapes since 2008. Under the
            dynamic and visionary leadership of Mr. Girish Mallpani, MPM has
            completed over 30 projects, encompassing 5 million sq. ft. WellWork
            is MPM’s initiative to offer a unique and differentiated coworking
            experience.
          </p>
        </div>
        <div
          className="sliding_element_left"
          // style={{ display: "flex", justifyContent: "center" }}
        >
          {/* <div className="smarter_big_main">
            <div className="smarter_big">
              <div className="smarter_small">
                <Carousel
                  className="about_carousel"
                  responsive={responsive}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  containerClass="carousel-container"
                  infinite={true}
                  swipeable={false}
                  arrows={false}
                  draggable={false}
                  autoPlay={flag1}
                  showDots={false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  slidesToSlide={1}
                  customDot={<CustomDot />}
                >
                  {imgArr.map((e, i) => {
                    return (
                      <Image
                        style={{
                          paddingTop: `${f(i) > 0 ? f(i) + "px" : ""}`,
                          paddingBottom: `${f(i) < 0 ? -f(i) + "px" : ""}`,
                          height: "90%",
                          width: "90%",
                          objectFit: "contain",
                        }}
                        onMouseOver={() => setFlag1(false)}
                        onMouseLeave={() => setFlag1(true)}
                        src={e}
                        alt="Banner"
                      />
                    );
                  })}
                </Carousel>
              </div>
              <div className="smarter_middle">
                <Carousel
                  className="about_carousel1"
                  responsive={responsive}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  containerClass="carousel-container"
                  infinite={true}
                  swipeable={false}
                  arrows={false}
                  draggable={false}
                  autoPlay={flag1}
                  showDots={false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  slidesToSlide={1}
                >
                  {arr.map((e) => {
                    return (
                      <div
                        onMouseOver={() => setFlag1(false)}
                        onMouseLeave={() => setFlag1(true)}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          // width: "100%",
                          padding: "0",
                        }}
                      >
                        <p
                          className="about_carousel1_desc"
                          style={{ fontWeight: "400" }}
                        >
                          {e.desc}
                        </p>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div> */}
          <div className="change_img">
          {/* <img src={img} alt="" style={{width:"auto",height:"auto"}} /> */}
          <AboutImage src={img} />
          </div>
        </div>
      </div>

      <Values />

      <Reviews list={review_list} />
      <MemberFooter />
    </div>
  );
};

export default About;
