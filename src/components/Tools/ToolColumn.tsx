import React from "react";

interface Props {
  columnTitle: string;
  columnItems: string[];
}

export const ToolColumn: React.FC<Props> = ({ columnTitle, columnItems }) => {
  return (
    <div>
      <h3>{columnTitle}</h3>
      {columnItems.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};
