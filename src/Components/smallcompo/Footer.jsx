import React, { useState } from "react";
import "./css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import meeting from "../../assets/imgpsh_fullsize_anim.jpg";
import { Link, useNavigate } from "react-router-dom";
import vector from "../../assets/shutterstock_2338120081.jpg";
import arrow from "../../assets/arroww.png";
import Referrals from "../referrals/Referrals";
import Partnership from "../partnership/Partnership";
import { FaAppStore, FaXTwitter } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";

const Footer = () => {
  const navigate = useNavigate();
  const [refer, setRefer] = useState(false);
  const [partner, setPartner] = useState(false);

  return (
    <div className="footer_main_component">
      <div
        className="left-contentt"
        style={{
          // height: "430px",
          backgroundImage: `url(${meeting})`,
          display: "flex",
          alignItems: "flex-start",
          padding: "30px",
        }}
      >
        <img
          style={{ marginLeft: "auto", maxWidth: "100%" }}
          src={vector}
          alt=""
        />
        <div style={{ marginTop: "auto" }}>
          <p className="text-wrapper">WellWork in your Inbox!</p>
        </div>
        <div className="email-form">
          <input
            className="email_form_input"
            type="text"
            placeholder="Enter your email address ..."
            style={{
              background: "none",
              color: "white",
              outline: "none",
              fontSize: "16px",
            }}
          />
          <img
            style={{ cursor: "pointer", paddingLeft: "65px" }}
            src={arrow}
            alt=""
          />
        </div>
      </div>
      <div className="frame">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className="frame_title">Let’s Keep in Touch!</p>
          <p className="frame_desc">
            Drop your details and become part of our vibrant coworking family.
            Let's build connections that last! A call is all it takes to find
            your dream workspace!
          </p>
        </div>

        <div className="socials">
          <FontAwesomeIcon
            icon={faPhone}
            color="#5B5050"
            className="social_icon_i"
            style={{
              marginBottom: "10px",
            }}
          />
          <p style={{ cursor: "pointer" }} className="desc">
            +91 9121318476/ 9100019981
          </p>
        </div>

        <div className="socials" style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            className="social_icon_i"
            icon={faEnvelope}
            color="#5B5050"
            style={{
              marginBottom: "10px",
              marginTop: "12px",
            }}
          />
          <Link
            to={"mailto:info@wellwork.space"}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#5B5050",
              fontWeight: "600",
            }}
            className="desc"
          >
            info@wellwork.space
          </Link>
        </div>

        <hr
          style={{ border: "1px solid #6f6b6b", width: "83%", marginLeft: "0" }}
        />
        <div className="footer_main">
          <div className="sections">
            <p className="section_title">Company</p>
            <Link
              to={"/aboutus"}
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "10px",
              }}
            >
              About Us
            </Link>
            <div
              onClick={async () => {
                navigate(`/career`);
                const navDiv = document.getElementById("career_page");
                if (navDiv) {
                  await navDiv.scrollIntoView({ behavior: "instant" });
                }
              }}
              style={{ textDecoration: "none" }}
            >
              Careers
            </div>
          </div>
          <div className="sections">
            <p className="section_title">Community</p>
            <div
              onClick={() =>
                navigate(`/${"event-space"}`, { state: { ID: 30 } })
              }
              style={{ textDecoration: "none" }}
            >
              Event
            </div>
            <p
              onClick={() => {
                setRefer(true);
              }}
            >
              Referrals
            </p>
          </div>

          <div className="sections">
            <p className="section_title">Resources</p>
            <p style={{ paddingTop: "5px" }}>Blog</p>
            <p
              style={{ textDecoration: "none" }}
              onClick={() =>
                /* setPartner(true) */ window.open(
                  "mailto:info@wellwork.space?subject=&body="
                )
              }
            >
              Partnership
            </p>
          </div>
          <div className="sections">
            <p className="section_title">More...</p>
            <Link
              to={"/policies"}
              style={{ paddingTop: "2px", textDecoration: "none" }}
            >
              Policies
            </Link>
            {/* <Link
              to={"/term-and-conditions"}
              style={{
                textDecoration: "none",
                display: "block",
                marginTop: "9px",
              }}
            >
              T & C
            </Link> */}
            <Link
              to={"/refund-policies"}
              style={{
                textDecoration: "none",
                display: "block",
                marginTop: "9px",
              }}
            >
              Refund Policy
            </Link>
          </div>
        </div>
        {refer && <Referrals setRefer={setRefer} />}
        {partner && <Partnership setPartner={setPartner} />}
        <div
          style={{
            background: "#FAF9F9",
            height: "fit-content",
            marginTop: "10%",
            width: "83%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            padding: "4px 0",
          }}
        >
          <div
            className="social_icon"
            style={{ marginTop: "", paddingTop: "" }}
          >
            {/* <FontAwesomeIcon
              onMouseOver={() => setFlag(true)}
              onMouseLeave={() => setFlag(false)}
              style={{ color: `${flag === false ? "black" : "#6aadd7"}` }}
              icon={faTwitter}
            /> */}

            <FaXTwitter
              onClick={() => {
                window.open("https://x.com/wellworkspace", "_blank");
              }}
              className="social_icon_i"
            />

            <FontAwesomeIcon
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=61562268507133",
                  "_blank"
                );
              }}
              className="social_icon_i"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/company/wellworkspace",
                  "_blank"
                );
              }}
              className="social_icon_i"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              onClick={() => {
                window.open(
                  " https://www.instagram.com/wellwork.space/",
                  "_blank"
                );
              }}
              className="social_icon_i"
              icon={faInstagram}
            />
            <BiLogoPlayStore
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=engage.workaltis&pcampaignid=web_share",
                  "_blank"
                );
              }}
              className="social_icon_i"
            />
            <FaAppStore
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=engage.workaltis&pcampaignid=web_share",
                  "_blank"
                );
              }}
              className="social_icon_i"
            />
          </div>
          <p
            className="footer_textt"
            style={{ paddingBottom: "", margin: "0" }}
          >
            © Copyright 2011 - {new Date().getFullYear()} wellwork.space. All
            rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
