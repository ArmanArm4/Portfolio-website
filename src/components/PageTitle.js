import React from "react";
import "./componentsCss/PageTitle.css";

function PageTitle({ type }) {
  return (
    <h2 className={`h2 ${type}`}>
      My <span>Projects</span>
    </h2>
  );
}

export default PageTitle;
