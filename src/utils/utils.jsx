export const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <div
      style={{
        height: 6,
        width: 6,
        backgroundColor: active ? "#6aadd7" : "#D9D9D9",
        borderRadius: 20,
        margin: 2,
      }}
      //   className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {/* {React.Children.toArray(data.length)[index]} */}
    </div>
  );
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const Button = ({ title }) => {
  return (
    <button
      className="button_main"
      // style={{
      //   width: "45%",
      //   height: "40px",
      //   border: "none",
      //   borderRadius: "8px",
      // }}
    >
      {title || "Get in touch"}
    </button>
  );
};
