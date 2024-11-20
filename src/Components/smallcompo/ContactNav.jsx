import React, { useEffect, useState } from "react";
import "./css/cnav.css";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../Auth/Auth";
import { MdCall } from "react-icons/md";
import useWindowDimensions from "../../utils/WindowDimension";

const ContactNav = () => {
  const { windowDimensions } = useWindowDimensions();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const scrollToNavDiv = async () => {
    await navigate("/");
    const navDiv = document.getElementById("targetSection");
    console.log(navDiv);
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className="main_contact_nav_div" id="main_contact_nav_div">
      <div className="main_contact_nav_buttons">
        {windowDimensions.width < 600 || (
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <MdCall size={18} color="#5b5050" />
            <a href="tel:+919121318476" style={{textDecoration:"none"}} className="main_contact_nav_second">
              +91 9121318476
            </a>
          </div>
        )}
        <button
          style={{ textDecoration: "none" }}
          className="main_contact_nav_first"
          onClick={scrollToNavDiv}
        >
          Contact Us 
        </button>
        {/* <button
          className="main_contact_nav_second"
          // onClick={() => setFlag(true)}
        >
          Login
        </button> */}
      </div>
      {flag && <Auth setFlag={setFlag} />}
    </div>
  );
};

export default ContactNav;
