import React, { useState } from "react";
import "./css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/altislogo.png";
import logo2 from "../../assets/01WorkWell/Logo/Wellwork_Primary_.png";
import logo from "../../assets/01WorkWell/Logo/Wellwork_Secondary_.png";


import TemporaryDrawer from "./SideNav";
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
  const [onHover, setOnHover] = useState("none");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e.currentTarget.value);
  };

  const handleSelectChange = (event) => {
    if (event.currentTarget.value === "meeting-rooms") {
      navigate(`/${"meeting-rooms"}`, { state: { ID: 29 } });
    }
    if (event.currentTarget.value === "event") {
      navigate(`/${"event-space"}`, { state: { ID: 30 } });
    }
  };
  return (
    <div className="main_navbar_div" id="nav_div">
      <Link
        className="logo_link"
        to={"/"}
        style={{
          backgroundColor: "transparent",
          // width: "85px",
          display: "flex",
          justifyContent: "center",
          paddingLeft: 40,
        }}
      >
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="navbar-options">
        <div
          className="nav-option"
          onClick={() => navigate(`/aboutus`, { state: { ID: 29 } })}
        >
          About Us
        </div>
        <div
          className="nav-option"
          onClick={() => navigate(`/workspaces`, { state: { ID: 29 } })}
        >
          Workspaces
        </div>
        <div
          className="nav-option"
          onClick={() => navigate(`/why-altis`, { state: { ID: 29 } })}
        >
          Why WellWork
        </div>
        <div style={{ position: "relative", zIndex: 1, width: "auto" }}>
          <div
            className="nav-option"
            style={{
              height: 53,
              justifyContent: "center",
              alignItems: "center",
              color: onHover == "flex" && "#6aadd7",
            }}
            onMouseEnter={() => setOnHover("flex")}
            onMouseLeave={() => setOnHover("none")}
          >
            Meetings & Events
            <GoChevronDown
              style={{ marginLeft: 1 }}
              size={25}
              color={onHover == "flex" ? "#6aadd7" : "#fff"}
            />
          </div>
          <div
            onMouseEnter={() => setOnHover("flex")}
            onMouseLeave={() => setOnHover("none")}
            style={{
              display: onHover,
              backgroundColor: "#fff",
              padding: 10,
              position: "absolute",
              zIndex: 1,
              minWidth: 170,
              top: 53,
              flexDirection: "column",
              gap: 10,
              borderTop: "2px solid #6aadd7",
            }}
          >
            <div
              className="nav-option"
              style={{color:'#6aadd7'}}
              onClick={() =>
                navigate(`/${"meeting-rooms"}`, { state: { ID: 29 } })
              }
            >
              Meeting Rooms
            </div>
            <div
              className="nav-option"
              style={{color:'#6aadd7'}}
              onClick={() =>
                navigate(`/${"event-space"}`, { state: { ID: 30 } })
              }
            >
              Event Spaces
            </div>
          </div>
        </div>
      </div>
      {/* <ul className="nav_item_list">
        <li className="logo_nav_bar">
          <Link
            className="logo_link"
            to={"/"}
            style={{
              backgroundColor: "white",
              width: "85px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img className="logo" src={logo} alt="" />
          </Link>
        </li>
        <li style={{ marginLeft: "17%" }}>
          <Link to={"/aboutus"} style={{ color: "#2B2B2B" }}>
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/workspaces"} style={{ color: "#2B2B2B" }}>
            Workspaces
          </Link>
        </li>
        <li>
          <Link to={"/why-altis"} style={{ color: "#2B2B2B" }}>
            Why WellWork
          </Link>
        </li>

        <li>
          <div>
            <select
              id="meetingEventSelect"
              value={selectedOption}
              style={{
                background: "none",
                border: "none",
                color: "#2B2B2B",
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "50px",
                width: "fit-content",
              }}
              className="navbar_option"
              onChange={handleSelectChange}
            >
              <option value="" style={{ display: "none" }}>
                Meetings & Events
              </option>
              <option className="navbar_option" value="meeting-rooms">
                Meetings
              </option>
              <option
                className="navbar_option"
                // onClick={() =>
                //   navigate(`/${"event-space"}`, { state: { ID: 30 } })
                // }
                value="event"
              >
                Events
              </option>
            </select>
          </div>
        </li> 
        <li className="sidebar_nav">
          <TemporaryDrawer />
        </li>
      </ul> */}
      <div style={{ flex: 1, display: "flex" }} />
      <div className="navbar-drawer">
        <TemporaryDrawer  logo={logo2}/>
      </div>
    </div>
  );
};

export default Navbar;
