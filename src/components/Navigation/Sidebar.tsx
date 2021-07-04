import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-scroll";
import {
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavLink,
  StyledParagraph,
} from "./styled";

export const Sidebar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarBrand>
        <Link to="banner" spy={true} smooth={true} duration={5} offset={-110}>
          C.amos
        </Link>
      </StyledNavbarBrand>
      <Nav vertical>
        <NavItem>
          <StyledNavLink>
            <Link to="about" spy={true} smooth={true} duration={5}>
              About
            </Link>
          </StyledNavLink>
          <StyledParagraph>Learn more about me</StyledParagraph>
        </NavItem>

        <NavItem>
          <StyledNavLink>
            <Link to="tools" spy={true} smooth={true} duration={5} offset={-80}>
              Tools
            </Link>
          </StyledNavLink>
          <StyledParagraph>The tools I'm using</StyledParagraph>
        </NavItem>

        <NavItem>
          <StyledNavLink>
            <Link to="projects" spy={true} smooth={true} duration={5}>
              Projects
            </Link>
          </StyledNavLink>
          <StyledParagraph>See my work</StyledParagraph>
        </NavItem>

        <NavItem>
          <StyledNavLink>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={5}
              offset={-80}
            >
              Contact
            </Link>
          </StyledNavLink>
          <StyledParagraph>Let's connect</StyledParagraph>
        </NavItem>
      </Nav>
    </StyledNavbar>
  );
};
