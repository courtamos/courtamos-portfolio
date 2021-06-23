import React, { useState } from "react";
import {
  NavbarToggler,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <NavbarBrand href="/">Courtney Amos</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} className="justify-content-end" navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects/">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tools/">Tools</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact/">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
