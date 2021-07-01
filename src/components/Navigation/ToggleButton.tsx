import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StyledButton, StyledToggleDiv } from "./styled";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleButton: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <StyledToggleDiv zIndex={100} display="initial">
      <StyledButton onClick={() => setIsOpen((prev) => !prev)}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </StyledButton>
    </StyledToggleDiv>
  );
};
