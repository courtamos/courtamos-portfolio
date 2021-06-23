import React, { useState } from "react";
import { NavbarToggler, Collapse, Nav, Navbar, NavItem } from "reactstrap";
import { StyledNavbarBrand, StyledNavLink } from "./styled";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md">
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
    </Navbar>
  );
};
