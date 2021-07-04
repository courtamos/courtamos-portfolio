import React from "react";
import "./image.scss";
import { StyledDescription } from "./styled";

interface Props {
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
}

export const Image: React.FC<Props> = ({
  projectImage,
  projectTitle,
  projectDescription,
}) => {
  return (
    <>
      <div className="image">
        <img src={projectImage} alt="project" className="image__img" />
        <div className="image__overlay image__overlay--blur">
          <div className="image__title">
            <h2>{projectTitle}</h2>
          </div>
          <div className="image__description">
            <p>{projectDescription}</p>
          </div>
        </div>
      </div>
      <StyledDescription>
        <h2>{projectTitle}</h2>
        <p>{projectDescription}</p>
      </StyledDescription>
    </>
  );
};
