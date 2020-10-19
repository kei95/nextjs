import React from "react";

export function CardTitle({ title, titleRef, period, jobTitle }) {
  return (
    <div className="titleContainer">
      <div className="dotTitleWrapper">
        <div className="dot">
          <svg height="1.2rem" width="1.2rem" preserveAspectRatio="xMidYMin">
            <circle cx="0.6rem" cy="0.6rem" r="0.6rem" fill="#47ACC2" />
          </svg>
        </div>
        <a
          href={titleRef ?? "http://localhost:3000/profile"}
          target="_blank"
          className="cardTitle"
          rel="noreferrer"
        >
          {jobTitle ? `${title} - ${jobTitle}` : title}
        </a>
      </div>
      <div className="smallTitleContainer">
        <span className="periodText">{period}</span>
      </div>
    </div>
  );
}
