import React from "react";
import PageTitle from "../components/PageTitle";
import classes from "./SectionsCss/sectionThree.module.css";
import SkillsCard from "../components/SkillsCard";

const Skills = [
  ["js", "JavaScript"],
  ["figma", "Figma"],
  ["html", "HTML5"],
  ["react", "React js"],
  ["css", "CSS3"],
  ["git", "GitHub"],
];
function SectionThree() {
  return (
    <section className={classes.section} id="s_2">
      <PageTitle type={"GreenType"}></PageTitle>
      <main>
        {Skills.map(skill => (
          <SkillsCard name={skill[1]} icon={skill[0]}></SkillsCard>
        ))}
      </main>
    </section>
  );
}

export default SectionThree;
