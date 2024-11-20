import React, { useEffect } from "react";
import "./privacy.css";

const EqualOpportunity = () => {
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
      <h1 className="privacy_title">EQUAL OPPORTUNITY STATEMENT</h1>
      <div className="privacy_desc">
        WellWork is dedicated to fostering a workplace environment that values
        diversity and promotes inclusivity. As an Equal Opportunity Employer, we
        firmly believe in the principles of equal opportunity and fair treatment
        for all employees. Our commitment to these ideals is outlined in the
        following statement:
      </div>
      <div className="privacy_title_2">Equal Opportunity Employment:</div>
      <div className="privacy_desc">
        WellWork is an Equal Opportunity Employer. We are devoted to
        establishing a diverse and inclusive work atmosphere that respects and
        values individual differences. Employment decisions, including hiring,
        promotion, and other aspects of employment, are made without
        discrimination based on race, religion, national or ethnic origin, sex,
        sexual orientation, gender identity or expression, age, disability,
        veteran status, or any other characteristics protected by applicable
        law.
      </div>
      <div className="privacy_title_2">Merit-Based Decisions:</div>
      <div className="privacy_desc">
        We uphold a meritocracy, where all decisions related to employment,
        advancement, and recognition are based on merit, competence,
        performance, and the needs of our business. We expect our employees to
        embody our core values and contribute to an environment that encourages
        collaboration, innovation, and growth.
      </div>
      <div className="privacy_title_2">
        Career Opportunities in an Inclusive Culture:
      </div>
      <div className="privacy_desc">
        As part of WellWork, we are committed to offering a workplace that
        nurtures career growth and provides numerous opportunities for
        professional development. Our company culture emphasizes collaboration,
        flexibility, and inclusion, ensuring that each team member can thrive
        and contribute their best to our collective success.
      </div>
      <div className="privacy_title_2">Governance, Conduct & Ethics:</div>
      <div className="privacy_desc">
        WellWork adheres to the highest standards of governance, conduct, and
        ethics. Our employees are expected to conduct themselves with integrity,
        transparency, and accountability in all business dealings. We have
        established guidelines and policies that promote ethical behaviour,
        compliance with laws and regulations, and responsible corporate
        governance. Violations of these principles will not be tolerated, and
        appropriate actions will be taken to address any breaches.
      </div>
      <div className="privacy_desc">
        At WellWork, we are proud to affirm our commitment to equal
        opportunity, merit-based decisions, competitive compensation, and a
        workplace culture that encourages diversity, collaboration, and
        professional growth for all employees. We believe that by fostering such
        an environment, we can drive innovation, creativity, and excellence in
        all aspects of our business.
      </div>
    </div>
  );
};

export default EqualOpportunity;
