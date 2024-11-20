import React, { useContext, useRef, useState } from "react";
import "./css/review.css";
import myContext from "../../context/data/myContext";
import Heading from "../../constants/Heading";
import { GrNext, GrPrevious } from "react-icons/gr";
import useWindowDimensions from "../../utils/WindowDimension";

const Reviews = () => {
  const { height1, fontSize } = useWindowDimensions(0.45);
  const containerRef = useRef(null);
  const [flag, setFlag] = useState(0);
  const { review_list } = useContext(myContext);
  const count = review_list?.length;
  const handleMinus = () => {
    setFlag(flag == 0 ? count - 1 : flag - 1);
  };

  const handlePlus = () => {
    setFlag(count == flag + 1 ? 0 : flag + 1);
  };

  return (
    <>
      <Heading title={"Testimonials"} />
      <div className="testimonial_main">
        <div className="testimonial_arrow">
          <GrPrevious size={20} color="#fff" onClick={handleMinus} />
        </div>

        <div className="testimonial_main_review">
          <p
            className="testimonial_main_review_text"
            style={{
              fontSize:
                fontSize > 27 ? "25px" : fontSize < 18 ? "18px" : fontSize,
            }}
          >
            {review_list[flag]?.REVIEW}
          </p>
          <br />
          <div>
            <p
              style={{
                fontSize:
                  fontSize > 25 ? "25px" : fontSize < 16 ? "16px" : fontSize,
                margin: "0",
              }}
              className="testimonial_main_review_text"
            >
              {review_list[flag]?.PERSON_NAME}
            </p>
            <p
              style={{
                fontSize:
                  fontSize > 25 ? "25px" : fontSize < 16 ? "16px" : fontSize,
                marginTop: "5px",
              }}
              className="testimonials_designation"
            >
              {review_list[flag]?.DESIGNATION} ({review_list[flag]?.COMPANY_NAME}
              )
            </p>
          </div>
        </div>
        <div className="testimonial_arrow">
          <GrNext size={20} color="#fff" onClick={handlePlus} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
