import React from "react";
import classes from "./SectionsCss/SectionOne.module.css";
import "../components/componentsCss/button.css";
import Video from "../images/Portfolio_background.mp4";
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

function SectionOne() {
  const variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 5 },
  };
  return (
    <section>
      <video autoPlay muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={classes.videoFrame}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className={classes.intro}>
            <p>Hey, I am Arman</p>
            <p className={classes.mb_3}>I build modern responsive websites</p>
            <Link to="section_4" spy={true}>
              <button className={"btn white"}>Get in touch</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionOne;
