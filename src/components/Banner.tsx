import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

const StyledIntroText = styled.h1`
  color: pink;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  position: absolute;
  bottom: 75px;
`;

export const Banner = () => {
  return (
    <section>
      <div>
        <h1>Hey, I'm Courtney! 🍩</h1>
        <StyledIntroText>I'm a Junior Full-Stack Developer.</StyledIntroText>
      </div>
      <StyledFontAwesomeIcon icon={faLongArrowAltDown} size="3x" />
    </section>
  );
};
