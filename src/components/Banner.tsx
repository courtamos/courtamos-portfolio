import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

const StyledIntroText = styled.h1`
  color: #ff7096;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  position: absolute;
  bottom: 75px;
`;

const StyledBannerDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Banner = () => {
  return (
    <section id="banner">
      <StyledBannerDiv data-aos="fade-up" data-aos-duration="800">
        <h1>Hey, I'm Courtney! 🍩</h1>
        <StyledIntroText>&& I'm a Full-Stack Developer.</StyledIntroText>
      </StyledBannerDiv>
      <StyledFontAwesomeIcon icon={faLongArrowAltDown} size="3x" />
    </section>
  );
};
