import React, { useContext, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import distance from "../../assets/distance.png";
import apartment from "../../assets/apartment.png";
import "./css/bannerform.css";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import CustomInput from "../../constants/CustomInput";
import { base_url } from "../../context/data/myState";

const BannerForm = () => {
  const [location, setLocation] = React.useState("");
  const [locationsData, setLocationsData] = useState([]);
  const [workspace, setWorkspace] = React.useState("");
  const [data, setData] = useState([]);
  const [locations, setLocations] = useState([]);
  const { cities_list, location_list } = useContext(myContext);
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(
          `${base_url}products/list`,
          {
            method: "GET",
          }
        );
        const respJson = await resp.json();
        await setData(respJson.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `${base_url}location-workspace/list`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcxMDE0MTUwM30.F8grlRwXvNCjWOcTfmBDtn0Xv4vt8AAupBRVuebDDN0",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        let mySet = new Set();
        for (let i of data?.data) {
          mySet.add(i?.LOCATION_NAME);
        }
        setLocationsData(Array.from(mySet));
        // console.log(locationsData); // or do something else with the data
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(
          `${base_url}location-workspace/list`,
          {
            method: "GET",
          }
        );
        const respJson = await resp.json();
        // console.log(respJson)
        await setLocations(respJson.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="banner_form_main">
      <div className="banner_form_inner_main_div">
        <div className="banner_form_inner">
          <CustomInput
            drop={true}
            label={"Cities"}
            value={location}
            onChange={(v) => setLocation(v.target.value)}
          >
            {cities_list.map((e, i) => (
              <MenuItem
                className="select_get_in_touch"
                value={`${e?.CITY_NAME}`}
                onChange={() => setCity(e.id)}
              >
                <img src={distance} alt="" style={{ marginRight: "10px" }} />
                {e?.CITY_NAME}
              </MenuItem>
            ))}
          </CustomInput>

          <CustomInput
            drop={true}
            label={"Product Type"}
            value={workspace}
            onChange={(v) => setWorkspace(v.target.value)}
          >
            {data.map((e) => (
              <MenuItem
                className="select_get_in_touch"
                value={`${e.TITLE?.replace(/\s+$/, "")}`}
              >
                <img src={apartment} style={{ marginRight: "10px" }} alt="" />
                {e.TITLE?.replace(/\s+$/, "")}
              </MenuItem>
            ))}
          </CustomInput>

          <div
            onClick={() => {
              if (!location || !workspace) {
                toast.info("Please select city and product type", {
                  toastId: 1,
                });
                return;
              }
              const CITYID = cities_list.filter(
                (v) => v.CITY_NAME == location
              )[0]?.id;
              const data = location_list?.filter((v) => v.CITY_ID == CITYID);

              if (data?.length == 0) {
                toast.info("This city locations coming soon", { toastId: 1 });
                return;
              }
              navigate("/location2", { state: { c_id: CITYID } });
            }}
            // to={"/location2"}
            style={{ textDecoration: "none", fontWeight: "800" }}
            className="Banner_form_button"
          >
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
