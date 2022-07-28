import React from "react";
import classes from "./SectionsCss/sectionFour.module.css";
import PageTitle from "../components/PageTitle";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, type: "spring" },
};
function SectionFour() {
  return (
    <Element name="section_4" className={classes.section}>
      <PageTitle
        type={"blueType"}
        text_a={"Get"}
        text_b={"in Touch"}
      ></PageTitle>
      <main>
        <motion.form
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          class="translate_top_animations"
          target="_blank"
          action="https://formsubmit.co/amatevo095@student.glendale.edu"
          method="POST"
        >
          <div className={classes.small_inputs}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <textarea placeholder="Message" name="message" required></textarea>

          <button data-tilt type="submit" className="btn blue">
            Get in Touch
          </button>
        </motion.form>
        <div className={classes.illustration}>
          <div>
            <a href="https://mail.google.com/mail/u/0/#search/armanmatevosyan470124%40gmail.com">
              <div className={classes.mail_icon}></div>
            </a>
            <a href="https://github.com/ArmanArm4">
              <div className={classes.git_icon}></div>
            </a>
            <a href="https://www.instagram.com/am_01_01/">
              <div className={classes.insta_icon}></div>
            </a>
          </div>
        </div>
      </main>
    </Element>
  );
}

export default SectionFour;
