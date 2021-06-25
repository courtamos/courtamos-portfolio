import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: #ffffff;
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  color: black;
  &:hover {
    color: pink;
    border-bottom: 2px solid pink;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  padding-bottom: 3px;
  &:hover {
    color: pink;
    border-bottom: 2px solid pink;
  }
`;
