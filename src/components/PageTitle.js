import React from "react";
import "./componentsCss/PageTitle.css";

function PageTitle({ type, text_a, text_b }) {
  return (
    <h2 className={`h2 ${type}`}>
      {text_a} <span>{text_b}</span>
    </h2>
  );
}

export default PageTitle;
