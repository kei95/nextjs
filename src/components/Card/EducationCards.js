import React from "react";

import { CardTitle } from "./components/CardTitle";
import { Card } from "./Card";

export function EducationCards() {
  return (
    <Card>
      <FirstEducation />
    </Card>
  );
}

function FirstEducation() {
  return (
    <React.Fragment>
      <CardTitle
        title={"Cornerstone International Community College of Canada"}
        titleRef={"https://ciccc.ca"}
        period={"Jan 2019 - Dec 2019"}
        jobTitle={"Web and Mobile App Development Co-op Diploma"}
        place={"Vancouver, Canada"}
      />
      <div className="descriptionContainer">
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Learned fundamentals of coding and how an IT industry works in big
            picture. Took Mobile development course specifically and worked on
            some projects with colleges. Also prepared for a job by going over
            fundamental algorithms and coding principles.
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
