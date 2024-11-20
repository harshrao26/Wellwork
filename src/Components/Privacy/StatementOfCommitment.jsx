import React, { useEffect } from "react";
import "./privacy.css";

const StatementOfCommitment = () => {
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
    <div className="privacy-container">
      <h1 className="privacy_title">STATEMENT OF COMMITMENT</h1>
      <div className="privacy_desc">
        At WellWork, we are steadfast in our commitment to fostering an
        inclusive workplace and celebrating the richness of diversity. As an
        Equal Opportunity Employer, we firmly believe in creating an environment
        where every individual, regardless of race, religion, national or ethnic
        origin, gender, sexual orientation, gender identity or expression, age,
        disability, veteran status, or any other protected characteristic, is
        valued and respected.
      </div>
      <div className="privacy_desc">
        Our dedication to integrity is paramount. WellWork stands firmly
        against corruption and bribery in all forms. We are committed to
        upholding the highest ethical standards and ensuring transparency in our
        operations. This commitment extends to all levels of our organization,
        and we expect the same commitment from our employees, partners, and
        stakeholders.
      </div>
      <div className="privacy_desc">
        In all aspects of employment, decisions related to hiring, promotions,
        and every employment matter are driven by merit, competence,
        performance, and the genuine needs of our business. We firmly believe
        that a workplace built on trust and ethical conduct is essential for the
        success and sustainability of our organization.
      </div>
      <div className="privacy_desc">
        Aligned with our total rewards philosophy, we are dedicated to providing
        competitive, performance-linked compensation that attracts and retains
        exceptional talent. This commitment extends beyond financial rewards; we
        also value and recognize the contributions of our team members towards
        maintaining a culture of integrity and transparency.
      </div>
      <div className="privacy_desc">
        As a part of WellWork, you can expect a culture that thrives on
        collaboration, flexibility, inclusion, and an unwavering commitment to
        anti-corruption and anti-bribery practices. We are devoted to offering a
        workplace where career opportunities abound, and where each individual
        can flourish both personally and professionally, contributing to an
        environment characterized by transparency and ethical conduct.
      </div>
      <div className="privacy_desc">
        Our commitment to diversity, inclusion, and ethical business practices
        is not just a principle but a fundamental aspect of our identity.
        Together, let's build a workplace that exemplifies these values,
        fostering an environment where everyone can succeed, and where
        WellWork stands as a beacon of integrity and transparency in all our
        endeavours.
      </div>
    </div>
  );
};

export default StatementOfCommitment;
