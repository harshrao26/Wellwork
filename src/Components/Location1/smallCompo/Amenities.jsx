import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // Import useParams from React Router
import { amenitiesIcon } from "../../../constants/Data";
import AmenitiesCard from "./AmenitiesCard";
import img1 from "../../../assets/amenities/am1.jpg";
import img2 from "../../../assets/amenities/am2.jpg";
import img3 from "../../../assets/amenities/am3.jpg";
import img4 from "../../../assets/amenities/am4.jpg";
import myContext from "../../../context/data/myContext";

const Amenities = ({ content }) => {
  const { name } = useParams(); // Retrieve location from URL parameters using useParams
  const { amentiesFaci_list } = useContext(myContext);

  let amenitiesImages = [];
  let amenitiesTexts = [];
  switch (name) {
    case "Gachibowli":
      amenitiesImages = [img1, img2, img3, img4];
      amenitiesTexts = ["Reception", "Cafe", "Lounge", "Workstations"];
      break;
    case "Ameerpet":
      amenitiesImages = [img1, img2, img3, img4];
      amenitiesTexts = ["Reception", "Cafe", "Lounge", "Workstations"];
      break;
    case "Banjara_hills":
      amenitiesImages = [img1, img2, img3, img4];
      amenitiesTexts = ["Reception", "Cafe", "Lounge", "Workstations"];
      break;
    default:
      amenitiesImages = [];
  }

  return (
    <div className="amenities_main_div">
      <p className="offering_title" style={{ paddingTop: "20px" }}>
        Amenities and Facilities
      </p>
      <div className="Amenities_cards" style={{ marginLeft: "3%" }}>
        {amenitiesIcon?.map((e, index) => (
          <AmenitiesCard key={index} image={e.img} desc={e.desc} />
        ))}
      </div>

      {amentiesFaci_list?.length == 0 || (
        <div className="amenities_photos" style={{ paddingTop: "40px" }}>
          {amentiesFaci_list?.map((img, index) => (
            <div key={index} className="amenities_photos_inner">
              <img
                style={{ height: "200px", width: "100%", objectFit: "fill" }}
                src={process.env.REACT_APP_API_KEY + img.IMAGE_URL}
                alt=""
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    height: "28px",
                    width: "3px",
                    backgroundColor: "#6aadd7",
                    display: "flex",
                  }}
                />
                <p className="amenities_photo_text">{img.NAME}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Amenities;
