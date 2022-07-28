import React, { useState } from "react";
import "./componentsCss/projectCard.css";
import "./componentsCss/button.css";

function ProjectCard({ name, icon }) {
  let linkToGit = "";
  let linkToDemo = "";
  switch (name) {
    case "Plane tracker (Git)":
      linkToGit = "https://github.com/ArmanArm4/Flight-Tracker";
      break;
    case "Spooky game (Git)":
      linkToGit = "#";
      break;
    case "Commercial site (Git)":
      linkToGit = "#";
      break;
    case "chess":
      linkToGit = "#";
      break;
  }
  return (
    <div className={"project_card"}>
      <div className={`planetIcon ${icon}`}></div>
      <p>
        <a target="_blank" href={linkToGit}>
          {name}
        </a>
      </p>
      <a href="#">
        <button className="btn orange">
          {name == "chess" ? "Coming soon" : "Live demo"}
        </button>
      </a>
    </div>
  );
}

export default ProjectCard;
