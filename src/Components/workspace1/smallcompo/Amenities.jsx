import React from "react";
import { amenitiesData } from "../../../constants/brandscollections";

const Amenities = ({ data = [] }) => {
  return (
    <div className="main_amenities_component">
      <p
        className="amenities_heading"
        style={{ margin: "0", paddingBottom: "3%" }}
      >
        Additional Amenities
      </p>
      <div className="grid-container">
        {data.map((item) => {
          return (
            <div className="grid-item" style={{ marginBottom: "7%" }}>
              <img
                src={item.logo}
                alt=""
                style={{
                  height: "40px",
                  width: "40px",
                  objectFit: "contain",
                }}
              />
              <div className="grid-item-title">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
