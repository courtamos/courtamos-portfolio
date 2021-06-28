import React, { useState } from "react";
import { NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { Link } from "react-scroll";
import { StyledNavbar, StyledNavbarBrand, StyledNavLink } from "./styled";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar expand="md" sticky="top">
      <StyledNavbarBrand>
        <Link to="banner" spy={true} smooth={true} duration={5}>
          Courtney Amos
        </Link>
      </StyledNavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} className="justify-content-end" navbar>
        <Nav navbar>
          <NavItem>
            <StyledNavLink>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={5}
              >
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
                offset={-100}
                duration={5}
              >
                Tools
              </Link>
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={5}
              >
                Projects
              </Link>
            </StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={5}
              >
                Contact
              </Link>
            </StyledNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </StyledNavbar>
  );
};
