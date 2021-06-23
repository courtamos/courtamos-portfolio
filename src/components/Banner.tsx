import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

const StyledIntroGreeting = styled.h1`
  font-weight: 500;
  font-size: 80px;
`;

const StyledIntroText = styled.h1`
  font-size: 80px;
  color: pink;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  position: absolute;
  bottom: 75px;
`;

export const Banner = () => {
  return (
    <section style={{ minHeight: "100vh" }}>
      <div
        style={{ padding: "100px 0", display: "flex", flexDirection: "column" }}
      >
        <StyledIntroGreeting>Hey, I'm Courtney! 🍩</StyledIntroGreeting>
        <StyledIntroText>I'm a Junior Full-Stack Developer.</StyledIntroText>
      </div>
      <StyledFontAwesomeIcon icon={faLongArrowAltDown} size="3x" />
    </section>
  );
};
