import React from "react";
import "./image.scss";

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
    <div className="project-wrapper">
      <figure className="project-image">
        <img src={projectImage} alt="project" />
        <figcaption>
          <div>
            <h2>{projectTitle}</h2>
          </div>
          <div>
            <p>{projectDescription}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
