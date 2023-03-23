import React, { useState, useEffect } from "react";

import "./Logo.css";

function Logo() {
  const [showFullLogo, setShowFullLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowFullLogo(false);
    }, 1000);
  }, []);

  return (
    <div className="logo-container">
      <img
        className={`logo ${showFullLogo ? "full-logo" : ""}`}
        src="./images/jarmLogo.png"
        alt="Logo"
      />
    </div>
  );
}
export default Logo;
