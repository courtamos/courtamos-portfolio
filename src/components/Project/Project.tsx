import React from "react";
import { Technology } from "./Technology";

export const Project = () => {
  return (
    <section>
      <h1>Projects</h1>
      <h3>Technology Used</h3>
      <div className="tech-stack">
        <Technology techUsed="JavaScript" />
        <Technology techUsed="TypeScript" />
        <Technology techUsed="React" />
      </div>
      <h3>See it Yourself</h3>
    </section>
  );
};
