import React, { useContext, useEffect } from "react";
import "./css/locations1.css";
import BookTour from "./smallCompo/BookTour";
import Offerings from "./smallCompo/Offerings";
import Amenities from "./smallCompo/Amenities";
import { useLocation, useParams } from "react-router-dom";
import MapCard from "./smallCompo/MapCard";
import FAQ from "../../constants/FAQ";
import myContext from "../../context/data/myContext";
import CustomBanner from "../../constants/CustomBanner";
import useWindowDimensions from "../../utils/WindowDimension";

const Location1 = () => {
  const { height, width, height1, width1 } = useWindowDimensions(0.49);
  const { getAmentiesFaciList, getLocationList } = useContext(myContext);
  const params = new useParams();
  const { name } = params;
  const { state } = useLocation();
  console.log("state ===",state);

  useEffect(() => {
    getLocationList();
    getAmentiesFaciList(state?.LOCATION_NAME);
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

  const MPMCorporateOffice = {
    description:
      "A beacon of modern business, blending cutting-edge design with strategic location.",
    address:
      "Plot No.44, 5th Floor, Jayabheri Pine Valley Colony, Gachibowli, Hyderabad – 500032, Telangana",
    email: "info@wellwork.space",
    phone: "+91 9121318476",
    timings: "Mon - Sat: 10:00 - 19:00",
    transport: {
      raidurgMetroStation: "2.5 Km",
      lumbiniAvenueBusStop: "0.8 Km",
      ORR: "1.2 Km",
    },
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
    <div>
      <CustomBanner
        imageData={state?.IMAGE_URLS}
        height={height1}
        // height={width < 500 ? "40vh" : width < 1100 ? "50vh" : "90vh"}
      />
      <BookTour name={name} data={state} />
      <div style={{ margin: "0 2%" }}>
        <Offerings name={name} data={state} LOCATION_TITLE={name} />
        <Amenities name={name} content={MPMCorporateOffice} />
      </div>
      <div style={{ maxHeight: "550px", paddingTop: "25px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.6344594507!2d78.43927353766432!3d17.420556720666898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9734c9d9cbc9%3A0xb311480eeb3c80d0!2sMPM%20Timesquare%20Mall!5e0!3m2!1sen!2sin!4v1707978098759!5m2!1sen!2sin"
          width={"100%"}
          title={state?.LOCATION_NAME}
          height={550}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <MapCard content={MPMCorporateOffice} data={state} />
      </div>
      <div style={{ margin: "0 1% 0 1%", marginTop: "2%" }}>
        <FAQ faqData={faqData} />
      </div>
    </div>
  );
};

export default Location1;
