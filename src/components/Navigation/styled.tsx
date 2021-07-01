import styled from "styled-components";
import { Navbar, NavbarBrand, NavLink, Button } from "reactstrap";

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

  @media (max-width: 992px) {
    margin-right: 0px;
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

  @media (max-width: 992px) {
    padding: 0px;
    margin-bottom: 30px;
  }
`;
interface ToggleProps {
  zIndex: number;
  display: "initial" | "none";
}

export const StyledToggleDiv = styled.div<ToggleProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 25px;
  margin-right: 25px;
  z-index: ${(props) => props.zIndex};
  display: ${(props) => props.display};

  @media (min-width: 992px) {
    display: none;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #1f1f1f;
  color: #ffffff;
  width: 55px;
  height: 55px;
`;
