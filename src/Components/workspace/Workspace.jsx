import "./css/workspace.css";
import Values from "./smallcomponent/Values";
import Meetings from "./smallcomponent/Meetings";
import Presence from "./smallcomponent/Presence";
import Amenities from "./smallcomponent/Amenities";
import Members from "./smallcomponent/Members";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import FAQ from "../../constants/FAQ";
import bannerImg from "../../assets/workspace.png";
import useWindowDimensions from "../../utils/WindowDimension";
import { base_url } from "../../context/data/myState";

const Workspace = () => {
  const { height, width, height1, width1 } = useWindowDimensions(0.49);
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState([]);
  const { getReviewList, review_list } = useContext(myContext);

  useEffect(() => {
    getReviewList("Workspace");
  }, []);

  useEffect(() => {
    const scrollToNavDiv = async () => {
      const navDiv = document.getElementById("main_contact_nav_div");
      if (navDiv) {
        await navDiv.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToNavDiv();
  }, []);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch(
          `${base_url}slider-info/pagename/Workspace`,
          { method: "GET" }
        );
        const respJson = await response.json();
        if (respJson.success) {
          setBannerData(respJson.data);
        } else {
          setBannerData([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBannerData();
  }, []);

  const scrollToNavDivv = async () => {
    await navigate("/");
    const navDiv = document.getElementById("tarrgett");
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };

  const faqData = [
    {
      question: "What are the main benefits of using a coworking space?",
      answer:
        "Coworking spaces offer numerous benefits including cost-efficiency, flexibility with various membership plans, opportunities for networking and collaboration, access to a wide range of amenities like high-speed internet, meeting rooms, and communal kitchens, as well as a dynamic and inspiring work environment that can boost productivity and creativity.",
    },
    {
      question:
        "Are there opportunities to network and collaborate within the WellWork community?",
      answer:
        "Absolutely! WellWork organises community events, and networking sessions to foster collaboration, growth, and connections among its diverse group of members. Whether you're grabbing a coffee in the lounge or singing in the karaoke room, every corner of WellWork is an opportunity to connect and collaborate.",
    },
    {
      question:
        "I want to be able to work in different places – can I change location?",
      answer:
        "Yes, with our flexible workspace solutions, you have the freedom to change locations and work from different sites within our network. Simply book space and pay on-demand, or select whether you want five, ten, or unlimited monthly visits.",
    },
    {
      question:
        "Can I access WellWork coworking spaces outside regular business hours?",
      answer:
        "Yes, WellWork offers 24/7 access to its coworking spaces for members.",
    },
    {
      question:
        "Are coworking spaces suitable for all industries and professions?",
      answer:
        "Absolutely! From buzzing tech startups, freelancers to big-league enterprises - coworking spaces offer a vibrant, dynamic environment where diverse talents converge, thrive, and spark innovation.",
    },
  ];
  return (
    <div className="workspace_main_div">
      <div
        className="about_banner"
        style={{ backgroundImage: `url(${bannerImg})`, height: height1 }}
      >
        <div className="about_banner_content">
          <h1 className="workspace_banner_heading">
            {bannerData[0]?.DYNAMIC_TEXT[0]}
          </h1>
          <button className="work_heading_button" onClick={scrollToNavDivv}>
            Get in touch
          </button>
        </div>
      </div>

      <div style={{ margin: "0 2%" }}>
        <Values />
        <Meetings />
        <Amenities />
        <Presence />
        <Members />
        <div style={{ height: 30 }}></div>
      </div>
      <div style={{ margin: "0 2% 0 1.5%" }}>
        <FAQ faqData={faqData} />
      </div>
    </div>
  );
};

export default Workspace;
