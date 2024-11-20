import React, { useContext, useEffect, useRef, useState } from "react";
import OfferingCard from "./smallcompo/OfferingCard";
import dataTree from "../../assets/work1/data_tree__1 1.png";
import { meetingsamenitiesData } from "../../constants/brandscollections";
import { useLocation, useNavigate } from "react-router-dom";
import FAQ from "../../constants/FAQ";
import myContext from "../../context/data/myContext";
import Heading from "../../constants/Heading";
import "../../App.css";
import Reviews from "../../constants/Reviews";
import useWindowDimensions from "../../utils/WindowDimension";
import { base_url } from "../../context/data/myState";

const DedicatedDesk = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { products_list, getProductsList, location_list } =
    useContext(myContext);
  const { windowDimensions } = useWindowDimensions();
  const [review_list, setReview_list] = useState([]);
  const getReviewList = async (name) => {
    try {
      const responce = await fetch(`${base_url}reviews/list/pageName/Product`, {
        method: "GET",
      });
      const res = await responce.json();

      if (res.success) {
        setReview_list(res.data);
      } else {
        setReview_list([]);
      }
    } catch (error) {}
  };
  const getData = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(`${base_url}products/id/${state.ID}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            setData(result.data[0]);
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };
  useEffect(() => {
    getData();
    getProductsList();
    getReviewList("Product");
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

  const bookNowNavigate = async () => {
    // await navigate("/");
    // const navDiv = document.getElementById("tarrgett");
    // if (navDiv) {
    //   await navDiv.scrollIntoView({ behavior: "instant" });
    // }
    window.location.href = "https://wellwork.engageapps.work/products";
  };

  let filteredKeywords = products_list.filter(
    (word) => state.ID != String(word.ID)
  );

  console.log("filteredKeywords ====", filteredKeywords);

  const meetingRoomsData = {
    title: "Meeting Rooms",
    bannerText: "Elevate your next gathering in our smart spaces.",
    buttonText: "Book Now",
    treeWords: ["Think Tank", "Strategize", "Inspiring", "Equipped"],
    description:
      "Reserve your space, gather your crew, and watch your vision soar. Our meeting rooms are more than just venues—they're innovation hubs where collaboration thrives and ideas take flight. Infused with wellness principles and designed to support a harmonious work-life balance, our spaces are crafted to inspire and energize. Experience a setting where intellectual synergy meets aesthetic brilliance, transforming ideas into breakthrough solutions and making every meeting a step toward success.",
    additionalAmenities: [
      "Flexible Booking",
      "Printing Services",
      "Air Conditioning",
      "AV Meeting Rooms",
      "Fully Equipped",
      "Complimentary Coffee/Tea",
      "High-Speed Connectivity",
      "Access to Shared Amenities",
    ],
    locations: [
      {
        title: "Gachibowli",
        desc: "MPM Corporate Office, Plot No.44, 5th Floor, Jayabheri Pine Valley Colony, Gachibowli, Hyderabad – 500032, Telangana.",
      },
      {
        title: "Ameerpet",
        desc: "MPM GRAND, PLOT NO – 8-3-323, AMEERPET ‘X’ ROADS, YELLAREDDYGUDA, HYDERABAD, 500073",
      },
      {
        title: "Banjara Hills",
        desc: "MPM TIMES SQUARE, SY NO – 116/2, PLOT NO – 1 T04, RD NO – 1, MPM TIMES SQUARE, BANJARA HILLS, KHAIRATABAD, HYDERABAD, 500034",
      },
    ],
    faq: [
      {
        question: "What equipment comes included in your meeting rooms?",
        answer:
          "Our meeting rooms come equipped with an AV screen and whiteboard.",
      },
      {
        question: "What is the minimum booking time for meeting rooms?",
        answer: "Meeting rooms can be booked for a minimum of 1 hour.",
      },
      {
        question: "Do you offer catering or additional services for meetings?",
        answer:
          "Yes, we offer catering and additional services through our selected food vendor.",
      },
      {
        question: "How can I learn more and book a meeting room?",
        answer:
          "Explore the details on the website or download our app to get started on booking your Meeting Room—it's quick and easy!",
      },
    ],
  };
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


  const scrollToNavDivv = async () => {
    await navigate("/");
    const navDiv = document.getElementById("tarrgett");
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div>
      <div
        className="w1_banner"
        style={{
          backgroundSize: "100% 100%",
          backgroundImage: `url(${
            process.env.REACT_APP_API_KEY + data?.IMAGE_URL
          })`,
          height:
            windowDimensions.width < 600
              ? "28vh"
              : windowDimensions.width < 800
              ? "48vh"
              : "80vh",
        }}
      >
        <div style={{ marginLeft: "5%" }}>
          <p className="w1_banner_heading">{data?.TITLE}</p>
          <p className="w1_banner_desc">{data?.DESCRIPTION}</p>
          <button
            className="w1_banner_button"
            onClick={bookNowNavigate}
            style={{ background: "#6aadd7" }}
          >
            {meetingRoomsData.buttonText}
          </button>
        </div>
      </div>
      <div >
        {/* <div className="smarterr" style={{ height: "360px" }}>
          <div className="smarter_content">
            <h1 className="smarter_contentt_heading">
              Meeting Rooms Designed for Decision-Makers
            </h1>
            <p className="smarter_contentt_desc" style={{ fontWeight: "400" }}>
              {meetingRoomsData.description}
            </p>
          </div>
          <div className="tree">
            <img src={dataTree} alt="" style={{ maxWidth: "100%" }} />
          </div>
        </div> */}
        <div style={{ padding: "0 2% 0.5% 2%" }}>
          <Heading title={"Additional Amenities"} />

          <div className="grid-container">
            {meetingsamenitiesData?.map((item, index) => {
              return (
                <div className="grid-item">
                  <img
                    src={item?.logo}
                    alt=""
                    style={{
                      height: "40px",
                      width: "40px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="grid-item-title">{item?.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="offering_main_div">
          <Heading title={"Our Meeting Rooms Across Hyderabad"} />
          <div style={{ width: "100%", marginBottom: "3%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6125421090655!2d78.36907637535245!3d17.430372283464106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f26bb80d5f%3A0x3bbaaa71d5480048!2sWORK%40ALTIS!5e0!3m2!1sen!2sin!4v1712056646020!5m2!1sen!2sin"
              width={"100%"}
              height={350}
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="offering_cards"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              // flexDirection:'column'
            }}
          >
            {location_list.map((e, i) => (
              <OfferingCard
                onClick={() =>
                  navigate(`/locations/hyderabad/${e.LOCATION_NAME}`, {
                    state: e,
                  })
                }
                key={i}
                image={process.env.REACT_APP_API_KEY + e?.IMAGE_URLS[0]?.path}
                content={e}
                B_NAME={e?.LOCATION_NAME}
                LOCATION_NAME={e?.B_DESCRIPTION}
              />
            ))}
          </div>
        </div>
      </div>

      <Reviews list={review_list} />
      <div style={{ height: 30 }}></div>
      <div style={{ padding: "0 1%" }}>
        <FAQ faqData={meetingRoomsData.faq} />
      </div>
      <div style={{ padding: "0 2%" }}>
        <div className="offering_main_div">
          <div style={{ height: 20, width: "100%", display: "flex" }}></div>
          <Heading
            icons={true}
            title={"Explore Other Workspace Solutions"}
            onBackClick={() => handleScroll(-1)}
            onNextClick={() => handleScroll(1)}
          />

          <div
            className="offering_cards"
            style={{ gap: "20px" }}
            ref={containerRef}
          >
            {filteredKeywords?.map((offering, index) => (
              <div
                className="offering_card_main_div"
                style={{ minWidth: "280px" }}
              >
                <img
                  src={process.env.REACT_APP_API_KEY + offering?.IMAGE_URL}
                  style={{ width: "280px", height: "200px" }}
                  alt=""
                  className="offerinnng_card_image"
                />
                <div className="explore_workspace" style={{}}>
                  <div className="explore_workspace_title">
                    {offering?.TITLE}
                  </div>
                  <div className="explore_workspace_desc">
                    {offering?.ID == 27
                      ? "Achieve like a visionary"
                      : offering?.ID == 25
                      ? "Own your focus."
                      : offering?.ID == 26
                      ? "Plug in, network, and thrive."
                      : offering?.ID == 28
                      ? "Your vision, your space."
                      : offering?.ID == 29
                      ? "Empower your collaborations."
                      : offering?.ID == 30
                      ? "Create lasting memories."
                      : "Achieve like a visionary"}
                  </div>
                  <div className="offering_card_buttons">
                    {offering?.STATUS == "1" ? (
                      <button className="offering_button" onClick={scrollToNavDivv}>Get in touch</button>
                    ) : offering?.STATUS == "2" ? (
                      <button
                        onClick={() => {
                          window.location.href =
                            "https://wellwork.engageapps.work/products";
                        }}
                        className="offering_button"
                      >
                        Book Now
                      </button>
                    ) : (
                      ""
                    )}
                    {/* <button
                      className="offering_button"
                      style={{ background: "#6aadd7" }}
                    >
                      BOOK NOW
                    </button> */}
                    <button
                      className="offering_button"
                      style={{ background: "none", color: "#6aadd7" }}
                      onClick={() => {
                        navigate(
                          `/${offering?.TITLE?.trim()
                            ?.toLowerCase()
                            .replace(/\s+/g, "-")}`,
                          { state: { ID: offering?.ID } }
                        );
                        window.location.reload();
                      }}
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedDesk;
