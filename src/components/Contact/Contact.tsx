import React from "react";
import { Col, Row } from "reactstrap";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from "./ContactForm";
import { StyledParagraph, StyledFontAwesomeIcon } from "./styled";
import "./contact.scss";

export const Contact = () => {
  return (
    <section id="contact">
      <h1 style={{ margin: "50px 0px" }}>Contact</h1>
      <Row lg={2} md={1} sm={1} xs={1}>
        <Col className="d-flex align-items-center">
          <div>
            <h2>Get In Touch 📥</h2>
            <StyledParagraph>
              Have a question?
              <br />
              Send me an email and let's chat!
            </StyledParagraph>
            <h3>My Socials</h3>
            <a
              href="https://github.com/courtamos"
              target="_blank"
              rel="noreferrer"
            >
              <StyledFontAwesomeIcon
                className="github"
                icon={faGithubSquare}
                size="3x"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/court-amos/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledFontAwesomeIcon
                className="linkedin"
                icon={faLinkedin}
                size="3x"
              />
            </a>
          </div>
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </section>
  );
};
