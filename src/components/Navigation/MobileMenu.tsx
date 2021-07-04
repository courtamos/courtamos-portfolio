import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";
import { Nav, NavItem } from "reactstrap";
import styled from "styled-components";
import {
  StyledButton,
  StyledNavbarBrand,
  StyledNavLink,
  StyledToggleDiv,
} from "./styled";

const StyledMobileNav = styled.div<Pick<Props, "isOpen">>`
  width: 100vw;
  height: ${(props) => (props.isOpen ? "100vh" : "0px")};
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #1f1f1f;
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: height 1s cubic-bezier(0, 0, 0.2, 1);

  @media (min-width: 992px) {
    display: none;
  }
`;

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <StyledMobileNav isOpen={isOpen}>
        <StyledNavbarBrand>
          <Link to="banner" smooth={true} duration={5}>
            Courtney Amos
          </Link>
        </StyledNavbarBrand>
        <Nav vertical justified>
          <NavItem>
            <StyledNavLink>
              <Link
                to="about"
                smooth={true}
                duration={30}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink>
              <Link
                to="tools"
                smooth={true}
                duration={30}
                offset={-100}
                onClick={() => setIsOpen(false)}
              >
                Tools
              </Link>
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink>
              <Link
                to="projects"
                smooth={true}
                duration={30}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink>
              <Link
                to="contact"
                smooth={true}
                duration={30}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </StyledNavLink>
          </NavItem>
        </Nav>
      </StyledMobileNav>
      <StyledToggleDiv zIndex={101} display={isOpen ? "initial" : "none"}>
        <StyledButton onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </StyledButton>
      </StyledToggleDiv>
    </>
  );
};
