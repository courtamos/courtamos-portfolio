import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px;
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  color: #ffffff;
  margin-bottom: 50px;
  &:hover,
  .active {
    cursor: pointer;
    color: pink;
    border-bottom: 2px solid pink;
    text-decoration: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  padding-left: 0px;
  margin-bottom: 15px;
  &:hover,
  .active {
    cursor: pointer;
    color: pink;
    border-bottom: 2px solid pink;
    text-decoration: none;
  }
`;
