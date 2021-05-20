import React from "react";
import "./Header.css";

const Header = ({ textPresent, headerTitle }) => {
  return (
    <div className="head-container">
      <img
        className={`head-image
          ${textPresent ? "head-image-contracted" : "head-image-expanded"}
        `}
        alt="headimage"
        src="https://cutt.ly/WbBICFa"
      ></img>
      <h1
        className={`head-text
          ${textPresent ? "head-text-contracted" : "head-text-expanded"}
        `}
      >
        {headerTitle}
      </h1>
    </div>
  );
};

export default Header;
