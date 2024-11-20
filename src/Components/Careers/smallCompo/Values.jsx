import React, { useContext, useEffect, useState } from "react";
import slack from "../../../assets/careers/slack-work-chat-apps-svgrepo-com 1.png";
import forward from "../../../assets/arrow_forward_ios (1).png";
import backward from "../../../assets/arrow_back_ios.png";
import { circleData } from "../../../constants/Data";
import { base_url } from "../../../context/data/myState";

const Values = () => {
  const [flag, setFlag] = useState(0);
  const [flag1, setFlag1] = useState(0);
  // const { review_list } = useContext(myContext);
  const [review_list, setReview_list] = useState([]);
  const count = review_list?.length;
  const getReviewList = async (name) => {
    try {
      // setLoading(true);
      const responce = await fetch(
        `${base_url}reviews/list/pageName/Career`,
        { method: "GET" }
      );
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
  }, []);
  const handleFlag = () => {
    setFlag((flag + 1) % 4);
  };

  const handleFlagMinus = () => {
    setFlag((flag - 1 + 4) % 4);
  };

  const handleFlag1 = () => {
    setFlag1(flag1 == 0 ? count - 1 : flag1 - 1);
  };

  const handleFlagMinus1 = () => {
    setFlag1(count == flag1 + 1 ? 0 : flag1 + 1);
  };

  return (
    <div className="cv_main">
      <p className="cv_heading header_tittle">What Our Values Mean For You</p>
      <div className="cv_header">
        <div className="slack">
          <img src={slack} alt="" />
          <p className="slack_text">{circleData[flag].title}</p>
        </div>
        <p className="cv_header_text cv_header_text_lineHeight">
          {circleData[flag].data}
        </p>
      </div>
      <div className="cv_header_scroll">
        <div
          className="color_arrow"
          style={{ cursor: "pointer" }}
          onClick={handleFlag}
        >
          <img src={backward} alt="" />
        </div>
        <div className="cv_hr_line"></div>
        <div
          className="color_arrow"
          style={{ cursor: "pointer" }}
          onClick={handleFlagMinus}
        >
          <img src={forward} alt="" />
        </div>
      </div>
      {review_list?.length == 0 || (
        <div className="cv_team">
          <p className="cv_heading header_tittle" style={{ paddingTop: "60px" }}>
            Hear From Our Team
          </p>
          <div className="cv_header">
            <img
              src={
                process.env.REACT_APP_API_KEY + review_list[flag1]?.IMAGE_URL
              }
              style={{
                height: "280px",
                width: "280px",
                borderRadius: "50%",
              }}
              alt=""
            />
            <div style={{ marginLeft: 0 }}>
              <p className="cv_header_text" style={{ fontSize: "16px" }}>
                {review_list[flag1]?.REVIEW}
                <p className="cv_header_text" style={{ fontSize: "14px" }}>
                  - {review_list[flag1]?.PERSON_NAME} ,{" "}
                  {review_list[flag1]?.DESIGNATION}.
                </p>
              </p>
            </div>
          </div>
          <div className="cv_header_scroll" style={{ paddingBottom: "30px" }}>
            <div
              className="color_arrow"
              style={{ cursor: "pointer" }}
              onClick={handleFlag1}
            >
              <img src={backward} alt="" />
            </div>
            <div className="cv_hr_line"></div>
            <div
              className="color_arrow"
              style={{ cursor: "pointer" }}
              onClick={handleFlagMinus1}
            >
              <img src={forward} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Values;
