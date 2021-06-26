import React from "react";
import { StyledDiv, StyledParagraph } from "./styled";

interface Props {
  techUsed: string;
}

export const Technology: React.FC<Props> = ({ techUsed }) => {
  return (
    <StyledDiv>
      <StyledParagraph>{techUsed}</StyledParagraph>
    </StyledDiv>
  );
};
