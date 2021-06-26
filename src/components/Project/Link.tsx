import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { StyledA, StyledIconDiv } from "./styled";

interface Props {
  deployedLink?: string;
  githubLink: string;
}

export const Link: React.FC<Props> = ({ deployedLink, githubLink }) => {
  return (
    <>
      {deployedLink && (
        <StyledIconDiv className="deployed-link">
          <StyledA href={deployedLink} target="_blank" rel="noreferrer">
            <p>
              Visit the site <FontAwesomeIcon icon={faLink} size="1x" />
            </p>
          </StyledA>
        </StyledIconDiv>
      )}
      <StyledIconDiv className="github-link">
        <StyledA href={githubLink} target="_blank" rel="noreferrer">
          <p>
            See the code <FontAwesomeIcon icon={faGithub} size="1x" />
          </p>
        </StyledA>
      </StyledIconDiv>
    </>
  );
};
