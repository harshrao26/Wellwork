import React, { useContext, useRef } from "react";
import myContext from "../../../context/data/myContext";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Members = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef();
  const { review_list } = useContext(myContext);

  return (
    review_list?.length == 0 || (
      <div className="meetingroom_review">
        <div className="meetingroom_review_heading" style={{}}>
          What Our Members Are Saying
        </div>

        <div className="meetingroom_review_arrow_div">
          <div></div>
          <div
            className="meetingroom_review_arrow_circle"
            style={{ marginLeft: "20px", display: "none" }}
            onClick={() => sliderRef.current?.slidePrev()}
          >
            <MdNavigateBefore size={30} color="#fff" />
          </div>
          <div
            className="meetingroom_review_arrow_circle"
            style={{ marginRight: "20px" }}
            onClick={() => sliderRef.current?.slideNext()}
          >
            <MdNavigateNext size={30} color="#fff" />
          </div>
        </div>
        <div className=" meetingroom_review_swiper" style={{ marginBlock: 20 }}>
          <Swiper
            ref={sliderRef}
            onSwiper={(it) => (sliderRef.current = it)}
            slidesPerView={2}
            spaceBetween={25}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {review_list?.map((v, i) => (
              <SwiperSlide key={i}>
                <div className="meetingroom_review_swiper_content">
                  <img
                    src={process.env.REACT_APP_API_KEY + v.IMAGE_URL}
                    style={{
                      height: "70px",
                      width: "70px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <div className="meetingroom_review_swiper_profile">
                    <div className="meetingroom_review_swiper_company">
                      {v.COMPANY_NAME}
                    </div>
                    <div className="meetingroom_review_swiper_name">
                      {v.PERSON_NAME},{v.DESIGNATION}
                    </div>
                    <div className="meetingroom_review_swiper_desc">
                      {v.REVIEW}
                    </div>
                  </div>
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
