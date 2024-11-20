import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../../context/data/myContext";
const MemberFooter = () => {
  const { meetingEventList } = useContext(myContext);
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    if (event == "meeting-rooms") {
      navigate(`/${"meeting-rooms"}`, { state: { ID: 29 } });
    }
    if (event == "event") {
      navigate(`/${"event-space"}`, { state: { ID: 30 } });
    }
  };
  console.log("meetingEventList ===",meetingEventList);
  return (
    <div className="member_footer">
      <div className="member_title">
        <p style={{ fontWeight: "600" }}>Meetings & Events</p>
      </div>
      <div className="member_footer_images" style={{ margin: "0 2%" }}>
        <div
          onClick={() => handleSelectChange("meeting-rooms")}
          className="footer_childs"
          style={{
            backgroundImage: `url('${
              process.env.REACT_APP_API_KEY + meetingEventList[0]?.IMAGE_URL
            }')`,
            textDecoration: "none",
          }}
        >
          <p className="footer_child_title">{meetingEventList[0]?.HEADING}</p>
          <p
            className="footer_child_desc"
            style={{
              lineHeight: "15px",
              fontWeight: "400",
              width: "60%",
              paddingBottom: "20px",
            }}
          >
            {meetingEventList[0]?.DESCRIPTION}
          </p>
        </div>
        <div
          onClick={() => handleSelectChange("event")}
          className="footer_childs"
          style={{
            backgroundImage: `url('${
              process.env.REACT_APP_API_KEY + meetingEventList[1]?.IMAGE_URL
            }')`,
            textDecoration: "none",
          }}
        >
          <p className="footer_child_title">{meetingEventList[1]?.HEADING}</p>
          <p
            className="footer_child_desc"
            style={{
              lineHeight: "15px",
              fontWeight: "400",
              width: "60%",
              paddingBottom: "20px",
            }}
          >
            {meetingEventList[1]?.DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberFooter;
