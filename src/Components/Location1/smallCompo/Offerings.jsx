import React, { useContext, useRef } from "react";
import { useParams } from "react-router-dom"; // Import useParams from React Router
import OfferingCard from "./OfferingCard";
import Heading from "../../../constants/Heading";
import myContext from "../../../context/data/myContext";

const Offerings = ({ text, data = {}, LOCATION_TITLE }) => {
  const { products_list } = useContext(myContext);
  let { name } = useParams(); // Retrieve location from URL parameters using useParams
  if (!name) {
    name = text;
  }

  const containerRef = useRef(null);
  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 340; // Adjust this value based on your preference
    // const scrollAmount = 292; // Adjust this value based on your preference

    if (container) {
      let newScroll = container.scrollLeft;
      newScroll += direction * scrollAmount;
      container.scrollTo({
        left: newScroll,
        behavior: "smooth", // Add smooth scrolling effect
      });
    }
  };

  var filteredKeywords = products_list?.filter((word) =>
    data?.PRODUCTS_IDS?.includes(String(word.ID))
  );

  return (
    <div className="offering_main_div">
      <div style={{ height: 20, width: "100%", display: "flex" }}></div>
      <Heading
        icons={true}
        title={`Our Workspace Solutions At ${LOCATION_TITLE}`}
        onBackClick={() => handleScroll(-1)}
        onNextClick={() => handleScroll(1)}
      />

      <div
        className="offering_cards"
        style={{ gap: "20px" }}
        ref={containerRef}
      >
        {filteredKeywords?.map((offering, index) => (
          <OfferingCard
            key={index}
            image={process.env.REACT_APP_API_KEY + offering?.IMAGE_URL}
            content={offering}
          />
        ))}
      </div>
    </div>
  );
};

export default Offerings;
