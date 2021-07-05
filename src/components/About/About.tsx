import React from "react";
import { AboutTimeline } from "./AboutTimeline";

export const About = () => {
  return (
    <section id="about" style={{ padding: "7% 8%" }}>
      <h1
        style={{ marginBottom: "30px" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        About
      </h1>
      <div>
        <p data-aos="fade-up" data-aos-duration="800">
          Before entering the tech world, I worked in the Social Service field
          with a background in Criminology. I initially took up coding as a
          hobby but quickly found myself enjoying it a lot more than my job at
          the time. After realizing the passion I had for coding, I took a leap
          and enrolled myself in a web development bootcamp. Since graduating, I
          continue to learn every day and embrace the crazy process that comes
          with being a developer.
        </p>
        <p data-aos="fade-up" data-aos-duration="800">
          Still want to know more about how I got here today? Keep scrolling ⬇️
        </p>
      </div>
      <AboutTimeline />
    </section>
  );
};
