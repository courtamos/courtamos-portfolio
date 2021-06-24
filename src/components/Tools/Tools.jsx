import React from "react";
import { ToolColumn } from "./ToolColumn";
import { StyledToolsDiv } from "./styled";

export const Tools = () => {
  return (
    <section>
      <h1 style={{ margin: "50px 0px" }}>Tools</h1>
      <p>
        I like to think I'm language agnostic, but here are some of my favorite
        tools right now
      </p>
      <StyledToolsDiv>
        <ToolColumn
          columnTitle="Languages"
          columnItems={["JavaScript", "TypeScript", "Ruby", "HTML", "CSS"]}
        />
        <ToolColumn
          columnTitle="Frameworks & Libraries"
          columnItems={[
            "NodeJS",
            "ReactJS",
            "ExpressJS",
            "Rails",
            "Redux",
            "jQuery",
            "Ajax",
            "MaterialUI",
            "Bootstrap",
            "SCSS",
          ]}
        />
        <ToolColumn
          columnTitle="Systems & Databases"
          columnItems={["Git", "PostgreSQL", "SQL"]}
        />
        <ToolColumn
          columnTitle="Testing"
          columnItems={[
            "Mocha",
            "Chai",
            "Cypress",
            "Storybook",
            "React Testing Library",
            "RSpec",
            "Capybara",
          ]}
        />
      </StyledToolsDiv>
    </section>
  );
};
