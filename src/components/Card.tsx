import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div<Props>`
  background-color: white;
  padding: 7% 8%;
  height: ${(props) => (props.height ? props.height : "auto")};
`;

interface Props {
  height?: string;
}

export const Card: React.FC<Props> = ({ children, height }) => {
  return <StyledDiv height={height}>{children}</StyledDiv>;
};
