import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import myContext from "../../../context/data/myContext";
import { ToastContainer, toast } from "react-toastify";
import { validateEmail } from "../../../utils/utils";
import CustomInput from "../../../constants/CustomInput";
import { base_url } from "../../../context/data/myState";

const GetInTouch = () => {
  const [focusedField, setFocusedField] = useState(null);
  const { location_list, cities_list, products_list } = useContext(myContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    guests: 0,
    locations: "",
    eventDate: "",
    eventTime: "",
    eventTypes: "",
    isFlexibleDateTime: false,
    additionalNotes: "",
  });

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleGuestsChange = (value) => {
    setFormData({ ...formData, guests: parseInt(formData.guests) + value });
  };

  const handleFormSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.companyName ||
      !formData.phone ||
      !formData.guests ||
      !formData.locations ||
      !formData.eventDate ||
      !formData.eventTime ||
      !formData.eventTypes
    ) {
      toast.info("Please fill required fields", { toastId: 1 });
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.info("Invailid email address", { toastId: 1 });
      return;
    }
    try {
      const body = new FormData();
      body.append("NAME", formData.name);
      body.append("EMAIL", formData.email);
      body.append("C_NAME", formData.companyName);
      body.append("PHONE", formData.phone);
      body.append("N_GUESTS", formData.guests);
      body.append("LOCATIONS", formData.locations);
      body.append("EVENT_DATE", formData.eventDate);
      body.append("EVENT_TIME", formData.eventTime);
      body.append("EVENT_TYPE", formData.eventTypes);
      body.append("IS_FLEXIBLE", formData.isFlexibleDateTime);
      body.append("ADDITIONAL_NOTES", formData.additionalNotes);

      const response = await fetch(
        `${base_url}event/add`,
        {
          method: "POST",
          body: body,
        }
      );

      const respJson = await response.json();

      if (respJson.success) {
        setFormData({
          ...formData,
          name: "",
          email: "",
          companyName: "",
          phone: "",
          guests: "",
          locations: "",
          eventDate: "",
          eventTime: "",
          eventTypes: "",
          additionalNotes: "",
        });
        toast.success(respJson.message);
      } else {
        toast.error(respJson.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <p className="gt_heading">Get in touch with us</p>
      <div className="gt_inputs">
        <CustomInput
          large
          label="Name*"
          value={formData.name}
          onChange={(v) => {
            setFormData({
              ...formData,
              name: v.target.value
                .trimStart()
                .replace(/[^a-zA-Z0-9 ]/g, "")
                .replace(/^[0-9]/, "")
                .replace(/\s{2,}/g, " "),
            });
          }}
        />

        <CustomInput
          large
          label="Email*"
          value={formData.email}
          onChange={(v) => {
            setFormData({ ...formData, email: v.target.value.trim() });
          }}
        />

        <CustomInput
          large
          label="Company Name*"
          value={formData.companyName}
          onChange={(v) => {
            setFormData({
              ...formData,
              companyName: v.target.value
                .trimStart()
                .replace(/[^a-zA-Z0-9 ]/g, "")
                .replace(/^[0-9]/, "")
                .replace(/\s{2,}/g, " "),
            });
          }}
        />

        <CustomInput
          large
          label="Phone*"
          value={formData.phone}
          onChange={(v) => {
            v.target.value?.length > 10 ||
              setFormData({
                ...formData,
                phone: v.target.value.trim().replace(/[^0-9 ]/g, ""),
              });
          }}
        />

        <CustomInput
          large
          label="Number of Guests*"
          value={formData.guests > 0 ? formData.guests : ""}
          onChange={(v) => {
            setFormData({
              ...formData,
              guests: v.target.value.trim().replace(/[^0-9 ]/g, ""),
            });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <div
                  style={{
                    display: "flex",
                    background: "#D9D9D9",
                    height: "54px",
                    border: "none",
                    borderRadius: "0 4px 4px 0",
                    // padding: "0 10px",
                    marginRight: -14,
                  }}
                >
                  <div
                    style={{
                      fontSize: "36px",
                      padding: 10,
                      background: "#D9D9D9",
                      cursor: "pointer",
                      textAlign: "center",
                      verticalAlign: "center",
                      paddingTop: 15,
                    }}
                    onClick={() => handleGuestsChange(1)}
                  >
                    +
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "100%",
                      background: "#A5A5A5",
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: "36px",
                      padding: 10,
                      background: "#D9D9D9",
                      cursor: "pointer",
                      textAlign: "center",
                      verticalAlign: "center",
                      paddingTop: 13,
                    }}
                    onClick={() => handleGuestsChange(-1)}
                  >
                    -
                  </div>
                </div>
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              outlineColor: "#6aadd7",
            },
          }}
        />

        <CustomInput
          large
          drop={true}
          value={formData.locations}
          label="Locations*"
          onChange={(v) =>
            setFormData({ ...formData, locations: v.target.value })
          }
        >
          {location_list.map((v, i) => (
            <MenuItem className="select_get_in_touch" value={v.LOCATION_NAME}>
              {v.LOCATION_NAME}
            </MenuItem>
          ))}
        </CustomInput>

        <CustomInput
          large
          label={"Event Date"}
          type="date"
          InputLabelProps={{ shrink: true, required: true }}
          // FormHelperTextProps={{ hidden: !this.hasError("someDate") }}
          value={formData.eventDate}
          onChange={(v) => {
            setFormData({
              ...formData,
              eventDate: v.target.value,
            });
          }}
        />

        <CustomInput
          large
          label="Event Time"
          InputLabelProps={{ shrink: true, required: true }}
          type={"time"}
          value={formData.eventTime}
          onChange={(v) => {
            setFormData({
              ...formData,
              eventTime: v.target.value.trimStart(),
            });
          }}
        />

        <CustomInput
          large
          drop={true}
          value={formData.eventTypes}
          label="Event Types*"
          onChange={(v) => {
            setFormData({ ...formData, eventTypes: v.target.value });
          }}
        >
          <MenuItem className="select_get_in_touch" value={"Type1"}>
            Type 1
          </MenuItem>
          <MenuItem className="select_get_in_touch" value={"Type2"}>
            Type 2
          </MenuItem>
          <MenuItem className="select_get_in_touch" value={"Type3"}>
            Type 3
          </MenuItem>
        </CustomInput>

        <FormControl>
          <FormLabel id="flexibleDateTime-label">
            Is your date/time flexible?*
          </FormLabel>
          <RadioGroup
            name="isFlexibleDateTime"
            value={formData.isFlexibleDateTime}
            row
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "5px 0",
                paddingRight: "5px",
                position: "relative",
                left: "-5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <input
                  name="workedWithWellWork"
                  onChange={() =>
                    setFormData({ ...formData, isFlexibleDateTime: true })
                  }
                  checked={formData.isFlexibleDateTime}
                  type="radio"
                />
                <label
                  htmlFor="workedWithWellWork"
                  style={{ fontSize: 16, fontWeight: "400" }}
                >
                  Yes
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <input
                  name="workedWithWellWork"
                  onChange={() =>
                    setFormData({ ...formData, isFlexibleDateTime: false })
                  }
                  checked={!formData.isFlexibleDateTime}
                  type="radio"
                />
                <label
                  htmlFor="workedWithWellWork"
                  style={{ fontSize: 16, fontWeight: "400" }}
                >
                  No
                </label>
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <CustomInput
        large
        label="Additional Notes"
        value={formData.additionalNotes}
        onChange={(v) =>
          setFormData({ ...formData, additionalNotes: v.target.value })
        }
        multiline
        minRows={4}
      />

      <p className="gt_textt">
        By clicking the button below, you agree to our{" "}
        <Link to={"/term-and-conditions"} style={{ textDecoration: "none" }}>
          Terms of Service
        </Link>{" "}
        and acknowledge our{" "}
        <Link to={"/privacy-policy"} style={{ textDecoration: "none" }}>
          Privacy Policy
        </Link>
      </p>
      <button
        className="gt_button"
        style={{
          cursor: "pointer",
          maxWidth: "250px",
          height: "39px",
          fontSize: "14px",
        }}
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default GetInTouch;
