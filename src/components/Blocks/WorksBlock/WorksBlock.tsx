import React from "react";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import styles from "./WorksBlock.module.css";
import { Content } from "./components/Content/Content";

interface WorksBlockProps {}

export const WorksBlock: React.FC<WorksBlockProps> = ({}) => {
  return (
    <FadeInSection>
      <div className={styles.container}>
        <h2 className={styles.mainLine}>Works</h2>
        <Content
          title="Sherwa"
          description="An app helps gamers interact with others and use their skill to contribute to other players by coaching or playing together. The platform offers any gamer to be a mentor or match with somebody who can enjoy the game instead of using the game's random matching system so that they can avoid toxic ones."
          stacks="React Native, TypeScript, Redux, Node.js, PostgreSQL"
          appLink={"https://sherwaonline.com"}
          src={"/static/img/sherwa.png"}
        />
        <Content
          title="Guess Game"
          description="A simple offline game app for iOS and Android. It's a guessing game that users guess a randomly selected number. It requires only one device to play with multiple players so it's a good fit for a party-like occasion. Made with React Native. Currently reviewed by Apple."
          stacks="React Native"
          androidLink={
            "https://play.google.com/store/apps/details?id=com.kei95.guessgame"
          }
          iOSLink={
            "https://apps.apple.com/ca/app/number-guess-game/id1563047627"
          }
          src={"/static/img/guessGame.jpg"}
          githubLink={"https://github.com/kei95/Guess-game"}
          isLeft={true}
        />
        <Content
          title="Ggrks Bot"
          description="A bot for a chat app called Line(Yes popular in JP). A user can google or share search results in a group chat without closing the app. It's convenient when you want to share something via google. Made with Node.js"
          stacks="Node.js"
          appLink={
            "https://timeline.line.me/user/_dQvW0IfEfrPs4i8K4nVibQ-6M_eLkejJr86KP6Q?utm_medium=osx&utm_source=desktop&utm_campaign=OA_Profile"
          }
          src={"/static/img/ggrksBot.jpg"}
          githubLink={"https://github.com/kei95/ggrks-bot"}
        />
        <Content
          title="Dev connector"
          description="A brief social web application made to practice full-stack development. Users can create an account, post thoughts, add a comment and like on it. Used Node.js, Mongo DB for server-side and React, Redux and SCSS for front-end. Deployed by Heroku."
          stacks="React, TypeScript, Redux, Node.js, Mongo DB"
          appLink={"https://still-shelf-78122.herokuapp.com"}
          githubLink={"https://github.com/kei95/DevShowcase"}
          src={"/static/img/devConnector.png"}
          isLeft={true}
        />
        <Content
          title="Base"
          description="Scalable software that is offered to around 1,000 users using React (JavaScript/TypeScript), React Native (TypeScript), HTML5 and CSS/Bootstrap."
          stacks="React Native, React, TypeScript, Bootstrap"
          appLink={"https://web.base.town"}
          src={"/static/img/base.png"}
        />
      </div>
    </FadeInSection>
  );
};
