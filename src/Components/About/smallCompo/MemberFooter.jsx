import React from "react";
import { Link } from "react-router-dom";

const MemberFooter = () => {
  return (
    <div className="member_footer">
      <div className="member_title">
        <p style={{ fontWeight: "600" }}>Be A Part of WellWork</p>
      </div>
      <div className="member_footer_images">
        <Link to={"/career"} className="footer_childs footer_childs2">
          <p className="footer_child_title">JOIN THE WELLWORK TEAM</p>
          <p className="footer_child_desc">GROW WITH US</p>
        </Link>
        <Link
          to={"mailto:info@wellwork.space"}
          className="footer_childs footer_childs1"
        >
          <p className="footer_child_title">BECOME A WELLWORK PARTNER</p>
          <p className="footer_child_desc">INVEST IN THE FUTURE</p>
        </Link>
      </div>
    </div>
  );
};

export default MemberFooter;
