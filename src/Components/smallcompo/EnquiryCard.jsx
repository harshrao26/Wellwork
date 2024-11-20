import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EnquiryCard = ({ content }) => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const scrollToNavDiv = () => {
    const navDiv = document.getElementById("targetSection");
    if (navDiv) {
      navDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {content && (
        <div className="solution_details">
          <div
            style={{
              flex: 1,
              padding: "10px 20px 0 20px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
            onClick={() =>
              navigate(
                `/${content?.TITLE?.trim()
                  ?.toLowerCase()
                  .replace(/\s+/g, "-")}`,
                { state: content }
              )
            }
          >
            <img
              className="solution_image"
              src={`${process.env.REACT_APP_API_KEY}${content.IMAGE_URL}`}
              loading="lazy"
            />

            <div className="solution_heading" style={{ color: "#5b5050" }}>
              {content.TITLE}
            </div>
            <div className="solution_description"> {content.DESCRIPTION}</div>
            <div className="solution_subheading">KEY FEATURES</div>
            <ul className="solution_points">
              {content?.FEATURES.map((e) => (
                <li
                  style={{ listStyle: "disc", color: "#5b5050", fontSize: 14 }}
                >
                  {e}
                </li>
              ))}
            </ul>
            {/* </Link> */}
          </div>
          <div className="enquire_button">
            {content?.STATUS == "1" ? (
              <p
                onMouseOver={() => setFlag(true)}
                onMouseLeave={() => setFlag(false)}
                onClick={scrollToNavDiv}
                className="enquire_now_text"
                style={{
                  textDecoration: `${flag ? "underline" : "none"}`,
                  color: "#6aadd7",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              >
                Enquire Now
              </p>
            ) : (
              <a
                onMouseOver={() => setFlag(true)}
                onMouseLeave={() => setFlag(false)}
                // onClick={scrollToNavDiv}
                href="https://wellwork.engageapps.work/products"
                className="enquire_now_text"
                style={{
                  textDecoration: `${flag ? "underline" : "none"}`,
                  color: "#6aadd7",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              >
                Book Now
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryCard;
