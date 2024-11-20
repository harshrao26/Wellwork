import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Heading from "../../../constants/Heading";
import { base_url } from "../../../context/data/myState";

const More = () => {
  const containerRef = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${base_url}slider-info/pagename/Whyaltis`
        );
        const respJson = await response.json();
        const filteredData = respJson.data.filter(
          (e) => e.STATIC_TEXT === "More Than WorkSpace"
        );

        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 440; // Adjust this value based on your preference   //shubham,
    // const scrollAmount = 384; // Adjust this value based on your preference

    if (container) {
      let newScroll = container.scrollLeft;
      newScroll += direction * scrollAmount;
      container.scrollTo({
        left: newScroll,
        behavior: "smooth", // Add smooth scrolling effect
      });
    }
  };

  return (
    <div className="more_main_component">
      <div style={{ marginInline: 13 }}>
        <Heading
          title={"More Than Workspace"}
          onBackClick={() => handleScroll(-1)}
          onNextClick={() => handleScroll(1)}
          icons={true}
        />
      </div>

      <div
        className="more_carousel"
        style={{ marginTop: 20 }}
        ref={containerRef}
      >
        {data.map((e) => (
          <Card img={e.img} title={e.title} desc={e.desc} product={e} />
        ))}
      </div>
    </div>
  );
};

export default More;
