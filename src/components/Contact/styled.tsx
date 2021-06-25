import styled from "styled-components";
import { Button, Form, Input } from "reactstrap";

export const StyledForm = styled(Form)`
  text-align: center;
  border: #1f1f1f solid 2px;
  border-radius: 5px;
  padding: 40px;
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
