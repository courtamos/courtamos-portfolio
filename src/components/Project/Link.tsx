import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./link.scss";

interface Props {
  deployedLink: string;
  githubLink: string;
}

export const Link: React.FC<Props> = ({ deployedLink, githubLink }) => {
  return (
    <>
      <div className="deployed-link">
        <a href={deployedLink} target="_blank" rel="noreferrer">
          <p>
            Visit the site <FontAwesomeIcon icon={faLink} size="1x" />
          </p>
        </a>
      </div>
      <div className="github-link">
        <a href={githubLink} target="_blank" rel="noreferrer">
          <p>
            See the code <FontAwesomeIcon icon={faGithub} size="1x" />
          </p>
        </a>
      </div>
    </>
  );
};
