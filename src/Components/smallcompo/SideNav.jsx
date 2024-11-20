import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function TemporaryDrawer({logo}) {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <Link
        // className="logo_link"
        to={"/"}
        style={{
          width:'120px',
          backgroundColor: "transparent",
          // width: "85px",
          display: "flex",
          justifyContent: "flex-start",
          padding: "20px",
          
        }}
      >
        <img className="logo" src={logo} alt="" />
      </Link> */}
      <div
        style={{
          margin: 20,
          gap: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="nav-option" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="nav-option" onClick={() => navigate("/aboutus")}>
          About Us
        </div>
        <div className="nav-option" onClick={() => navigate("/workspaces")}>
          Workspace
        </div>
        <div className="nav-option" onClick={() => navigate("/why-altis")}>
          Why WellWork
        </div>
        <div
          className="nav-option"
          onClick={() => navigate(`/meeting-rooms`, { state: { ID: 29 } })}
        >
          Meetings Rooms
        </div>
        <div
          className="nav-option"
          onClick={() => navigate(`/event-space`, { state: { ID: 30 } })}
        >
          Event Spaces
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <FontAwesomeIcon onClick={toggleDrawer(anchor, true)} icon={faBars} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
