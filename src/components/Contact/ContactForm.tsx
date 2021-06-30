import React from "react";
import { useForm } from "@formspree/react";
import { FormGroup, Alert } from "reactstrap";
import { StyledForm, StyledColumn, StyledInput, StyledButton } from "./styled";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xbjqklgw");

  if (state.succeeded) {
    return (
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup row>
          <Alert color="success">
            Your message was sent - I'll get back to you as soon as possible!
          </Alert>
          <StyledColumn sm={10}>
            <StyledInput type="text" name="name" placeholder="Name" />
          </StyledColumn>
          <StyledColumn sm={10}>
            <StyledInput type="email" name="email" placeholder="Email" />
          </StyledColumn>
          <StyledColumn sm={10}>
            <StyledInput
              type="textarea"
              name="message"
              id="message"
              rows="10"
              placeholder="Message"
            />
          </StyledColumn>
          <StyledColumn sm={10}>
            <StyledButton type="submit" disabled={state.submitting}>
              SEND
            </StyledButton>
          </StyledColumn>
        </FormGroup>
      </StyledForm>
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup row>
        <StyledColumn sm={10}>
          <StyledInput type="text" name="name" placeholder="Name" />
        </StyledColumn>
        <StyledColumn sm={10}>
          <StyledInput type="email" name="email" placeholder="Email" />
        </StyledColumn>
        <StyledColumn sm={10}>
          <StyledInput
            type="textarea"
            name="message"
            id="message"
            rows="10"
            placeholder="Message"
          />
        </StyledColumn>
        <StyledColumn sm={10}>
          <StyledButton type="submit" disabled={state.submitting}>
            SEND
          </StyledButton>
        </StyledColumn>
      </FormGroup>
    </StyledForm>
  );
};
