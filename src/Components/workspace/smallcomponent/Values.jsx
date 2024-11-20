import React, { useContext, useEffect, useRef, useState } from "react";
import checkSign from "../../../assets/workspace/rect855.png";
import { useNavigate } from "react-router";
import myContext from "../../../context/data/myContext";
import { GrCheckmark } from "react-icons/gr";
const Values = () => {
  const { products_list, getProductsList } = useContext(myContext);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [c_tab, setC_tab] = useState(0);


  useEffect(() => {
    getProductsList();
  }, []);

  const scrollToNavDivv = async () => {
    await navigate("/");
    const navDiv = document.getElementById("tarrgett");
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div>
      <h1
        className="workspace_values_heading" /* style={{ margin: "40px 0" }} */
      >
        {/* Workspaces For Every Type Of Professional */}
        Redefining Your Workspace Experience
      </h1>

      {products_list?.length == 0 || (
        <>
          <div className="workspace_buttons">
            {products_list?.slice(0, 5)?.map((val, ind) => (
              <button
                key={ind}
                onClick={() => setC_tab(ind)}
                style={{
                  background: `${c_tab == ind ? "#6aadd7" : ""}`,
                  color: `${c_tab == ind ? "white" : ""}`,
                  border: `${c_tab == ind ? "none" : ""}`,
                }}
              >
                {val.TITLE}
              </button>
            ))}
          </div>
          <div className="values_banner" style={{ marginLeft: "0" }}>
            <div
              className="values_banner_child"
              style={{ margin: "0 3%", paddingTop: "15px" }}
            >
              <img
                // style={{ height: "500px" }}
                src={`${process.env.REACT_APP_API_KEY}${products_list[c_tab]?.IMAGE_URL}`}
                alt=""
                className="value_banner_img"
              />
              <div
                className="value_banner_content"
                style={{ height: "fit-content" }}
                ref={containerRef}
              >
                <h1
                  className="smarter_content_heading"
                  style={{
                    fontSize: "25px",
                    fontWeight: "semibold",
                    color: "#5b5050",
                  }}
                >
                  {products_list[c_tab]?.TITLE}
                </h1>
                <p
                  className="smarter_content_desc"
                  style={{ fontWeight: "400" }}
                >
                  {products_list[c_tab]?.DESCRIPTION}
                </p>
                {products_list[c_tab]?.FEATURES.map((e) => (
                  <div className="values_check_points" style={{ gap: "0px" }}>
                    {/* <img
                      src={checkSign}
                      style={{ height: "17px", width: "16px" }}
                      alt=""
                      className="check_sign"
                    /> */}
                   <div style={{height:"17px",width:"17px"}}>
                   <GrCheckmark size={17} className="check_sign"  color="#6aadd7" />
                   </div>

                    <p className="check_text">{e}</p>
                  </div>
                ))}
                <div
                  className="offering_card_buttons"
                  style={{ justifyContent: "flex-start", marginTop: "20px" }}
                >
                  {products_list[c_tab]?.STATUS == "1" ? (
                    <button className="offering_button" onClick={scrollToNavDivv}>ENQUIRE NOW</button>
                  ) : products_list[c_tab]?.STATUS == "2" ? (
                    <button
                      className="offering_button"
                      onClick={()=>{
                        window.location.href = "https://wellwork.engageapps.work/products";
                      }}
                      style={{ background: "#6aadd7" }}
                    >
                      BOOK NOW
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    className="offering_button"
                    style={{ background: "none", color: "#6aadd7" }}
                    // onClick={() => navigate(f(flag).link)}
                    onClick={() =>
                      navigate(
                        `/${products_list[c_tab]?.TITLE?.trim()
                          ?.toLowerCase()
                          .replace(/\s+/g, "-")}`,
                        { state: products_list[c_tab] }
                      )
                    }
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Values;
