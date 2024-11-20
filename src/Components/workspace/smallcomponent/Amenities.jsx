import React from "react";
import { amenitiesData } from "../../../constants/brandscollections";

const Amenities = () => {
  return (
    <div className="main_amenities_component">
      <p
        className="amenities_heading"
        // style={{ paddingBottom: "0", paddingTop: "30px" }}
      >
        Shared Amenities
      </p>
      <div /* className="ameneties_elements" */ className="grid-container">
        {amenitiesData.map((item) => {
          return (
            <div className="grid-item">
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
