import React, { useEffect, useRef, useState } from "react";
import "./css/enquiry.css";
import EnquiryCard from "./EnquiryCard";
import backArrow from "../../assets/arrow_back_ios.png";
import forwardArrow from "../../assets/arrow_forward_ios (1).png";
import Heading from "../../constants/Heading";
import { base_url_2 } from "../../context/data/myState";

const Enquiry = () => {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);
  console.log("data ====",data);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(
          // `${"https://altisapi.workataltis.com/api/"}products/list`,
          `${base_url_2}products/list`,

          {
            method: "GET",
          }
        );
        const respJson = await resp.json();
        await setData(respJson.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container && container.children.length > 0) {
      const firstChildWidth = container.children[0].offsetWidth + 20;
      // Adjust this value based on your preference
      const scrollAmount = firstChildWidth;

      let newScroll = container.scrollLeft;
      newScroll += direction * scrollAmount;

      container.scrollTo({
        left: newScroll,
        behavior: "smooth", // Add smooth scrolling effect
      });
    }
  };

  return (
    <div className="main_enquiry_component">
      <div style={{ paddingInline: "30px" }}>
        <Heading
          icons={true}
          onBackClick={() => handleScroll(-1)}
          onNextClick={() => handleScroll(1)}
          title={"Redefining Your Workspace Experience"}
          // title={"Discover Your Ideal Workspace"}
        />
      </div>

      {data?.length != 0 && (
        <div className="carousel_item_main" ref={containerRef}>
          {data
            ?.filter((v) => v.ID != 30)
            ?.map((e, index) => {
              return <EnquiryCard key={index} keyy={index} content={e} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Enquiry;
