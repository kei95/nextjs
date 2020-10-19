import React from "react";

import { CardTitle } from "./components/CardTitle";
import { Card } from "./Card";

export function ProjectCards() {
  return (
    <Card>
      <Sherwa />
      <NoteTaker />
      <DevConnector />
      <Base />
    </Card>
  );
}

function Sherwa() {
  return (
    <React.Fragment>
      <CardTitle
        title={"Sherwa(App)"}
        titleRef={"https://sherwaonline.com/"}
        period={"Oct 2019 - present"}
      />
      <div className="descriptionContainer">
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            An app helps gamers interact with others and use their skill to
            contribute to other players by coaching or playing together. The
            platform offers any gamer to be a mentor or match with somebody who
            can enjoy the game instead of using the game's random matching
            system so that they can avoid toxic ones.
          </span>
        </div>
        <a
          href={"https://sherwaonline.com/"}
          target="_blank"
          className="appLinkText"
          rel="noreferrer"
        >
          Check the app
        </a>
      </div>
    </React.Fragment>
  );
}

function DevConnector() {
  return (
    <React.Fragment>
      <CardTitle
        title={"Dev Connector"}
        period={"Jun 2020"}
        titleRef={"https://still-shelf-78122.herokuapp.com/"}
      />
      <div className="descriptionContainer">
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            A brief social web application made to practice full-stack
            development. Users can create an account, post thoughts, add a
            comment and like on it. Used Node.js, Mongo DB for server-side and
            React, Redux and SCSS for front-end. Deployed by Heroku.
          </span>
        </div>
        <a
          href={"https://still-shelf-78122.herokuapp.com/"}
          target="_blank"
          className="appLinkText"
          rel="noreferrer"
        >
          Check the app
        </a>
      </div>
    </React.Fragment>
  );
}

function Base() {
  return (
    <React.Fragment>
      <CardTitle
        title={"Base"}
        period={"Jan 2019 – Sep 2019"}
        titleRef={"https://web.base.town/"}
      />
      <div className="descriptionContainer">
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Scalable software that is offered to around 1,000 users using React
            (JavaScript/TypeScript), React Native (TypeScript), HTML5 and
            CSS/Bootstrap.
          </span>
        </div>
        <a
          href={"https://web.base.town/"}
          target="_blank"
          className="appLinkText"
          rel="noreferrer"
        >
          Check the app
        </a>
      </div>
    </React.Fragment>
  );
}

function NoteTaker() {
  return (
    <React.Fragment>
      <CardTitle
        title={"Note taker"}
        period={"Jul 2020"}
        titleRef={"https://master.d3osctzxsg982c.amplifyapp.com/"}
      />
      <div className="descriptionContainer">
        <div className="descriptionTextWrapper">
          <span className="slash">・</span>
          <span className="descriptionText">
            Practice for Amplify by Amazon. Has capabilities of authentication,
            adding, modifying and deleting items.
          </span>
        </div>
        <a
          href={"https://master.d3osctzxsg982c.amplifyapp.com/"}
          target="_blank"
          className="appLinkText"
          rel="noreferrer"
        >
          Check the app
        </a>
      </div>
    </React.Fragment>
  );
}
