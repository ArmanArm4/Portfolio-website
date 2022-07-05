import React from "react";
import classes from "./componentsCss/Nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={classes.logo}></div>
      <ul>
        <li className={classes.link}>
          <a href="#s_2">Projects</a>
        </li>
        <li className={classes.link}>
          <a href="#">Skills</a>
        </li>
        <li className={classes.link}>
          <a href="">Github</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
