import React, { useState } from "react";
import values_image_about from "../../../assets/about/values_image_about.jpg";
import values_community from "../../../assets/about/community.jpg";
import trusted_connection from "../../../assets/about/trusted_connections (1).jpg";

const Values = () => {
  const [flag, setFlag] = useState(0);
  return (
    <div className="values_main_component">
      <div className="values_navbar">
        <div className="values_navbar_content">
          <p className="nav_title" style={{ margin: "0" }}>
            Our Values
          </p>
          <p className="nav_desc" style={{ margin: "0" }}>
            Environmental, Social and Corporate Governance
          </p>
        </div>
      </div>
      <div className="values_buttons">
        <button
          onClick={() => setFlag(0)}
          style={{
            background: `${flag === 0 ? "linear-gradient(90deg, rgba(106, 173, 215, 1) 0%, rgba(214, 91, 76, 1) 50%, rgba(238, 168, 72, 1) 100%)" : ""}`,
            color: `${flag === 0 ? "white" : ""}`,
            border: `${flag === 0 ? "none" : ""}`,
          }}
        >
          Flexibility
        </button>
        <button
          onClick={() => setFlag(1)}
          style={{
            background: `${flag === 1 ? "linear-gradient(90deg, rgba(106, 173, 215, 1) 0%, rgba(214, 91, 76, 1) 50%, rgba(238, 168, 72, 1) 100%)" : ""}`,
            color: `${flag === 1 ? "white" : ""}`,
            border: `${flag === 1 ? "none" : ""}`,
          }}
        >
          Community
        </button>
        <button
          onClick={() => setFlag(2)}
          style={{
            background: `${flag === 2 ? "linear-gradient(90deg, rgba(106, 173, 215, 1) 0%, rgba(214, 91, 76, 1) 50%, rgba(238, 168, 72, 1) 100%)" : ""}`,
            color: `${flag === 2 ? "white" : ""}`,
            border: `${flag === 2 ? "none" : ""}`,
          }}
        >
          Trusted Connections
        </button>
      </div>
      <div className="values_banner">
        <div className="values_banner_child">
          {flag === 0 && (
            <>
              <img
                src={values_image_about}
                alt=""
                className="value_banner_img"
              />
              <div className="value_banner_content">
                <h1
                  className="smarter_content_heading"
                  style={{ fontSize: "30px", fontWeight: "600" }}
                >
                  Flexibility
                </h1>
                <p className="smarter_content_desc">
                  {/* At WellWork, we're all about keeping things flexible! With a
                  variety of membership options and amenities, we've got
                  something for everyone. And when it comes to your workspace,
                  it's your playground – customise it to fit your style and
                  needs. Because here, we believe in making workspaces as unique
                  as our members. */}
                  At WellWork, flexibility is our game! Choose from a wide range
                  of membership options and amenities that cater to all your
                  needs. Your workspace should be your favorite space—design it
                  to match your style and preferences. At WellWork, we’re
                  committed to crafting workspaces as distinctive as our members
                </p>
              </div>
            </>
          )}
          {flag === 1 && (
            <>
              <img src={values_community} alt="" className="value_banner_img" />
              <div className="value_banner_content">
                <h1
                  className="smarter_content_heading"
                  style={{ fontSize: "30px", fontWeight: "600" }}
                >
                  Community Spirit
                </h1>
                <p className="smarter_content_desc">
                  {/* Step through our doors, and you'll immediately sense the
                  energy of like-minded individuals coming together to achieve
                  their goals. Whether you're a freelancer, entrepreneur, remote
                  worker, or startup, our community is diverse yet united by a
                  shared passion for growth and innovation. */}
                  Walk through our doors and feel the calmness of a vibrant community where like-minded individuals converge to reach their goals. Whether you're a freelancer, entrepreneur, remote worker, or startup, you'll find a diverse yet cohesive network driven by a mutual passion for growth and innovation.
                </p>
              </div>
            </>
          )}
          {flag === 2 && (
            <>
              <img
                src={trusted_connection}
                alt=""
                className="value_banner_img"
              />
              <div className="value_banner_content">
                <h1
                  className="smarter_content_heading"
                  style={{ fontSize: "30px", fontWeight: "600" }}
                >
                  Trusted Connections
                </h1>
                <p className="smarter_content_desc">
                  {/* When you choose WellWork, you're not just selecting a
                  workspace — you're entering into a trusted partnership. Our
                  goal is to build lasting connections with our clients, based
                  on mutual respect and a shared commitment to excellence.
                  Experience the confidence that comes from working with a team
                  you can trust. */}
                  Choosing WellWork means more than just picking a workspace—it’s forging a trusted partnership. We’re dedicated to building enduring relationships with our clients, grounded in mutual respect and a shared pursuit of excellence. Experien
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Values;
