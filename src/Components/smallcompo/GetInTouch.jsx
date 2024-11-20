import React, { useContext, useEffect, useRef, useState } from "react";
import "./css/getintouch.css";
import TouchSmall from "./TouchSmall";
import TouchForm from "./TouchForm";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import getImage from "../../assets/close-up-smiley-woman-working-laptop.jpg";
import MenuItem from "@mui/material/MenuItem";
import myContext from "../../context/data/myContext";
import { ToastContainer, toast } from "react-toastify";
import { validateEmail } from "../../utils/utils";
import CustomInput from "../../constants/CustomInput";
import { base_url } from "../../context/data/myState";

const GetInTouch = () => {
  const [flag2, setFlag2] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [height, setHeight] = useState(false);
  const containerRef = useRef(null);
  const { location_list, cities_list, products_list } = useContext(myContext);

  useEffect(() => {}, []);

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  useEffect(() => {
    setHeight(containerRef.current.offsetHeight);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    phoneNumber: "",
    locations: "",
    micromarket: "",
    Company_size: "",
    workspaceType: "",
    hasBroker: true,
    city: "",
    additionalNotes: "",
  });

  const handleSubmit = async () => {
    if (
      !formData.Company_size ||
      !formData.city ||
      !formData.companyEmail ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.locations ||
      !formData.phoneNumber ||
      !formData.micromarket ||
      !formData.companyName
    ) {
      toast.info("Please fill required fields", { toastId: 1 });
      return;
    }
    if (!validateEmail(formData.companyEmail)) {
      toast.info("Invailid email address", { toastId: 1 });
      return;
    }

    try {
      const formData1 = new FormData();
      formData1.append("f_Name", formData.firstName);
      formData1.append("l_Name", formData.lastName);
      formData1.append("company_Name", formData.companyName);
      formData1.append("company_Email", formData.companyEmail);
      formData1.append("phone__Number", formData.phoneNumber);
      formData1.append("locations", formData.locations);
      formData1.append("product_Type", formData.micromarket);
      formData1.append("company_Size", formData.Company_size);
      formData1.append("description", formData.additionalNotes);
      formData1.append("is_Broker", formData.hasBroker);

      const response = await fetch(
        `${base_url}query-form/add`,
        {
          method: "POST",
          body: formData1,
        }
      );

      const respJson = await response.json();

      if (respJson.success) {
        setFormData({
          ...formData,
          firstName: "",
          lastName: "",
          companyName: "",
          companyEmail: "",
          phoneNumber: "",
          locations: "",
          micromarket: "",
          Company_size: "",
          workspaceType: "",
          hasBroker: true,
          city: "",
          additionalNotes: "",
        });
        toast.success(respJson.message);
        const response2 = await fetch(
        `https://hook.eu2.make.com/zhldig0vvqdy2vlof58m84rtgjxcqf83`,
        {
          method: "POST",
          body: formData1,
        }
      );
      } else {
        toast.error(respJson.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let array1to50 = [];
  array1to50.push(5);
  array1to50.push(20);
  array1to50.push(50);
  array1to50.push(100);

  return (
    <>
      <div className="get_main_component" id="tarrgett">
        <div
          className="get_image"
          style={{
            // paddingTop: "10px",
            minHeight: `${containerRef?.current?.offsetHeight}px`,
            maxHeight: `${containerRef?.current?.offsetHeight}px`,
          }}
        >
          <img className="get_image_image" src={getImage} alt="" />
        </div>
        <div className="get_form" ref={containerRef} style={{ marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p
              className="form_heading"
              style={{ color: "#6aadd7", fontSize: "30px", fontWeight: "600" }}
            >
              Got questions? We've got answers.
            </p>
            <p className="form_description">
              Fill out the form below and a member of our team will get in touch
              with you to learn more about your workplace needs
            </p>
          </div>
          <div className="input-row-form-wraper">
            <div className="input-row-form">
              <CustomInput
                label="First Name*"
                placeholder={"First Name*"}
                value={formData.firstName}
                onChange={(v) => {
                  setFormData({
                    ...formData,
                    firstName: v.target.value
                      .trimStart()
                      .replace(/[^a-zA-Z0-9 ]/g, "")
                      .replace(/^[0-9]/, "")
                      .replace(/\s{2,}/g, " "),
                  });
                }}
              />
              <CustomInput
                label="Last Name*"
                placeholder={"Last Name*"}
                value={formData.lastName}
                onChange={(v) => {
                  setFormData({
                    ...formData,
                    lastName: v.target.value
                      .trimStart()
                      .replace(/[^a-zA-Z0-9 ]/g, "")
                      .replace(/^[0-9]/, "")
                      .replace(/\s{2,}/g, " "),
                  });
                }}
              />
            </div>
            <div className="input-row-form">
              <CustomInput
                label="Company Name*"
                placeholder={"Company Name*"}
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
                label="Company E-mail Address*"
                placeholder="Company E-mail Address*"
                value={formData.companyEmail}
                onChange={(v) => {
                  setFormData({
                    ...formData,
                    companyEmail: v.target.value.trim(),
                  });
                }}
              />
            </div>
            <CustomInput
              label="Phone Number*"
              placeholder="Phone Number*"
              value={formData.phoneNumber}
              onChange={(v) => {
                v.target.value?.length > 10 ||
                  setFormData({
                    ...formData,
                    phoneNumber: v.target.value.trim().replace(/[^0-9 ]/g, ""),
                  });
              }}
            />
            <CustomInput
              drop={true}
              label="City*"
              value={formData.city}
              onChange={(v) => {
                setFormData({
                  ...formData,
                  city: v.target.value,
                });
              }}
            >
              {cities_list?.map((val, ind) => (
                <MenuItem className="select_get_in_touch" value={val.CITY_NAME}>
                  {val.CITY_NAME}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput
              drop={true}
              label="Locations*"
              value={formData.locations}
              onChange={(v) => {
                setFormData({
                  ...formData,
                  locations: v.target.value,
                });
              }}
            >
              {location_list?.map((val, ind) => (
                <MenuItem
                  className="select_get_in_touch"
                  value={val.LOCATION_NAME}
                >
                  {val.LOCATION_NAME}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput
              drop={true}
              value={formData.micromarket}
              label="Product Type*"
              onChange={(v) => {
                setFormData({
                  ...formData,
                  micromarket: v.target.value,
                });
              }}
            >
              {products_list.map((e) => (
                <MenuItem className="select_get_in_touch" value={`${e.TITLE}`}>
                  {e.TITLE}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput
              drop={true}
              label="Company size*"
              value={formData.Company_size}
              onChange={(v) => {
                setFormData({
                  ...formData,
                  Company_size: v.target.value,
                });
              }}
            >
              {["5+", "20+", "50+", "100+"].map((e) => (
                <MenuItem className="select_get_in_touch" value={e}>
                  {e}
                </MenuItem>
              ))}
            </CustomInput>
            <CustomInput
              label="Additional Notes"
              placeholder="Additional Notes"
              value={formData.additionalNotes}
              onChange={(v) => {
                setFormData({
                  ...formData,
                  additionalNotes: v.target.value.trimStart(),
                });
              }}
              multiline={true}
              minRows={3}
            />
            <div
              className="form_inputs_checkbox"
              style={{
                border: "none",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <FormControl
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                className={focusedField === "name" ? "orange-border" : ""}
              >
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Do you have a broker?*
                </FormLabel>
                <RadioGroup name="hasBroker" row>
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
                        type="radio"
                        name="hasBroker"
                        className="orange-radio"
                        checked={formData.hasBroker}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            hasBroker: true,
                          })
                        }
                      />
                      <span style={{ fontSize: 16, fontWeight: "400" }}>
                        Yes
                      </span>
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
                        type="radio"
                        name="hasBroker"
                        checked={!formData.hasBroker}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            hasBroker: false,
                          })
                        }
                      />
                      <span style={{ fontSize: 16, fontWeight: "400" }}>
                        No
                      </span>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="agreement">
            <p
              style={{
                fontSize: "10px",
                color: "#897C7C",
                fontWeight: "600",
              }}
            >
              By clicking the button below, you agree to our{" "}
              <span style={{ textDecoration: "underline" }}>
                Terms of Service
              </span>{" "}
              and acknowledge our{" "}
              <span style={{ textDecoration: "underline" }}>
                Privacy Policy
              </span>
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="agreement_button"
              style={{
                width: "35%",
                height: "40px",
                border: "none",
                borderRadius: "8px",
                marginTop: "5px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <TouchSmall setFlag2={setFlag2} />
      {flag2 && <TouchForm setFlag2={setFlag2} />}
    </>
  );
};

export default GetInTouch;
