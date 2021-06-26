import React from "react";
import { Image } from "./Image";
import { Technology } from "./Technology";
import { Link } from "./Link";
import project1 from "./images/project-1.png";

export const Project = () => {
  return (
    <section>
      <h1 style={{ margin: "50px 0px" }}>Projects</h1>
      <Image
        projectImage={project1}
        projectTitle="Trakr"
        projectDescription="Trakr is a full-stack app that helps track your stage in the application process, so you have all your applications easily accessible in one place. This project was completed for the Lighthouse Labs Wed Development Bootcamp final project."
      />
      <h3>Technology Used</h3>
      <div className="tech-stack" style={{ marginBottom: "20px" }}>
        <Technology techUsed="PostgreSQL" />
        <Technology techUsed="Ruby" />
        <Technology techUsed="Rails" />
        <Technology techUsed="ReactJS" />
        <Technology techUsed="Redux" />
        <Technology techUsed="MaterialUI" />
      </div>
      <h3>See it Yourself</h3>
      <div style={{ display: "flex" }}>
        <Link
          deployedLink="https://nostalgic-kalam-c12902.netlify.app/"
          githubLink="https://github.com/courtamos/final-frontend"
        />
      </div>
    </section>
  );
};
