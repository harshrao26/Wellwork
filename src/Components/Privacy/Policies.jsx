import React, { useEffect } from "react";
import "./privacy.css";
import { useNavigate } from "react-router";

const Policies = () => {
  const navigate = useNavigate();
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
    <div className="policies_main">
      <div className="policies_main_heading">WellWork Policies</div>
      <div
        className="policies_main_title"
        onClick={() => navigate("/term-and-conditions")}
      >
        <div className="list_circle" /> Terms and Condition
      </div>
      <div
        className="policies_main_title"
        onClick={() => navigate("/privacy-policy")}
      >
        <div className="list_circle" /> Privacy policy
      </div>
      <div
        className="policies_main_title"
        onClick={() => navigate("/statement-Of-commitment")}
      >
        <div className="list_circle" /> Statement Of Commitment
      </div>
      <div
        className="policies_main_title"
        onClick={() => navigate("/equal-opportunity-statement")}
      >
        <div className="list_circle" /> Equal opportunity statement
      </div>
      <div
        className="policies_main_title"
        onClick={() => navigate("/cookie-policy")}
      >
        <div className="list_circle" /> Cookies Policy
      </div>
    </div>
  );
};

export default Policies;
