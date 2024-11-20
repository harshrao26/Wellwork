import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-toastify";
import { validateEmail } from "../../../utils/utils";
import MenuItem from "@mui/material/MenuItem";
import CustomInput from "../../../constants/CustomInput";
import { base_url } from "../../../context/data/myState";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const GetInTouch = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [resume, setResume] = useState(null); // State to hold the uploaded resume
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    workedWithAltis: true,
    currentOpenings: "",
    interestedIn: "",
    additionalNotes: "",
  });
  const [current, setCurrent] = useState([]);
  const [interested, setInterested] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const get_drop1 = async () => {
    try {
      const response = await fetch(
        `${base_url}dropdowns/list/Current openings`,
        {
          method: "GET",
        }
      );
      const res = await response.json();
      // console.log(res);
      if (res.success) {
        setCurrent(res.data);
      } else {
        setCurrent([]);
      }
    } catch (error) {}
  };
  const get_drop2 = async () => {
    try {
      const response = await fetch(
         `${base_url}dropdowns/list/Interested in`,
        {
          method: "GET",
        }
      );
      const res = await response.json();
      if (res.success) {
        setInterested(res.data);
      } else {
        setInterested([]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    get_drop1();
    get_drop2();
  }, []);

  const handleFormSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.companyName ||
      !formData.phone ||
      !formData.currentOpenings ||
      !formData.interestedIn ||
      resume == null
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
      body.append("ALTIS_EARLIER_EXP", formData.workedWithAltis);
      body.append("CURRENT_OPENINGS", formData.currentOpenings);
      body.append("INTRESTED_IN", formData.interestedIn);
      body.append("ADDITIONAL_NOTES", formData.additionalNotes);
      body.append("FILE", resume); // Append the uploaded resume
      // console.log("body", body);
      const response = await fetch(
         `${base_url}career/add`,
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
          currentOpenings: "",
          interestedIn: "",
          additionalNotes: "",
        });
        setResume(null);
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
      <p className="gt_heading" style={{ marginBottom: "40px" }}>
        Get in touch with us
      </p>
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
            setFormData({
              ...formData,
              email: v.target.value.trim(),
            });
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
        <FormControl style={{ width: "100% !important" }}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Have you worked with WellWork earlier?*
          </FormLabel>
          <RadioGroup name="workedWithWellWork" row>
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
                    setFormData({ ...formData, workedWithAltis: true })
                  }
                  checked={formData.workedWithAltis}
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
                    setFormData({ ...formData, workedWithAltis: false })
                  }
                  checked={!formData.workedWithAltis}
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
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ backgroundColor: "#6aadd7" }}
            >
              Upload Resume*
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </div>
          <div style={{ color: "#5b5050", fontSize: 14 }}>{resume?.name}</div>
        </div>
        <CustomInput
          large
          drop={true}
          label="Current openings"
          value={formData.currentOpenings}
          onChange={(v) => {
            setFormData({
              ...formData,
              currentOpenings: v.target.value,
            });
          }}
        >
          {current?.map((e, i) => (
            <MenuItem className="select_get_in_touch" value={`${e.NAME}`}>
              {e.NAME}
            </MenuItem>
          ))}
        </CustomInput>

        <CustomInput
          large
          drop={true}
          label="Interested in"
          value={formData.interestedIn}
          onChange={(v) => {
            setFormData({
              ...formData,
              interestedIn: v.target.value,
            });
          }}
        >
          {interested?.map((e, i) => (
            <MenuItem className="select_get_in_touch" value={`${e.NAME}`}>
              {e.NAME}
            </MenuItem>
          ))}
        </CustomInput>
      </div>
      <CustomInput
        large
        label="Additional Notes"
        value={formData.additionalNotes}
        onChange={(v) => {
          setFormData({
            ...formData,
            additionalNotes: v.target.value,
          });
        }}
        multiline
        minRows={4}
      />
      <p className="gt_textt">
        By clicking the button below, you agree to our{" "}
        <Link to={"/t&c"} style={{ textDecoration: "none" }}>
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
