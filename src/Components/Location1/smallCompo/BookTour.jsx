import React from "react";
import { useNavigate } from "react-router";
import { MdWatchLater } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdStairs } from "react-icons/md";
import users from "../../../assets/users.png";
import { TbArrowsHorizontal } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";

const LocationDescription = ({ address }) => (
  <p className="book_first_desc">{address}</p>
);

const ContactInfo = ({ email, phone, hours }) => (
  <div className="book_first_bottom">
    <div className="book_first_inner">
      <IoMdMail size={22} color="#6aadd7" />

      <p className="book_first_text">{email}</p>
    </div>
    <div className="book_first_inner">
      <MdCall size={22} color="#6aadd7" />
      <p className="book_first_text">{phone}</p>
    </div>
    <div className="book_first_inner">
      <MdWatchLater size={25} color="#6aadd7" />
      <p className="book_first_text">{hours}</p>
    </div>
  </div>
);

const LocationDetails = ({ details }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div className="book_tour_grid_inner" style={{ alignItems: "center" }}>
        <MdStairs size={27} color="#6aadd7" style={{ marginLeft: -3 }} />
        <p className="book_tour_text">{details.NO_FLOOR}</p>
      </div>
      <div className="book_tour_grid_inner" style={{ alignItems: "center" }}>
        <img src={users} alt="" className="ml_content_img" />
        <p className="book_tour_text">{details.NO_METTING_ROOM}</p>
      </div>
      <div className="book_tour_grid_inner" style={{ alignItems: "center" }}>
        <div
          style={{
            height: "20px",
            width: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#6aadd7",
            borderRadius: 2,
          }}
        >
          <TbArrowsHorizontal size={16} color="#fff" />
        </div>
        <p className="book_tour_text">Net Size: {details.NET_SIZE}</p>
      </div>
    </div>
  );
};

const Amenities = ({ amenities = [] }) => (
  <div className="book_tour_bottom" style={{ width: "100%" }}>
    {amenities?.map((amenity, index) => (
      <div key={index} className="book_tour_grid_inner">
        <div style={{ width: 20 }}>
          <FaCheck size={18} color="#6aadd7" />
        </div>
        <p className="book_tour_text">{amenity}</p>
      </div>
    ))}
  </div>
);

const LocationDescriptionText = ({ text }) => (
  <p className="book_first_bottom_text">{text}</p>
);

const BookTour = ({ name, data = {} }) => {
  const navigate = useNavigate();

  const scrollToNavDiv = async () => {
    await navigate("/");
    const navDiv = document.getElementById("targetSection");
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };
  return (
    <div className="book_tour_main" style={{ gap: "2%" }}>
      <div className="book_first">
        <p className="book_first_title">{data?.LOCATION_NAME}</p>
        <LocationDescription address={data?.B_ADDRESS} />
        <ContactInfo
          email={data?.B_EMAIL}
          phone={data?.B_PHONE_NUMBER}
          hours={data?.B_TIMINGS}
        />
        <LocationDescriptionText text={data?.B_DESCRIPTION} />
      </div>
      <div
        className="book_second"
        style={{
          border: "2px solid #E0D4D4",
          padding: "10px 20px",
        }}
      >
        <button
          className="book_second_button"
          style={{ color: "#5B5050" }}
          onClick={scrollToNavDiv}
        >
          Book A Tour
        </button>
        <LocationDetails details={data} />
        <Amenities amenities={data?.B_FEATURES} />
      </div>
    </div>
  );
};

export default BookTour;
