import React from "react";
import { FadeInSection } from "src/components/FadeInSection";
import { SlashSpace } from "../../SlashSpace";
import { ExperienceDetail } from "./components/ExperienceDetail";
import styles from "./ExperiencesBlock.module.css";

export const ExperiencesBlock: React.FC = ({}) => {
  return (
    <section className={styles.body} id="experiences">
      <FadeInSection>
        <div className={styles.container}>
          <h2 className={styles.mainLine}>Experiences</h2>
          <ExperienceDetail
            title="Generac Power Systems"
            period="Apr 2021 - Now"
            description={`As a software developer, 
      primary developing an app that allows a user to monitor his/her energy consumption and bill estimation.`}
            tools={[
              "Typescript",
              "React Native",
              "React-native-testing-library",
              "Jest",
              "Java",
              "Maven",
              "Spring boot",
              "AWS",
            ]}
            list={[
              "Implement the app's features with rich animations",
              "Design software architecture for new features from server side to client side",
              "Add new APIs to the server and maintain existing ones",
              "Led the team to add tests to the project and reduced the rate of bug report",
            ]}
          />
          <ExperienceDetail
            title="Sherwa Online Services"
            period="Oct 2019 - Apr 2021"
            description="Developed an app that is focused on helping gamers to match up and
      interact with each other outside of the games’ native platform"
            tools={["Typescript", "React Native", "Node.js"]}
            list={[
              "Worked closely with the designer team to implement the app’s UI/UX from scratch",
              "Helped the back-end team by adding APIs modifying DB",
              "Implemented third-party logins by integrating their API",
              "Created some unit-tests to ensure the product’s stability",
            ]}
          />
          <ExperienceDetail
            title="Vimple"
            period="Jan 2019 – Aug 2019"
            description="Developed an app called Base that is a chat application that is specifically for students."
            tools={["Typescript", "React Native", "React"]}
            list={[
              "Developed an app for students in Vancouver on both web and mobile using React/React-native.",
              "Learned how development works in the real environment and real product.",
            ]}
            isLastItem
          />
          <SlashSpace />
        </div>
      </FadeInSection>
    </section>
  );
};
