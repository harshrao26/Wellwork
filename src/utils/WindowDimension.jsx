import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(customHeight) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  // const [customHeight, setCustomHeight] = useState(0);
  // console.log("setCustomHeight", setCustomHeight);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateHeight = (width) => {
    // Here you can define your logic to calculate height based on width
    // For example, you can use a ratio or any other calculation method

    // return width * 0.5; // Just an example, adjust this according to your requirements
    return width * Number(customHeight); // Just an example, adjust this according to your requirements
  };
  const [width1, setWidth] = useState(window.innerWidth);
  const [height1, setHeight] = useState(calculateHeight(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(calculateHeight(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const calculateFontSize = (width) => {
    // Here you can define your logic to calculate font size based on width
    // For example, you can use a ratio or any other calculation method
    return width * 0.03; // Just an example, adjust this according to your requirements
  };
  const [width, setWidth1] = useState(window.innerWidth);
  const [fontSize, setFontSize] = useState(
    calculateFontSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth1(window.innerWidth);
      setFontSize(calculateFontSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowDimensions, height1, width1, fontSize };
}
