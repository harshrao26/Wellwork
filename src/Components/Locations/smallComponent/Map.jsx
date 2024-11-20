import React, { useContext, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import distance from "../../../assets/distance.png";
import apartment from "../../../assets/apartment.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MultiLocationCard from "../../../constants/MultiLocationCard";
import myContext from "../../../context/data/myContext";
import CustomInput from "../../../constants/CustomInput";

const Map = () => {
  const [city, setCity] = React.useState("");
  const [productType, setProductType] = React.useState("");
  const [name, setName] = useState("Gachibowli");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { location_list, products_list, getLocationList, getProductsList } =
    useContext(myContext);

  useEffect(() => {
    getLocationList();
    getProductsList();
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  var filteredKeywords = products_list?.filter((word) =>
    location_list
      ?.filter((v) => v.LOCATION_NAME == city)[0]
      ?.PRODUCTS_IDS.includes(String(word.ID))
  );
  const [items, setItems] = useState({});
  return (
    <div className="map_main_container">
      <div className="map_title" style={{ marginLeft: "1.5%" }}>
        Choose from 3 Locations across Hyderabad
      </div>
      <div
      className="custom_search"
        // style={{ display: "flex", gap: 20, maxWidth: "50%", marginLeft: 20 }}
      >
        <CustomInput
          drop={true}
          label={"Locations"}
          value={city}
          onChange={handleCityChange}
        >
          {location_list
            ?.filter((v) => v.CITY_ID == state.c_id)
            .map((val, ind) => (
              <MenuItem
                className="select_get_in_touch"
                value={val.LOCATION_NAME}
                onClick={() => setItems(val)}
              >
                <img src={distance} alt="" style={{ marginRight: "10px" }} />{" "}
                {val.LOCATION_NAME}
              </MenuItem>
            ))}
        </CustomInput>

        <CustomInput
          drop={true}
          label={"Product Type"}
          value={productType}
          onChange={handleProductTypeChange}
        >
          {filteredKeywords.map((e) => (
            <MenuItem
              onClick={() =>
                navigate(`/locations/hyderabad/${city}`, {
                  state: items,
                })
              }
              className="select_get_in_touch"
              value={`${e.TITLE?.replace(/\s+$/, "")}`}
            >
              <img src={apartment} alt="" style={{ marginRight: "10px" }} />{" "}
              {e.TITLE?.replace(/\s+$/, "")}
            </MenuItem>
          ))}
        </CustomInput>
      </div>

      <div className="map_inner_div" style={{ marginTop: "2%", gap: "20px" }}>
        <div className="map_first_half" style={{ width: "60%" }}>
          {location_list
            ?.filter((v) => v.CITY_ID == state.c_id)
            ?.map((e, i) => (
              <MultiLocationCard
                line={e.NO_OF_SITTERS}
                size={e.NET_SIZE}
                address={e.B_ADDRESS}
                title={e.LOCATION_NAME}
                featurs_data={e.B_FEATURES}
                carouselData={e.IMAGE_URLS}
                setName={setName}
                index={i}
                onClick={() =>
                  navigate(`/locations/hyderabad/${e.LOCATION_NAME}`, {
                    state: e,
                  })
                }
              />
            ))}
        </div>
        <div className="map_second_half" style={{ width: "35%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15226.450167056533!2d78.3716513!3d17.4303723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f26bb80d5f%3A0x3bbaaa71d5480048!2sWORK%40ALTIS!5e0!3m2!1sen!2sin!4v1713525838880!5m2!1sen!2sin"
            width={"100%"}
            title={name}
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* {name === "Banjara Hills" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.634459'100%'7!2d78.43927353766432!3d17.420556720666898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9734c9d9cbc9%3A0xb311480eeb3c80d0!2sMPM%20Timesquare%20Mall!5e0!3m2!1sen!2sin!4v1707978098759!5m2!1sen!2sin"
              width={"100%"}
              title={name}
              height={"100%"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
          {name === "Ameerpet" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.532110984775!2d78.44250887408994!3d17.434227801456206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cee196174f%3A0xbf13004d14ee215d!2sVasavi%20MPM%20Grand!5e0!3m2!1sen!2sin!4v1707979062651!5m2!1sen!2sin"
              width={"100%"}
              title={name}
              height={"100%"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
          {name === "Gachibowli" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.5748486303897!2d78.37149325182224!3d17.430340627701618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936d49613343%3A0xcd541ba361a9c858!2sComplex!5e0!3m2!1sen!2sin!4v1707979165536!5m2!1sen!2sin"
              title={name}
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Map;
