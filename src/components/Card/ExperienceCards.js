import React from "react";

import { CardTitle } from "./components/CardTitle";
import { Card } from "./Card";

export function ExperienceCards() {
  return (
    <Card>
      <FirstExperience />
      <SecondExperience />
    </Card>
  );
}

function FirstExperience() {
  return (
    <React.Fragment>
      <CardTitle
        title={"Sherwa"}
        titleRef={"https://sherwaonline.com/"}
        period={"Oct 2019 - present"}
        jobTitle={"Software developer"}
        place={"Vancouver, Canada"}
      />
      <div className="descriptionContainer">
        <div className="descriptionTextWrapper">
          <span className="jobDescriptionText">
            Joined the talented team that works on developing company's product
            application which helps gamers environment even more enjoyable. It
            is downloaded more than 100k worldwide.
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="descriptionText">&nbsp;Responsibilities:</span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Revamp company's product app, update the app from prototype to
            production scale
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Implement UI for mobile application from scratch with designers
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Install, integrate and update software packages
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Communicate effectively with designers and clarify technical
            difficulties and implement their mockup
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Find the best solution with experienced developers to implement
            features for both front end and back end
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Possess up-to-date knowledge of technological developments in the
            industry and suggest to the team
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

function SecondExperience() {
  return (
    <React.Fragment>
      <CardTitle
        title={"Vinple"}
        period={"Jan 2019 - Sep 2019"}
        titleRef={"https://vinple.com/"}
        jobTitle={"Front End Developer Intern"}
        place={"Vancouver, Canada"}
      />
      <div className="descriptionContainer">
        <div className="descriptionTextWrapper">
          <span className="jobDescriptionText">
            Developed Base Student Network App in a close team for both mobile
            and web. The scalable application that is offered to around 1,000
            users.
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="descriptionText">&nbsp;Responsibilities:</span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Help finding bugs and fix them
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Look for the best way to implement the new feature and integrate it
            to the app
          </span>
        </div>
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Refactor components of the app as senior developers indicate
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
