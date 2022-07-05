import React from "react";
import classes from "./SectionsCss/SectionOne.module.css";
import "../components/componentsCss/button.css";
import Video from "../images/Portfolio_background.mp4";

function SectionOne() {
  return (
    <section>
      <video autoPlay muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={classes.videoFrame}>
        <div>
          <p>Hey, I am Arman</p>
          <p className={classes.mb_3}>I build modern responsive websites</p>
          <button className={"btn white"}>
            <a href="#">Get in touch</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
