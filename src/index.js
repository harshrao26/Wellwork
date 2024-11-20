import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create your theme with MuiBackdrop customization
const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          backdropFilter: "none",

          "&.MuiBackdrop-invisible": {
            backgroundColor: "transparent",
            // Remove or adjust the backdrop filter here
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <ToastContainer />
  </React.StrictMode>
);
