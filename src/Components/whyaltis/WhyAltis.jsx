import React, { useContext, useEffect, useRef, useState } from "react";
import WhyAltisBanner from "./smallComponent/WhyAltisBanner";
import More from "./smallComponent/More";
import Members from "./smallComponent/Members";
import reimagined from "../../assets/whyaltis/reimagined.jpeg";
import unmatched from "../../assets/whyaltis/unmatched.jpeg";
import flexibility from "../../assets/whyaltis/flexibility.jpeg";
import communityy from "../../assets/whyaltis/communityy.jpeg";
import AboutImage from "../About/smallCompo/AboutImage";
import "./css/whyaltis.css";
import Gallery from "../../constants/Gallery";
import myContext from "../../context/data/myContext";
import Heading from "../../constants/Heading";
import useWindowDimensions from "../../utils/WindowDimension";
import { base_url } from "../../context/data/myState";

const WhyAltis = () => {
  const { windowDimensions } = useWindowDimensions();
  const targetRef = useRef(null);
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const [review_list, setReview_list] = useState([]);
  const { gallery_list, getGalleryList } = useContext(myContext);

  const getReviewList = async (name) => {
    try {
      // setLoading(true);
      const responce = await fetch(
        `${base_url}reviews/list/pageName/Why Altis`,
        { method: "GET" }
      );
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
    getGalleryList("Why Altis");
    getReviewList();
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to the target element when it comes into view
          entry.target.classList.add("sliding_element_right");
        } else {
          // Remove the class if not in view
          entry.target.classList.remove("sliding_element_right");
        }
      });
    });

    // Start observing the target element
    observer.observe(targetRef1.current);
    observer.observe(targetRef2.current);

    // Clean up
    // Clean up
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef1.current);
      }
      if (targetRef3.current) {
        observer.unobserve(targetRef2.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to the target element when it comes into view
          entry.target.classList.add("sliding_element_left");
        } else {
          // Remove the class if not in view
          entry.target.classList.remove("sliding_element_left");
        }
      });
    });

    // Start observing the target element
    observer.observe(targetRef.current);
    observer.observe(targetRef3.current);

    // Clean up
    // Clean up
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      if (targetRef3.current) {
        observer.unobserve(targetRef3.current);
      }
    };
  }, []);

  const count = gallery_list[0]?.IMAGE_URLS?.length;
  return (
    <div>
      <WhyAltisBanner />
      <div className="vision" style={{ marginTop: "50px" }}>
        <div className="vision_image" ref={targetRef1}>
          <AboutImage src={reimagined} />
        </div>
        <div className="vision_content" ref={targetRef}>
          <h1 className="smarter_content_heading">
            {/* Work Reimagined: Your Way, Your Style. */}
            Work Well, Live Well
          </h1>
          <p className="smarter_content_desc1">
            WellWork empowers you to craft your ideal workday, offering spaces and amenities that adapt to your unique style and needs. Work shouldn't define you; you define your work at WellWork.

          </p>
        </div>
      </div>
      <div className="vision1">
        <div className="vision_image sliding_element_right">
          <AboutImage src={reimagined} />
        </div>
        <div className="vision_content sliding_element_left">
          <h1 className="smarter_content_heading">
            {/* Work Reimagined: Your Way, Your Style. */}
            Work Well, Live Well
          </h1>
          <p className="smarter_content_desc1" style={{ lineHeight: "20px" }}>
            WellWork empowers you to craft your ideal workday, offering spaces and amenities that adapt to your unique style and needs. Work shouldn't define you; you define your work at WellWork.

          </p>
        </div>
      </div>
      <div className="vision">
        <div className="vision_content" ref={targetRef2}>
          <h1 className="smarter_content_heading">
            Flexibility at Your Fingertips
          </h1>
          <p className="smarter_content_desc1" style={{ lineHeight: "20px" }}>
            {/* Say goodbye to rigid contracts and hello to freedom. With WellWork,
            choose how and when you work with our flexible membership plans. */}
            At WellWork, we provide adaptable membership plans tailored to your individual needs. Enjoy the autonomy of working independently while benefiting from a collaborative community. With WellWork, you have the flexibility to shape your workspace exactly as you envision it. Discover your perfect work environment at WellWork, where flexibility and freedom blend effortlessly.
          </p>
        </div>
        <div className="vision_image" ref={targetRef3}>
          <AboutImage src={flexibility} />
        </div>
      </div>
      <div className="vision1">
        <div className="vision_image sliding_element_right">
          <AboutImage src={flexibility} />
        </div>
        <div className="vision_content sliding_element_left">
          <h1 className="smarter_content_heading">
            Flexibility at Your Fingertips
          </h1>
          <p className="smarter_content_desc1" style={{ lineHeight: "20px" }}>
            {/* Say goodbye to rigid contracts and hello to freedom. With WellWork,
            choose how and when you work with our flexible membership plans. */}
            At WellWork, we provide adaptable membership plans tailored to your individual needs. Enjoy the autonomy of working independently while benefiting from a collaborative community. With WellWork, you have the flexibility to shape your workspace exactly as you envision it. Discover your perfect work environment at WellWork, where flexibility and freedom blend effortlessly.
          </p>
        </div>
      </div>
      <div className="vision">
        <div className="vision_image" ref={targetRef2}>
          <AboutImage src={unmatched} />
        </div>
        <div className="vision_content" ref={targetRef3}>
          <h1 className="smarter_content_heading">Unmatched Amenities</h1>
          <p className="smarter_content_desc1" style={{ lineHeight: "20px" }}>
           Discover a workspace that goes the extra mile. With high-speed internet, ergonomic furniture, wellness zones, sleeping pods, and an indoor game room, WellWork exceeds your expectations and elevates your work experience.
          </p>
        </div>
      </div>
      <div className="vision1">
        <div className="vision_image" ref={targetRef2}>
          <AboutImage src={unmatched} />
        </div>
        <div className="vision_content" ref={targetRef3}>
          <h1 className="smarter_content_heading">Unmatched Amenities</h1>
          <p className="smarter_content_desc1" style={{ lineHeight: "20px" }}>
           Discover a workspace that goes the extra mile. With high-speed internet, ergonomic furniture, wellness zones, sleeping pods, and an indoor game room, WellWork exceeds your expectations and elevates your work experience.
          </p>
        </div>
      </div>
      <div className="vision">
        <div className="vision_content" ref={targetRef2}>
          <h1 className="smarter_content_heading">Community of Visionaries</h1>
          <p className="smarter_content_desc1" style={{ lineHeight: "20px" }}>
            {/* Join the ranks of forward-thinkers and innovators. WellWork is a
            vibrant ecosystem where every interaction has the potential to
            transform your career trajectory and broaden your horizons. */}
            Connect with a forward-thinking community at WellWork. In our vibrant ecosystem, every engagement is an opportunity to advance your career and explore new horizons.
          </p>
        </div>
        <div className="vision_image" ref={targetRef3}>
          <AboutImage src={communityy} />
        </div>
      </div>
      <div className="vision1">
        <div className="vision_image sliding_element_right">
          <AboutImage src={communityy} />
        </div>
        <div className="vision_content">
          <h1 className="smarter_content_heading sliding_element_left">
          Community of Visionaries
          </h1>
          <p className="smarter_content_desc1" style={{ lineHeight: "20px" }}>
            {/* Join the ranks of forward-thinkers and innovators. WellWork is a
            vibrant ecosystem where every interaction has the potential to
            transform your career trajectory and broaden your horizons. */}
            Connect with a forward-thinking community at WellWork. In our vibrant ecosystem, every engagement is an opportunity to advance your career and explore new horizons.

          </p>
        </div>
      </div>

      <More />
      {gallery_list?.length == 0 || (
        <Gallery
          imageData={
            windowDimensions.width < 600
              ? gallery_list[0]?.IMAGE_URLS
              : gallery_list[0]?.IMAGE_URLS?.slice(0, count - 4)
          }
          img2={
            process.env.REACT_APP_API_KEY +
            gallery_list[0]?.IMAGE_URLS[count - 4]?.path
          }
          img3={
            process.env.REACT_APP_API_KEY +
            gallery_list[0]?.IMAGE_URLS[count - 3]?.path
          }
          img4={
            process.env.REACT_APP_API_KEY +
            gallery_list[0]?.IMAGE_URLS[count - 2]?.path
          }
          img5={
            process.env.REACT_APP_API_KEY +
            gallery_list[0]?.IMAGE_URLS[count - 1]?.path
          }
          title={"A Glimpse Inside"}
        />
      )}
      <Members />
      {review_list?.length == 0 || (
        <div style={{ marginTop: -10, marginBottom: 30 }}>
          <Heading title={"Hear From Our Members"} />
          <div className="review-why-altis">
            {review_list?.slice(0, 3)?.map((val, ind) => (
              <div className="review-why-altis_div">
                <div
                  style={{
                    border: "1px solid #999",
                    borderRadius: 10,
                    padding: 20,
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <img
                    src={process.env.REACT_APP_API_KEY + val?.IMAGE_URL}
                    style={{ height: 50, objectFit: "contain", width: "auto" }}
                  />
                  <div
                    style={{
                      fontSize: 14,
                      fontFamily: "Raleway",
                      color: "#5B5050",
                      fontWeight: 400,
                      marginTop: 20,
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    {val.REVIEW}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontFamily: "Raleway",
                    color: "#5B5050",
                    fontWeight: 600,
                    marginTop: 15,
                  }}
                >
                  {val.PERSON_NAME}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontFamily: "Raleway",
                    color: "#5B5050",
                    fontWeight: 400,
                    marginTop: 10,
                  }}
                >
                  {val?.DESIGNATION}, {val.COMPANY_NAME}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <FAQ faqData={faqData} /> */}
    </div>
  );
};

export default WhyAltis;
