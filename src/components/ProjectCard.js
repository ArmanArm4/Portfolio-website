import React from "react";
import "./componentsCss/projectCard.css";
import "./componentsCss/button.css";

function ProjectCard({ name, icon }) {
  return (
    <div className={"project_card"}>
      <div className={`planetIcon ${icon}`}></div>
      <p>
        <a href="#">{name}</a>
      </p>
      <button className="btn orange">
        {name == "chess" ? "Coming soon" : "Live demo"}
      </button>
    </div>
  );
}

export default ProjectCard;
