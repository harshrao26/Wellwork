import React, { useState } from "react";
import awards from "../../../assets/careers/awards.jpg";
import building from "../../../assets/careers/building.jpg";
import wellness from "../../../assets/careers/wellness.jpg";

const Leaders = () => {
  const arr = ["Awards and Celebration", "Employee Team Building", "Wellness"];

  const imgF = (i) => {
    if (i === 0) return awards;
    else if (i === 1) return building;
    return wellness;
  };
  return (
    <div style={{ marginBottom: "40px" }}>
      <div className="hear">
        <p className="cv_heading header_tittle" style={{ paddingBlock: 10 }}>
          The WellWork Family
        </p>
        <div className="persons" style={{ marginBottom: 80 }}>
          {[0, 0, 0].map((e, i) => (
            <div className="persons_image">
              <button className="persons_button" style={{ minWidth: "260px" }}>
                {arr[i]}
              </button>
              <img src={imgF(i)} alt="" style={{ borderRadius: 10 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaders;
