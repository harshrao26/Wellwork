import React, { useContext, useEffect, useState } from "react";
import "./css/event.css";
import Banner from "./smallcompo/Banner";
import Event from "./smallcompo/Event";
import Spaces from "./smallcompo/Spaces";
import GetInTouch from "./smallcompo/GetInTouch";
import Gallery from "../../constants/Gallery";
import myContext from "../../context/data/myContext";
import { useLocation, useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Heading from "../../constants/Heading";
import { GrFormNext } from "react-icons/gr";
import SwiperComponent, { Card } from "../../constants/SwiperComponent";
import ImageForm from "../../constants/ImageForm";
import { eventamenitiesData } from "../../constants/brandscollections";
import useWindowDimensions from "../../utils/WindowDimension";
import { base_url } from "../../context/data/myState";

const EventSpace = () => {
  const { windowDimensions } = useWindowDimensions();
  const navigate = useNavigate();
  useEffect(() => {
    const scrollToNavDiv = async () => {
      const navDiv = document.getElementById("main_contact_nav_div");
      if (navDiv) {
        await navDiv.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToNavDiv();
  }, []);
  const { gallery_list, getGalleryList, chooseAltis_list } =
    useContext(myContext);
  useEffect(() => {
    getGalleryList("Event");
  }, []);
  const { state } = useLocation();
  const [data, setData] = useState({});
  const { getReviewList, products_list, getProductsList, location_list } =
    useContext(myContext);

  const getData = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `${base_url}products/id/${state.ID}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            setData(result.data[0]);
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };
  useEffect(() => {
    getData();
    getProductsList();
    getReviewList("Product");
  }, []);
  const count = gallery_list[0]?.IMAGE_URLS?.length;
  let filteredKeywords = products_list.filter(
    (word) => state.ID != String(word.ID)
  );
  const scrollToNavDiv = async () => {
    const navDiv = document.getElementById("event_form");
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };
  return (
    <div>
      <Banner
        bannerImg={process.env.REACT_APP_API_KEY + data?.IMAGE_URL}
        title={data?.TITLE}
        onClick={() => scrollToNavDiv()}
      />
      <Event />
      <Spaces
        title={"Explore A Range Of Spaces At WellWork"}
        onClick={() => scrollToNavDiv()}
      />
      <div style={{ padding: "2% 3% 0.5% 3%" }}>
        <Heading title={"Additional Amenities"} />
        <div className="grid-container">
          {eventamenitiesData?.map((item, index) => {
            return (
              <div className="grid-item" key={index}>
                <img
                  src={item.logo}
                  alt=""
                  style={{
                    height: "40px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
                <div className="grid-item-title">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Spaces title={"Event Types"} onClick={() => scrollToNavDiv()} />
      <Gallery
        imageData={
          windowDimensions.width < 600
            ? gallery_list[0]?.IMAGE_URLS
            : gallery_list[0]?.IMAGE_URLS?.slice(0, count - 4)
        }
        img2={
          process.env.REACT_APP_API_KEY +
          gallery_list[0]?.IMAGE_URLS[count - 4]?.path
        }
        img3={
          process.env.REACT_APP_API_KEY +
          gallery_list[0]?.IMAGE_URLS[count - 3]?.path
        }
        img4={
          process.env.REACT_APP_API_KEY +
          gallery_list[0]?.IMAGE_URLS[count - 2]?.path
        }
        img5={
          process.env.REACT_APP_API_KEY +
          gallery_list[0]?.IMAGE_URLS[count - 1]?.path
        }
        title={"Event Gallery"}
      />

      <div style={{ margin: "0 3%", marginBottom: "4%" }}>
        <SwiperComponent
          mt_heading={25}
          styles={"event_swiper_css"}
          slides={4}
          icons={filteredKeywords?.length > 3 ? true : false}
          heading={"Explore Our WorkSpace Solutions"}
          list={filteredKeywords}
          IMAGE_URL={"IMAGE_URL"}
          title={"v.TITLE"}
        >
          {filteredKeywords?.map((v, i) => (
            <SwiperSlide key={i}>
              <Card
                img_div_style={{ height: "230px" }}
                IMAGE_URL={v.IMAGE_URL}
                title={v.TITLE}
                // desc={v.DESCRIPTION}
                extra={
                  <div
                    onClick={() => {
                      navigate(
                        `/${v.TITLE?.trim()
                          ?.toLowerCase()
                          .replace(/\s+/g, "-")}`,
                        { state: { ID: v.ID } }
                      );
                      window.location.reload();
                    }}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p className="learn_more">Learn more</p>
                    <GrFormNext size={20} color="#6aadd7" />
                  </div>
                }
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
      <div id="event_form">
        <ImageForm>
          <GetInTouch />
        </ImageForm>
      </div>
    </div>
  );
};

export default EventSpace;
