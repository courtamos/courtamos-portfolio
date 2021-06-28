import React from "react";
import { AboutTimeline } from "./AboutTimeline";

export const About = () => {
  return (
    <section id="about">
      <h1 style={{ margin: "50px 0px" }}>About</h1>
      <div>
        <p>
          Before entering the tech world, I worked in the Social Service field
          with a background in Criminology. I initially took up coding as a
          hobby but quickly found myself enjoying it a lot more than my job at
          the time. After realizing the passion I had for coding, I took a leap
          and enrolled myself in a web development bootcamp. Since graduating, I
          continue to learn every day and embrace the crazy process that comes
          with being a developer.
        </p>
        <p>
          Still want to know more about how I got here today? Keep scrolling ⬇️
        </p>
      </div>
      <AboutTimeline />
    </section>
  );
};
