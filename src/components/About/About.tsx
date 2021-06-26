import React from "react";
import { Experience } from "./Experience";

export const About = () => {
  return (
    <section id="about">
      <h1 style={{ margin: "50px 0px" }}>About</h1>
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
        companyName="Vancouver Island University"
        jobTitle="Full-Time Student"
        yearFrom={2015}
        yearTo={2019}
        details="In 2019, after completing 4 years of full-time studies, I received my Bachelor of Arts Major in Criminology. During this time I completed a co-op with BC Community Corrections where I had the opportunity to explore the career of a Probation Officer."
      />
      <Experience
        companyName="Surrounded By Cedar Child & Family Services"
        jobTitle="Intensive Youth Support Worker"
        yearFrom={2019}
        yearTo={2020}
        details="After completing my degree I decided to pursue a career in the Social Services field. I worked with high-risk indigenous youth in care to create a safe space to make time specific goals."
      />
      <Experience
        companyName="Built Better Technology"
        jobTitle="Designer & Developer"
        yearFrom={2020}
        yearTo={2021}
        details="Worked a part of a startup as a Designer and transitioned into a Junior Developer role. Designed a variety of different websites and apps for both clients and contract companies. Contributed front end development to Building Blocks Content Management System."
      />
      <Experience
        companyName="Lighthouse Labs"
        jobTitle="Web Development Bootcamp"
        yearFrom={2021}
        yearTo={2021}
        details="Graduated with a Diploma in Web Development after successfully completing the 12 week bootcamp that was 40hrs+ every week. Focusings on understanding coding logic using popular languages and frameworks."
      />
    </section>
  );
};
