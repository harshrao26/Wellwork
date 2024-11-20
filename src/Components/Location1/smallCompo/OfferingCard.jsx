import React from "react";
import { Link, useNavigate } from "react-router-dom";

const OfferingCard = ({ image, content = {} }) => {
  const navigate = useNavigate();
  console.log("content =====",content);

  const scrollToNavDiv = async () => {
    await navigate("/");
    const navDiv = document.getElementById("targetSection");
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };
  return (
    <div className="offering_card_main_div" style={{ minWidth: "280px" }}>
      <img
        src={image}
        alt=""
        className="offering_card_image"
        style={{ width: "280px", height: "200px" }}
      />
      <div className="explore_workspace" style={{ minWidth: "280px" }}>
        <div className="explore_workspace_title">{content.TITLE}</div>
        <div className="explore_workspace_desc">
          {content?.ID == 27
            ? "Achieve like a visionary"
            : content?.ID == 25
            ? "Own your focus."
            : content?.ID == 26
            ? "Plug in, network, and thrive."
            : content?.ID == 28
            ? "Your vision, your space."
            : content?.ID == 29
            ? "Empower your collaborations."
            : content?.ID == 30
            ? "Create lasting memories."
            : "Achieve like a visionary"}
        </div>
        <div className="offering_card_buttons" style={{ gap: "0" }}>
        {content?.STATUS == "1" ? (
            <button className="offering_button" onClick={scrollToNavDiv} >
              Get in touch
            </button>
          ) : (
            content?.STATUS == "2"?
            <a  
            href="https://wellwork.engageapps.work/products"  style={{textDecoration:"none"}} className="offering_button">Book Now</a>
          :"")}
          {/* <button className="offering_button">Book Now</button> */}
          <div
            style={{
              textDecoration: "none",
              width: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "26px",
              background: "none",
              color: "#6aadd7",
            }}
            onClick={() =>
              navigate(
                `/${content?.TITLE?.trim()
                  ?.toLowerCase()
                  .replace(/\s+/g, "-")}`,
                { state: content }
              )
            }
            // to={`/${content?.TITLE?.trim()
            //   ?.toLowerCase()
            //   .replace(/\s+/g, "-")}`}
            className="offering_button"
          >
            Explore More
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingCard;

{
  /* <div className="offering_card_contentt" style={{ minWidth: "280px" }}>
        <p className="offering_card_title">{content.TITLE}</p>
        <div className="offering_card_desc1">
          {content?.ID == 27
            ? "Achieve like a visionary"
            : content?.ID == 25
            ? "Own your focus."
            : content?.ID == 26
            ? "Plug in, network, and thrive."
            : content?.ID == 28
            ? "Your vision, your space."
            : content?.ID == 29
            ? "Empower your collaborations."
            : content?.ID == 30
            ? "Create lasting memories."
            : "Achieve like a visionary"}
        </div>
        <div
          className="offering_card_buttons"
          style={{ gap: "0", marginTop: 10 }}
        >
          <button className="offering_button">Book Now</button>
          <div
            style={{
              textDecoration: "none",
              width: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "26px",
              background: "none",
              color: "#6aadd7",
            }}
            onClick={() =>
              navigate(
                `/${content?.TITLE?.trim()
                  ?.toLowerCase()
                  .replace(/\s+/g, "-")}`,
                { state: content }
              )
            }
            // to={`/${content?.TITLE?.trim()
            //   ?.toLowerCase()
            //   .replace(/\s+/g, "-")}`}
            className="offering_button"
          >
            Explore More
          </div>
        </div>
      </div> */
}
