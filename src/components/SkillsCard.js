import React from "react";
import "./componentsCss/skillsCard.css";

function SkillsCard({ name, icon }) {
  return (
    <div className={"skills_card"}>
      <div className={`icon ${icon}`}></div>
      <p>{name}</p>
    </div>
  );
}

export default SkillsCard;
