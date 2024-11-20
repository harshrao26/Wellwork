import React from "react";

const OfferingCard = ({ image, onClick, B_NAME, LOCATION_NAME }) => {
  return (
    <div className="offering_card_main_divvv" style={{ width: "33%" }}>
      <img
        src={image}
        style={{ width: "100%", height: 250 }}
        alt=""
        className="offerinnng_card_image"
      />

      <div className="offering_card_contentt">
        <div className="explore_workspace_title">{B_NAME}</div>
        <div className="offering_card_buttons">
          <button className="offering_button" style={{ background: "#6aadd7" }}>
            BOOK NOW
          </button>
          <button
            className="offering_button"
            style={{ background: "none", color: "#6aadd7" }}
            onClick={onClick}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferingCard;
