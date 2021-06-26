import React from "react";
import { ToolColumn } from "./ToolColumn";
import { Col, Row } from "reactstrap";

export const Tools = () => {
  return (
    <section id="tools">
      <h1 style={{ margin: "50px 0px" }}>Tools</h1>
      <p>
        I like to think I'm language agnostic, but here are some of my favorite
        tools right now
      </p>
      <Row
        lg={3}
        md={2}
        sm={1}
        xs={1}
        className="d-flex justify-content-space-between"
      >
        <Col>
          <ToolColumn
            columnTitle="Languages"
            columnItems={[
              "JavaScript",
              "TypeScript",
              "Ruby",
              "HTML",
              "CSS",
              "SQL",
            ]}
          />
        </Col>
        <Col>
          <ToolColumn
            columnTitle="Frameworks & Libraries"
            columnItems={[
              "NodeJS",
              "ExpressJS",
              "ReactJS",
              "Redux",
              "Rails",
              "MaterialUI",
              "Styled Components",
              "SCSS",
            ]}
          />
        </Col>
        <Col>
          <ToolColumn
            columnTitle="Other"
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
        </Col>
      </Row>
    </section>
  );
};
