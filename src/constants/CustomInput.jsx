import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const CustomInput = ({
  drop,
  value,
  onChange,
  multiline,
  minRows,
  label,
  children,
  placeholder,
  large = false,
  InputProps,
  inputProps,
  type,
  InputLabelProps,
  FormHelperTextProps,
}) => {
  return (
    <>
      {drop ? (
        <FormControl
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#5b5050",
              fontFamily: "Arial",
              fontWeight: "400",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #ccc",
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #6aadd7",
                },
              },
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5b5050",
                },
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#5b5050",
              fontWeight: "400",
              "&.Mui-focused": {
                color: "#5b5050",
                fontWeight: "400",
              },
            },
          }}
          fullWidth
          size={large ? "medium" : "small"}
        >
          <InputLabel id="demo-select-small-label">{label}</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={value}
            label={label}
            onChange={onChange}
          >
            {/* <MenuItem value={10}>Ten</MenuItem> */}
            {children}
          </Select>
        </FormControl>
      ) : (
        <TextField
          type={type}
          multiline={multiline}
          minRows={minRows}
          label={label}
          variant="outlined"
          size={large ? "medium" : "small"}
          fullWidth
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          InputLabelProps={InputLabelProps}
          FormHelperTextProps={FormHelperTextProps}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#5b5050",
              fontFamily: "Arial",
              fontWeight: "400",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #ccc",
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #6aadd7",
                },
              },
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5b5050",
                },
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#5b5050",
              fontWeight: "400",
              "&.Mui-focused": {
                color: "#5b5050",
                fontWeight: "400",
              },
            },
          }}
          inputProps={inputProps}
          InputProps={InputProps}
        />
      )}
    </>
  );
};

export default CustomInput;
