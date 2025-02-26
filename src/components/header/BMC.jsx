import React from "react";
import "./bmc.css";

const BMC = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/itsayushmathur" 
      target="_blank"
      rel="noopener noreferrer"
      className="bmc-button"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        // style={{ height: "32px", width: "135px" }}
      />
    </a>
  );
};

export default BMC;
