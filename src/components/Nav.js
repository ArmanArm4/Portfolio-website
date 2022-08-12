import React from "react";
import classes from "./componentsCss/Nav.module.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav>
      <a href="/">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: 4,
            duration: 2,
            type: "spring",
            stiffness: 200,
          }}
          className={classes.logo}
        ></motion.div>
      </a>

      <ul>
        <li className={classes.link}>
          <Link to="section_2">Projects</Link>
        </li>
        <li className={classes.link}>
          <Link to="section_3">Skills</Link>
        </li>
        <li className={classes.link}>
          <a href="#">Github</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
