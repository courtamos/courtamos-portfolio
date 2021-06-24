import React from "react";

interface Props {
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
}

export const ProjectImage: React.FC<Props> = ({
  projectImage,
  projectTitle,
  projectDescription,
}) => {
  return (
    <div>
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
