import React from "react";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from "./ContactForm";
import { StyledDiv, StyledParagraph, StyledFontAwesomeIcon } from "./styled";
import "./contact.scss";

export const Contact = () => {
  return (
    <section>
      <h1 style={{ margin: "50px 0px" }}>Contact</h1>
      <StyledDiv className="contact-items">
        <div className="contact-intro">
          <h2>Get In Touch 📥</h2>
          <StyledParagraph>
            Have a question?
            <br />
            Send me an email and let's chat!
          </StyledParagraph>
          <h3>Some of my socials</h3>
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
        <ContactForm />
      </StyledDiv>
    </section>
  );
};
