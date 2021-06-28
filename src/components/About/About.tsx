import React from "react";
import { Experience } from "./Experience";

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
      <Experience
        companyName="Vancouver Island University"
        jobTitle="Full-Time Student"
        yearFrom={2015}
        yearTo={2019}
        details="After four years of being a full-time student, I graduated from Vancouver Island University with a Bachelor of Arts Major in Criminology. During this time I had the opportunity to intern at Saanich Community Corrections."
      />
      <Experience
        companyName="Surrounded By Cedar Child & Family Services"
        jobTitle="Intensive Youth Support Worker"
        yearFrom={2019}
        yearTo={2020}
        details="After graduating from University, I decided to pursue a career in the Social Services field. I created individual service plans for Indigenous youth in care who engage in high-risk behavior that increased their overall wellbeing."
      />
      <Experience
        companyName="Built Better Technology"
        jobTitle="Designer & Developer"
        yearFrom={2020}
        yearTo={2021}
        details="Began a transition phase from my old career to a new career in tech. During this time I began designing custom websites and apps for clients. After a short while, I began learning some coding basics and had the opportunity to turn some of the designs into front-end production code."
      />
      <Experience
        companyName="Lighthouse Labs"
        jobTitle="Web Development Bootcamp"
        yearFrom={2021}
        yearTo={2021}
        details="Graduated with a Diploma in Web Development that enabled me to transform my hobby into a reality. While in bootcamp, I learned how to build software from the ground up using popular languages, frameworks, and best practices. During this time, I had the opportunity to create 2 full-stack apps as part of midterms and finals. "
      />
    </section>
  );
};
