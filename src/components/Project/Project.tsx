import React from "react";
import { ProjectImage } from "./ProjectImage";
import { Technology } from "./Technology";
import { Link } from "./Link";
import project1 from "./images/project-1.png";

export const Project = () => {
  return (
    <section>
      <h1 style={{ margin: "50px 0px" }}>Projects</h1>
      <ProjectImage
        projectImage={project1}
        projectTitle="Title"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        incidunt nam saepe exercitationem ipsam sapiente temporibus
        consectetur ad harum quae, velit id voluptatem nesciunt
        repellendus corporis mollitia. Explicabo, beatae modi."
      />
      <h3>Technology Used</h3>
      <div className="tech-stack" style={{ marginBottom: "20px" }}>
        <Technology techUsed="JavaScript" />
        <Technology techUsed="TypeScript" />
        <Technology techUsed="React" />
      </div>
      <h3>See it Yourself</h3>
      <div className="links">
        <Link
          githubLink="https://github.com/courtamos"
          deployedLink="https://github.com/courtamos"
        />
      </div>
    </section>
  );
};
