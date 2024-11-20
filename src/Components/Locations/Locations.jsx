import React, { useEffect } from "react";
import LocationsBanner from "./smallComponent/LocationsBanner";
import Map from "./smallComponent/Map";
import "./css/locations.css";

const Locations = () => {
  useEffect(() => {
    const scrollToNavDiv = async () => {
      const navDiv = document.getElementById("main_contact_nav_div");
      if (navDiv) {
        await navDiv.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToNavDiv();
  }, []);
  return (
    <div>
      <LocationsBanner />
      <Map />
    </div>
  );
};

export default Locations;
