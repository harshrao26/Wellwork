import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../utils/utils";

const Banner = () => {
  const scrollToNavDiv = async () => {
    const navDiv = document.getElementById("joinus");
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };
  return (
    <div className="career_banner">
      <div className="career_banner_inner_div">
        <p className="career_banner_heading">Do what you love at WellWork</p>
        <p className="career_banner_text" style={{ marginTop: "5px" }}>
          Discover your career path at WellWork.
        </p>

        <button
          className="career_banner_button"
          style={{ textDecoration: "none", marginBottom: "7px" }}
          onClick={scrollToNavDiv}
        >
          Join Us
        </button>
        {/* <Link className='career_anchor' to={'#'} >Important note</Link> */}
      </div>
    </div>
  );
};

export default Banner;
