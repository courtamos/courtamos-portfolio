import React, { useState } from "react";
import { NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { StyledNavbar, StyledNavbarBrand, StyledNavLink } from "./styled";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar expand="md" sticky="top">
      <StyledNavbarBrand href="/">Courtney Amos</StyledNavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} className="justify-content-end" navbar>
        <Nav navbar>
          <NavItem>
            <StyledNavLink href="/about/">About</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink href="/projects/">Projects</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink href="/tools/">Tools</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink href="/contact/">Contact</StyledNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </StyledNavbar>
  );
};
