import React from "react";
import "../css/mpmcor.css"; // Import CSS file for styling
import address from "../../../assets/map/location-pin-svgrepo-com 1.png";
import email from "../../../assets/map/arrow_forward_ios (6).png";
import train from "../../../assets/map/train.png";
import phone from "../../../assets/map/call-communication-phone-smartphone-alert-notification-svgrepo-com 2.png";
import clock from "../../../assets/map/nest_clock_farsight_analog.png";

const MapCard = ({ content, data = {} }) => {
  return (
    <div className="mpm-corporate-office" style={{ minWidth: "20%" }}>
      <h1 className="office-heading">{data.B_NAME}</h1>
      <p className="office-description">
        {data.LOCATION_NAME == "Gachibowli"
          ? "A beacon of modern business, blending cutting-edge design with strategic location."
          : data.LOCATION_NAME == "Ameerpet"
          ? "Experience the pinnacle of professional spaces with MPM Grand WellWork"
          : data.LOCATION_NAME == "Banjara Hills"
          ? "Redefining Business Spaces in Hyderabad's Vibrant Locale."
          : "A beacon of modern business, blending cutting-edge design with strategic location."}
      </p>
      <div className="office-details">
        <div className="address" style={{ alignItems: "flex-start" }}>
          <img
            src={address}
            alt=""
            style={{ height: "16px", marginTop: "5px", width: "16px" }}
          />
          <p style={{ margin: "0" }}>{data.B_ADDRESS}</p>
        </div>
        <div className="email">
          <div
            style={{
              height: "12px",
              width: "16px",
              background: "#6aadd7",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              marginTop: "13px",
              borderRadius: "3px",
            }}
          >
            <img
              src={email}
              alt=""
              style={{ height: "5px", width: "10px", paddingTop: "3px" }}
            />
          </div>
          <p style={{ marginBottom: "0" }}>
            {data.LOCATION_NAME == "Gachibowli"
              ? "info@wellwork.space"
              : data.LOCATION_NAME == "Ameerpet"
              ? "info@wellwork.space"
              : data.LOCATION_NAME == "Banjara Hills"
              ? "info@wellwork.space"
              : "info@wellwork.space"}
          </p>
        </div>
        <div className="phone">
          <img
            src={phone}
            alt=""
            style={{ height: "16px", marginTop: "13px", width: "16px" }}
          />
          <p style={{ marginBottom: "0" }}>
            {data.LOCATION_NAME == "Gachibowli"
              ? "+91 9121318476"
              : data.LOCATION_NAME == "Ameerpet"
              ? "+91 9100019981"
              : data.LOCATION_NAME == "Banjara Hills"
              ? "+91 9100019981"
              : "+91 9100019981"}
          </p>
        </div>
        <div className="timings">
          <img
            src={clock}
            alt=""
            style={{ height: "16px", marginTop: "13px", width: "16px" }}
          />
          <p style={{ marginBottom: "5px" }}>Mon - Sat: 10:00 -19:00</p>
        </div>
        <div className="transport" style={{ alignItems: "flex-start" }}>
          <img
            src={train}
            alt=""
            style={{ height: "16px", marginTop: "5px", width: "16px" }}
          />
          <div>
            <p>
              {data.LOCATION_NAME == "Gachibowli"
                ? "Raidurg Metro Station - 2.5 Km"
                : data.LOCATION_NAME == "Ameerpet"
                ? "Ameerpet Metro Station - 0.2 Km"
                : data.LOCATION_NAME == "Banjara Hills"
                ? "Panjagutta Metro Station: 0.75 Km"
                : "Panjagutta Metro Station: 0.75 Km"}
            </p>
            <p>
              {data.LOCATION_NAME == "Gachibowli"
                ? "Lumbini Avenue Bus Stop - 0.8 Km"
                : data.LOCATION_NAME == "Ameerpet"
                ? "Ameerpet Bus Stop - 0.4 Km"
                : data.LOCATION_NAME == "Banjara Hills"
                ? "Road No. 12, Banjara Hills Bus Stop- 0.3 Km"
                : ""}
            </p>
            <p>
              {data.LOCATION_NAME == "Gachibowli"
                ? "ORR - 1.2 Km"
                : data.LOCATION_NAME == "Ameerpet"
                ? ""
                : data.LOCATION_NAME == "Banjara Hills"
                ? ""
                : ""}
            </p>
          </div>
        </div>
      </div>
      <button className="map_card_button">VIEW ON MAP</button>
    </div>
  );
};

export default MapCard;
