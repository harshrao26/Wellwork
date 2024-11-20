import React from "react";
import line from "../../../assets/Line 1.png";
const Card = ({ img, title, desc, product }) => {
  return (
    <div className="more_card_component" style={{ minWidth: "380px" }}>
      <img
        className="card_image_more imggg"
        style={{ width: "100%", height: "300px" }}
        src={`${process.env.REACT_APP_API_KEY}${product.IMAGE_URL}`}
        alt=""
      />
      <div style={{ display: "flex", gap: "5px" }}>
        {/* <img
          src={line}
          style={{
            height: "25px",
            width: "4px",
            alignItems: "center",
            marginTop: "10px",
          }}
          alt=""
        /> */}
        <p className="card_title_more" style={{ fontSize: "20px" }}>
          {product?.DYNAMIC_TEXT[0]}
        </p>
      </div>
      <p className="card_desc_more">{product?.DYNAMIC_TEXT[1]}</p>
    </div>
  );
};

export default Card;
