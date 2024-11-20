import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";
import { useNavigate } from "react-router";

const Presence = () => {
  const { location_list } = useContext(myContext);
  const navigate = useNavigate();
  return (
    <div className="member_footer">
      <div className="">
        <p className="amenities_heading">Our Presence</p>
      </div>
      <div className="workspace_footer_images">
        {location_list?.map((v, i) => (
          <div
            className="workspace_footer_childs"
            style={{
              backgroundImage: `url('${
                process.env.REACT_APP_API_KEY + v?.IMAGE_URLS[0]?.path
              }')`,
              cursor: "pointer",
            }}
            onClick={() =>
              navigate(`/locations/hyderabad/${v.LOCATION_NAME}`, {
                state: v,
              })
            }
          >
            <p
              className="footer_child_title"
              style={{
                fontSize: "14px",
                fontWeight: "600",
                paddingBottom: "10px",
              }}
            >
              {v.LOCATION_NAME}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presence;
