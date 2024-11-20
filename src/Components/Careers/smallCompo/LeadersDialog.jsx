import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

const LeadersDialog = ({ index, setFlag }) => {
  const { leaders_list } = useContext(myContext);

  return (
    <div className="refer_main_component">
      <div className="leaders_dialogue_main">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            style={{
              border: "2px solid blue",
              margin: "0px 30px 20px 0",
              borderRadius: "5px",
              width: "16px",
            }}
            icon={faXmark}
            onClick={() => setFlag(false)}
          />
        </div>
        <div className="leaders_logo">
          <img
            style={{
              height: "80px",
              width: "80px",
              border: "none",
              borderRadius: "50%",
            }}
            src={process.env.REACT_APP_API_KEY + leaders_list[index]?.IMAGE_URL}
            alt=""
          />
          <div className="leaders_logo_2nd_div">
            <p className="leaders_logo_title">{leaders_list[index]?.NAME}</p>
            <p className="leaders_logo_desig">
              {leaders_list[index]?.DESIGNATION}
            </p>
            <FontAwesomeIcon
              onClick={(event) => {
                event.preventDefault();
                window.open(
                  leaders_list[index]?.LINKEDIN_URL,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              icon={faLinkedin}
              style={{ color: "blue", height: "25px", width: "20px" }}
            />
          </div>
        </div>
        {leaders_list[index]?.DESCRIPTION.split(/\.\s+/).map((e) => (
          <p className="leaders_logo_desc">{e}.</p>
        ))}
      </div>
    </div>
  );
};

export default LeadersDialog;
