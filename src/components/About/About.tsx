import React from "react";
import { Experience } from "./Experience";

export const About = () => {
  return (
    <section>
      <h1>About</h1>
      <div>
        <p>
          I’m a self-taught Front End Developer who’s been coding for xyz. Since
          starting my coding journey I’ve worked on my own projects as well as
          in a startup. I continue to learn everyday and embrace the crazy
          process.
        </p>
        <p>
          Keep reading for more about me and how I've gotten to where I am ⬇️
        </p>
      </div>
      <Experience
        companyName="Built Better Technology"
        jobTitle="Designer & Developer"
        yearFrom={2020}
        yearTo={2021}
        details="Worked a part of a startup as a Designer and transitioned into a Junior Developer role. Designed a variety of different websites and apps for both clients and contract companies. Contributed front end development to Building Blocks Content Management System."
      />
    </section>
  );
};
