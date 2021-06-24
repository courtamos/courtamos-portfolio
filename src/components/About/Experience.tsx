import React from "react";

interface Props {
  companyName: string;
  jobTitle: string;
  yearFrom: number;
  yearTo: number;
  details: string;
}

export const Experience: React.FC<Props> = ({
  companyName,
  jobTitle,
  yearFrom,
  yearTo,
  details,
}) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <h2>{companyName}</h2>
      <h3>{jobTitle}</h3>
      <h4>
        {yearFrom} - {yearTo}
      </h4>
      <p>{details}</p>
    </div>
  );
};
