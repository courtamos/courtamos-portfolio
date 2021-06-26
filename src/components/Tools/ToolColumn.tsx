import React from "react";
import { StyledToolsDiv } from "./styled";

interface Props {
  columnTitle: string;
  columnItems: string[];
}

export const ToolColumn: React.FC<Props> = ({ columnTitle, columnItems }) => {
  return (
    <StyledToolsDiv>
      <h3>{columnTitle}</h3>
      {columnItems.map((item) => (
        <p>{item}</p>
      ))}
    </StyledToolsDiv>
  );
};
