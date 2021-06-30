import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledIcon = styled(FontAwesomeIcon)`
  width: 40px !important;
  height: 40px !important;
  left: auto !important;
  top: 0% !important;
  margin: 0px !important;

  @media (max-width: 1169px) {
    width: 30px !important;
    height: 30px !important;
  }
`;
