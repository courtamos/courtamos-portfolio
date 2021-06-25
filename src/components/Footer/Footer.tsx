import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  StyledFooter,
  StyledFontAwesomeIcon,
  StyledParagraph,
  StyledCopyText,
} from "./styled";

export const Footer = () => {
  return (
    <StyledFooter id="contact" className="text-center">
      <StyledParagraph>
        Made with <StyledFontAwesomeIcon icon={faHeart} /> in Victoria, BC
      </StyledParagraph>
      <StyledCopyText>&copy; 2021 Courtney Amos</StyledCopyText>
    </StyledFooter>
  );
};
