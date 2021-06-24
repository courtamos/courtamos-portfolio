import React from "react";
import { Link } from "./Link";
import { Technology } from "./Technology";

export const Project = () => {
  return (
    <section>
      <h1>Projects</h1>
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
