import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-scroll";
import { StyledNavbar, StyledNavbarBrand, StyledNavLink } from "./styled";

export const Sidebar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarBrand>
        <Link to="banner" spy={true} smooth={true} duration={5}>
          Courtney Amos
        </Link>
      </StyledNavbarBrand>
      <Nav vertical>
        <NavItem>
          <StyledNavLink>
            <Link to="about" spy={true} smooth={true} duration={5}>
              About
            </Link>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink>
            <Link
              to="tools"
              spy={true}
              smooth={true}
              duration={5}
              offset={-100}
            >
              Tools
            </Link>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink>
            <Link to="projects" spy={true} smooth={true} duration={5}>
              Projects
            </Link>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink>
            <Link to="contact" spy={true} smooth={true} duration={5}>
              Contact
            </Link>
          </StyledNavLink>
        </NavItem>
      </Nav>
    </StyledNavbar>
  );
};
