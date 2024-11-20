import React, { useContext, useEffect } from "react";
import Enquiry from "./smallcompo/Enquiry";
import Banner from "./smallcompo/Banner";
import Reviews from "./smallcompo/Reviews";
import GetInTouch from "./smallcompo/GetInTouch";
import myContext from "../context/data/myContext";
import { SwiperSlide } from "swiper/react";
import { useLocation, useNavigate } from "react-router";
import SwiperComponent, { Card } from "../constants/SwiperComponent";
import Heading from "../constants/Heading";
import BannerForm from "./smallcompo/BannerForm";
import useWindowDimensions from "../utils/WindowDimension";
import New from './New.jsx'
const Home = () => {
  const { height1 } = useWindowDimensions(0.45);

  const {
    getReviewList,
    chooseAltis_list,
    location_list,
    getBrandsList,
    company_logos,
  } = useContext(myContext);



  console.log("location_list ===",location_list);

  useEffect(() => {
    getBrandsList("Home");
    getReviewList("Home");
  }, []);

  const navigate = useNavigate();

  return (
    <>

      <New />
      <Banner />
      <div className="home_banner_form">
        <BannerForm />
      </div>
      <div style={{ padding: "0 3% 0 3%" }}>
        <Enquiry />
      </div>
      <div style={{ padding: "0 4% " }}>
        {location_list?.length == 0 || (
          <SwiperComponent
            mt_heading={20}
            styles={"home_swiper_carausel"}
            slides={3}
            icons={true}
            heading={"Choose from multiple locations across Hyderabad"}
          >
            {location_list?.map((v, i) => (
              <SwiperSlide key={i}>
                <Card
                  img_div_style={{
                    height: height1 > 170 ? "40vh" : height1 /* "40vh" */,
                  }}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/locations/hyderabad/${v.LOCATION_NAME}`, {
                      state: v,
                    })
                  }
                  IMAGE_URL={v?.IMAGE_URLS[0]?.path}
                  title={v.B_NAME}
                  desc={v.LOCATION_NAME}
                />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        )}

        {chooseAltis_list?.length == 0 || (
          <SwiperComponent
            mt_heading={20}
            styles={"home_swiper_carausel"}
            slides={3}
            icons={chooseAltis_list?.length > 3 ? true : false}
            heading={"Why Choose WellWork"}
          >
            {chooseAltis_list?.map((v, i) => (
              <SwiperSlide key={i}>
                <Card
                  img_div_style={{
                    height: height1 > 170 ? "40vh" : height1 /* "40vh" */,
                  }}
                  IMAGE_URL={v.IMAGE_URL}
                  title={v.IMAGE_NAME}
                  desc={v.DESCRIPTION}
                />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        )}
      </div>
      <Reviews />

      <div style={{ padding: "2% 3% 1% 3%" }}>
        <Heading title={"Trusted Brands"} />
        <div className="grid-container">
          {company_logos?.slice(0, 8).map((e) => {
            return (
              <div className="grid-item">
                <img
                  // src={process.env.REACT_APP_API_KEY + e.LOGO_URL}
                  src={process.env.REACT_APP_API_KEY + e.LOGO_URL}

                  alt=""
                  style={{ height: "auto", width: "80%", objectFit: "contain" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div id="targetSection" style={{ padding: "1px 0 0 3%" }}>
        <GetInTouch />
      </div>
    </>
  );
};
export default Home;
