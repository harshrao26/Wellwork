import React, { useEffect, useState } from "react";
import { Carouseldata, eventTypesData } from "../../../constants/Data";
import { GrNext, GrPrevious } from "react-icons/gr";
import Heading from "../../../constants/Heading";
import { base_url } from "../../../context/data/myState";

const Spaces = ({ title, onClick }) => {
  const [flag, setFlag] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${base_url}slider-info/pagename/Events`
        );
        const respJson = await response.json();
        if (respJson.success) {
          setData(respJson.data);
        } else {
          setData([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleArrow = (direction) => {
    if (direction === "forward") {
      setFlag((flag + 1) % 4);
    } else if (direction === "backward") {
      setFlag((flag - 1 + 4) % 4);
    }
  };

  const Explore = data?.filter(
    (v) => v.STATIC_TEXT == "Explore a range of spaces at Altis"
  );
  const Event_list = data?.filter((v) => v.STATIC_TEXT == "Event Types");

  const renderData = () => {
    const icon_list = title == "Event Types" ? eventTypesData : Carouseldata;
    return icon_list;
  };

  const list_item = title == "Event Types" ? Event_list : Explore;

  return (
    <div className="spaces_main_component">
      <Heading title={title} />
      <div
        className="banner_carousel_spaces"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_KEY}${list_item[flag]?.IMAGE_URL})`,
          backgroundSize: "100% 100%",
          // paddingInline: 10,
        }}
      >
        {flag > 0 && (
          <GrPrevious
            size={25}
            color="#fff"
            style={{ cursor: "pointer" }}
            onClick={() => handleArrow("backward")}
          />
        )}
        <GrNext
          size={25}
          color="#fff"
          style={{ cursor: "pointer", marginLeft: "auto" }}
          onClick={() => handleArrow("forward")}
        />
      </div>
      <div className="spaces_heading_footer">
        <p className="sub_title_spaces">{list_item[flag]?.DYNAMIC_TEXT[0]}</p>
        <div
          className="spaces_heading_footer_div"
          style={{ paddingBottom: "20px" }}
        >
          {renderData()[flag]?.icons?.map((e, index) => (
            <div key={index} className="auditdata">
              {index == 0 || (
                <>
                  <div
                    style={{
                      height: "22px",
                      width: "4px",
                      display: "flex",
                      backgroundColor: "#6aadd7",
                    }}
                  ></div>
                </>
              )}

              <img
                src={e?.url}
                alt=""
                style={{ height: "20px", width: "20px", objectFit: "contain" }}
                className="auditdata_img"
              />
              <p className="auditdata_text">{e.desc}</p>
            </div>
          ))}
          <div
            onClick={onClick}
            style={{ cursor: "pointer" }}
            className="auditdata_button"
          >
            Get in touch
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
