import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookATour = () => {
  const navigate = useNavigate();
  const [displayButton, setDisplayButton] = useState(false);

  const scrollToNavDiv = async () => {
    await navigate("/");
    const navDiv = document.getElementById("targetSection");
    if (navDiv) {
      await navDiv.scrollIntoView({ behavior: "instant" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 150) {
        setDisplayButton(true);
      } else {
        setDisplayButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToNavDiv}
      className="book_a_tour_button"
      style={{ display: displayButton ? "block" : "none" }}
    >
      Book A Tour
    </button>
  );
};

export default BookATour;
