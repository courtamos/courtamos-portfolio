import styled from "styled-components";

export const StyledDiv = styled.div`
  display: inline-block;
  background-color: #1f1f1f;
  color: white;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 5px 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 0px;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: #1f1f1f;

  &:hover {
    color: lightpink;
  }
`;

export const StyledIconDiv = styled.div`
  margin-right: 20px;
`;

export const StyledTechnologyDiv = styled.div`
  margin-bottom: 20px;
`;

export const StyledLinksDiv = styled.div`
  display: flex;
  margin-bottom: 50px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
