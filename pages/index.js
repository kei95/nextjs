import React from "react";

// components
import { Header } from "../src/components/Header/Header_new.tsx";
import { LandingBlock } from "../src/components/Blocks/LandingBlock/LandingBlock.tsx";
import { AboutBlock } from "../src/components/Blocks/AboutBlock/AboutBlock.tsx";
import { WorksBlock } from "../src/components/Blocks/WorksBlock/WorksBlock.tsx";
import { GetInTouch } from "../src/components/Blocks/GetInTouch/GetInTouch";

export default function Index() {
  return (
    <div>
      <Header />
      {/* <Parallax image={require("../static/img/profile-bg.jpg")} /> */}
      <div className="main">
        <LandingBlock />
        <AboutBlock />
        <WorksBlock />
        <GetInTouch />
        {/* <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className="profile">
                <picture>
                  <source
                    srcSet={require("../static/img/kei.jpg?webp")}
                    type="image/webp"
                    className="profileImage"
                  />
                  <img
                    src={require("../static/img/kei.jpg")}
                    alt="It's me!"
                    className="profileImage"
                    width={192}
                    height={192}
                  />
                </picture>
                <div className="name">
                  <h1 className="title">Keisuke Yamashita</h1>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className="description">
            <p className="descriptionSelfText">
              Software developer based in Vancouver. Always happy to contribute
              somewhere make the world better place with asset of skills I
              developed with my passion.
            </p>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={9} className="navWrapper">
              <NavPills
                alignCenter
                color="info"
                tabs={[
                  {
                    tabButton: "Experience",
                    tabIcon: BusinessIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <ExperienceCards />
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Projects",
                    tabIcon: ImportantDevicesIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <ProjectCards />
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Education",
                    tabIcon: SchoolIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <EducationCards />
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer> */}
      </div>
      <div className="footerBox" />
    </div>
  );
}
