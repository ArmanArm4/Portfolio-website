import React, { useState } from "react";
import "./componentsCss/projectCard.css";
import "./componentsCss/button.css";

function ProjectCard({ name, icon }) {
  let linkToGit = "";
  let linkToDemo = "https://www.schemecolor.com/go-diving.php";
  switch (name) {
    case "Plane tracker (Git)":
      linkToGit = "https://github.com/ArmanArm4/Flight-Tracker";
      linkToDemo = "https://planetracker.netlify.app";
      break;
    case "Spooky game (Git)":
      linkToGit = "https://github.com/ArmanArm4/Spooky-Game";
      linkToDemo = "https://spookygame.netlify.app";
      break;
    case "Commercial app (Git)":
      linkToGit = "https://github.com/ArmanArm4/UpStairs";
      linkToDemo = "https://up-stairs.netlify.app";
      break;
    case "chess":
      linkToGit = "https://github.com/ArmanArm4/chess";
      linkToDemo = "https://up-stairs.netlify.app";
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
      {name == "chess" && (
        <a target="_blank">
          <button className="btn orange">Coming soon</button>
        </a>
      )}
      {name != "chess" && (
        <a href={linkToDemo} target="_blank">
          <button className="btn orange">Live demo</button>
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
