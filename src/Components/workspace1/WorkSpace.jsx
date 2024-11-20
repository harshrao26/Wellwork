import React, { useContext, useEffect, useRef, useState } from "react";
import "./css/work.css";
import Amenities from "./smallcompo/Amenities";
import dataTree from "../../assets/work1/data_tree__1 1.png";
import OfferingCard from "./smallcompo/OfferingCard";
import { useLocation, useNavigate } from "react-router-dom";
import FAQ from "../../constants/FAQ";
import myContext from "../../context/data/myContext";
import Heading from "../../constants/Heading";
import "../Location1/css/locations1.css";
import {
  DedicatedamenitiesData,
  PrivateamenitiesData,
  custombuiltamenitiesData,
  customfaq,
  daypassamenitiesData,
  daypassfaq,
  dedicatefaq,
  privatefaq,
} from "../../constants/brandscollections";
import Reviews from "../../constants/Reviews";
import useWindowDimensions from "../../utils/WindowDimension";
import { base_url, base_url_2 } from "../../context/data/myState";

const WorkSpace = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const { products_list, getProductsList, location_list } =
    useContext(myContext);
  const { windowDimensions } = useWindowDimensions();

  console.log("data ====", data);

  const getData = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(`${base_url_2}products/id/${state.ID}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            setData(result.data[0]);
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };
  const [review_list, setReview_list] = useState([]);
  const getReviewList = async (name) => {
    try {
      // setLoading(true);
      const responce = await fetch(`${base_url}reviews/list/pageName/Product`, {
        method: "GET",
      });
      const res = await responce.json();
      // setLoading(false);
      if (res.success) {
        setReview_list(res.data);
      } else {
        setReview_list([]);
      }
    } catch (error) {
      // setLoading(false);
    }
  };
  useEffect(() => {
    getData();
    getProductsList();
    getReviewList("Product");
    const scrollToNavDiv = async () => {
      const navDiv = document.getElementById("main_contact_nav_div");
      if (navDiv) {
        await navDiv.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToNavDiv();
  }, [id]);

  useEffect(() => {
    getData();
    getProductsList();
    getReviewList("Product");
    const scrollToNavDiv = async () => {
      const navDiv = document.getElementById("main_contact_nav_div");
      if (navDiv) {
        await navDiv.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToNavDiv();
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
      question:
        "Are there any additional fees associated with using the meeting rooms or shared amenities?",
      answer: "Yes, beyond the allocated credits, usage is chargeable.",
    },
    {
      question: "What is the security access system like for private offices?",
      answer: "Both keyless entry and manual locks are available.",
    },
    {
      question: "Can I access Private Offices in other locations?",
      answer: "Yes, but access is limited to shared amenities only.",
    },
    {
      question: "Can I customize my private office layout to suit my needs?",
      answer:
        "Yes, customization is possible with additional charges based on your preferences.",
    },
    {
      question: "How can I learn more and book a Private Office?",
      answer:
        "Explore the details on the website or download our app to get started on booking your private office—it's quick and easy!",
    },
  ];

  let filteredKeywords = products_list.filter(
    (word) => state.ID != String(word.ID)
  );

  console.log("filteredKeywords ===", filteredKeywords);

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

  return (
    <div>
      <div
        className="w1_banner"
        style={{
          backgroundSize: "100% 100%",
          backgroundImage: `url(${
            process.env.REACT_APP_API_KEY + data?.IMAGE_URL
          })`,
        }}
      >
        <div style={{ marginLeft: "5%" }}>
          <p className="w1_banner_heading">{data?.TITLE}</p>
          <p className="w1_banner_desc">{data?.DESCRIPTION}</p>
          {data?.STATUS == "1" ? (
            <button className="w1_banner_button" onClick={scrollToNavDivv}>
              Get in touch
            </button>
          ) : data?.STATUS == "2" ? (
            <a
              href="https://wellwork.engageapps.work/products"
              style={{ textDecoration: "none" }}
              className="w1_banner_button"
            >
              Book Now
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div style={{ padding: "0 2%" }}>
        <div className="smarterr" style={{ height: "360px" }}>
          <div className="smarter_content">
            <h1 className="smarter_contentt_heading">
              {data?.ID == 27
                ? "Hush The World, Conquer Your Goals. Private By Design."
                : data?.ID == 25
                ? "Level up your work life, dedicated desk style."
                : data?.ID == 26
                ? "Work Your Way, Every Day."
                : data?.ID == 28
                ? "Level up your work life, that suits your style."
                : "Hush The World, Conquer Your Goals. Private By Design."}
            </h1>
            <p className="smarter_contentt_desc" style={{ fontWeight: "400" }}>
              {data?.ID == 27
                ? "Unleash your full potential in the tranquillity of your own private haven at WellWork. Our offices are acoustically designed to silence distractions and amplify your focus. Collaborate seamlessly with colleagues or dive deep into solo projects in your dedicated space, equipped with everything you need to thrive."
                : data?.ID == 25
                ? "Designed with the modern professional in mind, you're positioned to thrive amidst a lively coworking space. It's where you can buckle down, get creative, and be part of a vibrant community. Your dedicated desk is not just a workspace—it's where your best work comes to life. Embrace the blend of top-notch amenities, cutting-edge design, and the dynamic energy of WellWork."
                : data?.ID == 26
                ? "At DayPass, we're rewriting the rules of traditional workspaces, offering a refreshing alternative designed to fuel your creativity, ignite your productivity, and elevate your workday experience. With our DayPass membership, you gain exclusive access to a diverse community of like-minded individuals, a plethora of amenities, and a stimulating work environment. "
                : data?.ID == 28
                ? `Imagine a workspace that's as unique as your fingerprint, meticulously sculpted to fit not just your operational needs but also your aesthetic desires. At WellWork, "Custom Built" is not just about spaces; it’s where your vision takes centre stage. It's about creating ecosystems that breathe your brand's ethos and embody your work culture.`
                : "Designed with the modern professional in mind, you're positioned to thrive amidst a lively coworking space. It's where you can buckle down, get creative, and be part of a vibrant community. Your dedicated desk is not just a workspace—it's where your best work comes to life. Embrace the blend of top-notch amenities, cutting-edge design, and the dynamic energy of WellWork."}
            </p>
          </div>
          <div className="tree">
            <img src={dataTree} alt="" style={{ maxWidth: "100%" }} />
          </div>
        </div>
        <Amenities
          data={
            data?.ID == 27
              ? PrivateamenitiesData
              : data?.ID == 25
              ? DedicatedamenitiesData
              : data?.ID == 26
              ? daypassamenitiesData
              : custombuiltamenitiesData
          }
        />

        <div className="offering_main_div">
          <Heading title={`Our ${data?.TITLE} Across Hyderabad`} />
          <div style={{ width: "100%", margin: "0% 0% 2% 0%" }}>
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
            }}
          >
            {location_list?.map((e, i) => (
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

      <div style={{ marginTop: windowDimensions.width < 600 ? 0 : 60 }} />
      <Reviews list={review_list} />
      <div style={{ padding: "1% 1%" }}>
        <FAQ
          faqData={
            data?.ID == 27
              ? privatefaq
              : data?.ID == 25
              ? dedicatefaq
              : data?.ID == 26
              ? daypassfaq
              : data?.ID == 28
              ? customfaq
              : faqData
          }
        />
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
                className="offering_card_main_divvv"
                style={{ width: "33%" }}
              >
                <img
                  src={process.env.REACT_APP_API_KEY + offering?.IMAGE_URL}
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                  className="offerinnng_card_image"
                />
                <div className="explore_workspace">
                  <div className="explore_workspace_title">
                    {offering?.TITLE}
                  </div>
                  <div className="explore_workspace_desc">
                    {/* {offering?.DESCRIPTION} */}
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
                    {/* <button
                      className="offering_button"
                      style={{ background: "#6aadd7" }}
                    >
                      BOOK NOW
                    </button> */}
                    {offering?.STATUS == "1" ? (
                      <button
                        className="offering_button"
                        onClick={scrollToNavDivv}
                      >
                        Get in touch
                        {/* Enquire Now */}

                      </button>
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
                        setId(offering?.ID);
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

export default WorkSpace;
