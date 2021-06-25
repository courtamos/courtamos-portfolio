import React from "react";
import { useForm } from "@formspree/react";
import { Col, FormGroup } from "reactstrap";
import { StyledForm, StyledInput, StyledButton } from "./styled";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xbjqklgw");

  if (state.succeeded) {
    return (
      <div>
        Thank you for your message! I'll get back to you as soon as possible
      </div>
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup row>
        <Col sm={10}>
          <StyledInput type="text" name="name" placeholder="Name" />
        </Col>
        <Col sm={10}>
          <StyledInput type="email" name="email" placeholder="Email" />
        </Col>
        <Col sm={10}>
          <StyledInput
            type="textarea"
            name="message"
            id="message"
            rows="6"
            placeholder="Message"
          />
        </Col>
        <Col sm={10}>
          <StyledButton type="submit" disabled={state.submitting}>
            SEND
          </StyledButton>
        </Col>
      </FormGroup>
    </StyledForm>
  );
};
