import React, { useState } from "react";
import "../style.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const [textColor, setTextColor] = useState("#1b1b1b");

  const [btnStyle, setBtnStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#39FF14" : "#1b1b1b");
    setBtnStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{ btnStyle, color: textColor, border: `2px solid ${textColor}` }}
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      <section className="content">
        <h1>BEN 10</h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
