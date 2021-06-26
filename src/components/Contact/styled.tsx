import styled from "styled-components";
import { Button, Col, Form, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledParagraph = styled.p`
  padding: 5px;
  color: #1f1f1f;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  padding: 5px;
  color: #1f1f1f;
`;

export const StyledForm = styled(Form)`
  text-align: center;
  border: #1f1f1f solid 2px;
  border-radius: 5px;
  padding: 40px;

  @media (max-width: 992px) {
    margin: 50px 0px;
  }
`;

export const StyledColumn = styled(Col)`
  width: 100%;
`;

export const StyledInput = styled(Input)`
  padding: 5px 10px;
  margin-bottom: 20px;
  width: 100%;
  resize: none;
`;

export const StyledButton = styled(Button)`
  color: white;
  background: #1f1f1f;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
`;
