import React from "react";
import { ToolColumn } from "./ToolColumn";
import { Col, Row } from "reactstrap";

export const Tools = () => {
  return (
    <section id="tools">
      <h1
        style={{ marginBottom: "30px" }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Tools
      </h1>
      <p data-aos="fade-up" data-aos-duration="800">
        I like to think of myself as being language agnostic, but here are some
        of the current tools I've been using.
      </p>
      <Row
        lg={3}
        md={2}
        sm={1}
        xs={1}
        className="d-flex justify-content-space-between"
        data-aos="fade-up"
        data-aos-duration="800"
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
