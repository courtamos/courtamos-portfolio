import React from "react";
import { StyledTechnologyDiv, StyledLinksDiv } from "./styled";
import { Image } from "./Image";
import { Technology } from "./Technology";
import { Link } from "./Link";
import project1 from "./images/project-1.png";
import project2 from "./images/project-2.png";

export const Project = () => {
  return (
    <section id="projects">
      <h1 style={{ margin: "50px 0px" }}>Projects</h1>
      <Image
        projectImage={project1}
        projectTitle="Trakr"
        projectDescription="Trakr is a full-stack app that helps track your stage in the application process, so you have all your applications easily accessible in one place. This project was completed for the Lighthouse Labs Wed Development Bootcamp final project."
      />
      <h3>Technology Used</h3>
      <StyledTechnologyDiv>
        <Technology techUsed="PostgreSQL" />
        <Technology techUsed="Ruby" />
        <Technology techUsed="Rails" />
        <Technology techUsed="ReactJS" />
        <Technology techUsed="Redux" />
        <Technology techUsed="MaterialUI" />
      </StyledTechnologyDiv>
      <h3>See it Yourself</h3>
      <StyledLinksDiv>
        <Link
          deployedLink="https://nostalgic-kalam-c12902.netlify.app/"
          githubLink="https://github.com/courtamos/final-frontend"
        />
      </StyledLinksDiv>
      <Image
        projectImage={project2}
        projectTitle="Scheduler"
        projectDescription="Using the latest tools and technologies, Scheduler is a React application that allows users to book and cancel interviews. Created as a part of the Lighthouse Labs curriculum."
      />
      <h3>Technology Used</h3>
      <StyledTechnologyDiv>
        <Technology techUsed="PostgreSQL" />
        <Technology techUsed="ReactJS" />
        <Technology techUsed="Webpack" />
        <Technology techUsed="Babel" />
        <Technology techUsed="Storybook" />
        <Technology techUsed="Jest" />
        <Technology techUsed="React Testing Library" />
      </StyledTechnologyDiv>
      <h3>See it Yourself</h3>
      <StyledLinksDiv>
        <Link githubLink="https://github.com/courtamos/scheduler" />
      </StyledLinksDiv>
    </section>
  );
};
