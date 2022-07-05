import React from "react";
import classes from "./SectionsCss/sectionTwo.module.css";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";

function SectionTwo() {
  const Links = [
    ["orangeIcon", "Plane tracker (Git)"],
    ["purpleIcon", "Spooky game (Git)"],
    ["greenIcon", "Commercial site (Git)"],
    ["lightBlueIcon", "chess"],
  ];
  return (
    <section className={classes.section} id="s_2">
      <PageTitle type={"OrangeType"}></PageTitle>
      <main>
        {Links.map(link => (
          <ProjectCard name={link[1]} icon={link[0]}></ProjectCard>
        ))}
      </main>
    </section>
  );
}

export default SectionTwo;
