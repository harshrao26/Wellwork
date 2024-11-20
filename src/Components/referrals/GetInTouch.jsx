import React, { useContext, useState } from "react";
import "../smallcompo/css/getintouch.css";
import TouchSmall from "../smallcompo/TouchSmall";
import TouchForm from "../smallcompo/TouchForm";
import { MenuItem, TextField, styled } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CustomInput from "../../constants/CustomInput";
import myContext from "../../context/data/myContext";
import { Button } from "../../utils/utils";

const GetInTouch = () => {
  const { location_list, cities_list, products_list } = useContext(myContext);
  const [age, setAge] = useState("");
  const [flag, setFlag] = useState(false); // Example radio button state
  const [flag2, setFlag2] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="get_main_component" style={{ paddingTop: "" }}>
        <div className="get_form" style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p
              className="form_heading"
              style={{ color: "#6aadd7", fontSize: "32px", fontWeight: "600" }}
            >
              Got questions? We've got answers.
            </p>
            <p className="form_description">
              Fill out the form below and a member of our team will get in touch
              with you to learn more about your workplace needs
            </p>
          </div>
          <div className="form_inputs">
            <div className="form_inputs1">
              <CustomInput label="First Name*" />
              <CustomInput label="Last Name*" />
            </div>
            <div className="form_inputs1">
              <CustomInput label="Company Name*" />
              <CustomInput label="Company E-mail Address*" />
            </div>

            <CustomInput label="Phone Number*" />
            <CustomInput drop={true} label="Cities*">
              {cities_list?.map((val, ind) => (
                <MenuItem className="select_get_in_touch" value={val.CITY_NAME}>
                  {val.CITY_NAME}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput drop={true} label="Location*">
              {location_list?.map((val, ind) => (
                <MenuItem
                  className="select_get_in_touch"
                  value={val.LOCATION_NAME}
                >
                  {val.LOCATION_NAME}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput drop={true} label="Building*">
              {location_list?.map((val, ind) => (
                <MenuItem className="select_get_in_touch" value={val.B_NAME}>
                  {val.B_NAME}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput drop={true} label="Workspace type*">
              {products_list.map((e) => (
                <MenuItem className="select_get_in_touch" value={`${e.TITLE}`}>
                  {e.TITLE}
                </MenuItem>
              ))}
            </CustomInput>

            <div
              className="form_inputs_checkbox"
              style={{
                border: "none",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you have a broker?*
                </FormLabel>
                <RadioGroup
                  name="radio-buttons-group"
                  onChange={handleChange}
                  row
                  id="outline-basic"
                >
                  <div
                    style={{ display: "flex", gap: "20px", margin: "5px 0" }}
                  >
                    <div
                      className="yesno"
                      // style={{
                      //   display: "flex",
                      //   gap: "10px",
                      //   alignItems: "center",
                      //   fontSize: "20px",
                      // }}
                    >
                      <input
                        checked={!flag}
                        onClick={() => setFlag(false)}
                        type="radio"
                      />
                      Yes
                    </div>
                    <div
                      className="yesno"
                      // style={{
                      //   display: "flex",
                      //   gap: "10px",
                      //   alignItems: "center",
                      //   fontSize: "20px",
                      // }}
                    >
                      <input
                        checked={flag}
                        onClick={() => setFlag(true)}
                        type="radio"
                      />
                      No
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="agreement">
            <p
              style={{ fontSize: "10px", color: "#897C7C", fontWeight: "600" }}
            >
              By clicking the button below, you agree to our{" "}
              <span>Terms of Service</span> and acknowledge our{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
          <div className="center">
            <Button />
          </div>
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="agreement_button"
              style={{
                width: "45%",
                height: "40px",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Get in touch
            </button>
          </div> */}
        </div>
      </div>
      <TouchSmall setFlag2={setFlag2} />
      {flag2 && <TouchForm setFlag2={setFlag2} />}
    </>
  );
};

export default GetInTouch;
