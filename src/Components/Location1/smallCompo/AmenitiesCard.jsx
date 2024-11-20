import React from "react";

const AmenitiesCard = ({ image, desc }) => {
  return (
    <div className="ameneties_card_main_div">
      <div className="amenities_card_img_div">
        <img src={image} alt="" className="ameneties_card_img" />
      </div>
      <p
        className="amenities_card_desc"
        style={{ color: "#5B5050", fontSize: 14 }}
      >
        {desc}
      </p>
    </div>
  );
};

export default AmenitiesCard;
