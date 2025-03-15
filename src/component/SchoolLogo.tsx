import React from "react";
import "./global.css";

const SchoolLogo = () => {
  return (
    <header className="header">
      <a href="https://northseattle.edu" className="logo-link" target="_blank" rel="noopener noreferrer">
        <img src="../public/north-seattle-tree-frogs.png" alt="North Seattle College Logo" className="logo" />
      </a>
    </header>
  );
};

export default SchoolLogo;
