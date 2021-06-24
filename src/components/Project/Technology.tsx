import React from "react";

interface Props {
  techUsed: string;
}

export const Technology: React.FC<Props> = ({ techUsed }) => {
  return (
    <div className="tech-item">
      <p>{techUsed}</p>
    </div>
  );
};
