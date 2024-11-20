import React, { useState } from "react";
import Heading from "./Heading";

const FAQ = ({ faqData = [] }) => {
  const [flag, setFlag] = useState(-1);

  const handleDivClick = (index) => {
    if (flag === index) setFlag(-1);
    else setFlag(index);
  };

  return (
    <div className="questions_main_div" style={{ margin: "0 3%" }}>
      <Heading title={"Frequently Asked Questions"} />

      <div>
        {faqData.map((faq, index) => (
          <div
            className="card_main_component"
            style={{
              background: `${flag === index ? "#f1f1f188" : ""}`,
              padding: "0",
              borderBottom:
                index + 1 == faqData?.length
                  ? "0px solid #D9D9D9 "
                  : "0.9px solid #D9D9D9",
            }}
          >
            <div
              onClick={() => handleDivClick(index)}
              style={{
                paddingLeft: "20px",
                paddingBottom: "25px",
                paddingTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: "#5B5050",
                  fontSize: 14,
                  fontFamily: "Raleway",
                  flex: 1,
                  fontWeight: `${flag === index ? "600" : "500"}`,
                }}
              >
                {faq.question}
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  className={flag === index ? "rotated" : ""}
                >
                  <path
                    d="M6 8.14125L0 1.89497L1.4 0.4375L6 5.22632L10.6 0.4375L12 1.89497L6 8.14125Z"
                    fill="#5B5050"
                  />
                </svg>
              </div>
            </div>
            {flag === index && (
              <div className="answer" style={{ padding: "0 20px" }}>
                <div
                  style={{
                    color: "#5B5050",
                    fontSize: 14,
                    fontFamily: "Raleway",
                    flex: 1,
                    fontWeight: "500",
                    marginBottom: "30px",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
