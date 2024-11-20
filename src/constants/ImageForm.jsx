import React from "react";

import get_image from "../assets/career_get.jpg";

const ImageForm = ({ children }) => {
  return (
    <div className="image_form_main">
      <div
        className="image_form_image"
        style={{
          backgroundImage: `url(${get_image})`,
          backgroundSize: "100% 100%",
          marginBottom: "280px",
        }}
      ></div>
      <div className="image_form_inner">{children}</div>
    </div>
  );
};

export default ImageForm;
