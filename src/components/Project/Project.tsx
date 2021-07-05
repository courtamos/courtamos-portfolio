import React from "react";
import { StyledTechnologyDiv, StyledLinksDiv } from "./styled";
import { Image } from "./Image";
import { Technology } from "./Technology";
import { Link } from "./Link";
import project1 from "./images/project-1.png";
import project2 from "./images/project-2.png";
import project3 from "./images/project-3.png";

export const Project = () => {
  return (
    <section id="projects" style={{ padding: "7% 8%" }}>
      <h1
        style={{ marginBottom: "30px" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Projects
      </h1>
      <Image
        projectImage={project1}
        projectTitle="Trakr"
        projectDescription="Trakr is a full-stack app that helps track your stage in the application process, so you have all your applications easily accessible in one place. This project was completed for the Lighthouse Labs Wed Development Bootcamp final project."
      />
      <h3 data-aos="fade-up" data-aos-duration="800">
        Technology Used
      </h3>
      <div data-aos="fade-up" data-aos-duration="800">
        <StyledTechnologyDiv>
          <Technology techUsed="PostgreSQL" />
          <Technology techUsed="Ruby" />
          <Technology techUsed="Rails" />
          <Technology techUsed="ReactJS" />
          <Technology techUsed="Redux" />
          <Technology techUsed="MaterialUI" />
          <Technology techUsed="Netlify" />
          <Technology techUsed="Heroku" />
        </StyledTechnologyDiv>
      </div>
      <h3 data-aos="fade-up" data-aos-duration="800">
        See it Yourself
      </h3>
      <div data-aos="fade-up" data-aos-duration="800">
        <StyledLinksDiv>
          <Link
            deployedLink="https://nostalgic-kalam-c12902.netlify.app/"
            githubLink="https://github.com/courtamos/final-frontend"
          />
        </StyledLinksDiv>
      </div>
      <Image
        projectImage={project2}
        projectTitle="Scheduler"
        projectDescription="Using the latest tools and technologies, Scheduler is a React application that allows users to book and cancel interviews. Created as a part of the Lighthouse Labs curriculum."
      />
      <h3 data-aos="fade-up" data-aos-duration="800">
        Technology Used
      </h3>
      <div data-aos="fade-up" data-aos-duration="800">
        <StyledTechnologyDiv>
          <Technology techUsed="PostgreSQL" />
          <Technology techUsed="ReactJS" />
          <Technology techUsed="Webpack" />
          <Technology techUsed="Babel" />
          <Technology techUsed="Storybook" />
          <Technology techUsed="Jest" />
          <Technology techUsed="React Testing Library" />
        </StyledTechnologyDiv>
      </div>
      <h3 data-aos="fade-up" data-aos-duration="800">
        See it Yourself
      </h3>
      <div data-aos="fade-up" data-aos-duration="800">
        <StyledLinksDiv>
          <Link githubLink="https://github.com/courtamos/scheduler" />
        </StyledLinksDiv>
      </div>
      <Image
        projectImage={project3}
        projectTitle="Personal Portfolio"
        projectDescription="This one is pretty self explanatory - it's what you're currently viewing! This portfolio was created to display some of my work and gave me an opportunity to work in TypeScript and with Styled Components. Additionally, the app is set up for continuous integration on Netlify."
      />
      <h3 data-aos="fade-up" data-aos-duration="800">
        Technology Used
      </h3>
      <div data-aos="fade-up" data-aos-duration="800">
        <StyledTechnologyDiv>
          <Technology techUsed="TypeScript" />
          <Technology techUsed="ReactJS" />
          <Technology techUsed="Styled Components" />
          <Technology techUsed="Reactstrap" />
          <Technology techUsed="SCSS" />
          <Technology techUsed="Netlify" />
        </StyledTechnologyDiv>
      </div>
      <h3 data-aos="fade-up" data-aos-duration="800">
        See it Yourself
      </h3>
      <div data-aos="fade-up" data-aos-duration="800">
        <StyledLinksDiv>
          <Link
            githubLink="https://github.com/courtamos/courtamos-portfolio"
            deployedLink="https://courtneyamos.netlify.app/"
          />
        </StyledLinksDiv>
      </div>
    </section>
  );
};
