import React from "react";
import classes from "./SectionsCss/sectionTwo.module.css";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, type: "spring" },
};
function SectionTwo() {
  const Links = [
    ["orangeIcon", "Plane tracker (Git)"],
    ["purpleIcon", "Spooky game (Git)"],
    ["greenIcon", "Commercial site (Git)"],
    ["lightBlueIcon", "chess"],
  ];
  return (
    <Element name="section_2">
      <section className={classes.section} id="s_2">
        <PageTitle
          type={"OrangeType"}
          text_a={"My"}
          text_b={"Projects"}
        ></PageTitle>
        <motion.main
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        >
          {Links.map(link => (
            <ProjectCard key={link} name={link[1]} icon={link[0]}></ProjectCard>
          ))}
        </motion.main>
      </section>
    </Element>
  );
}

export default SectionTwo;
