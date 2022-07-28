import React from "react";
import PageTitle from "../components/PageTitle";
import classes from "./SectionsCss/sectionThree.module.css";
import SkillsCard from "../components/SkillsCard";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, type: "spring" },
};
const Skills = [
  ["js", "JavaScript ES6"],
  ["figma", "Figma"],
  ["html", "HTML5"],
  ["react", "React js"],
  ["css", "CSS3"],
  ["git", "GitHub"],
];
function SectionThree() {
  return (
    <Element name="section_3">
      <section className={classes.section} id="s_2">
        <PageTitle
          type={"GreenType"}
          text_a={"My"}
          text_b={"Skills"}
        ></PageTitle>
        <motion.main
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        >
          {Skills.map(skill => (
            <SkillsCard name={skill[1]} icon={skill[0]}></SkillsCard>
          ))}
        </motion.main>
      </section>
    </Element>
  );
}

export default SectionThree;
