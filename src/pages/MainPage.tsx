import React, { useEffect, useState } from "react";
import { NextPage } from "next";

// components
import { Header } from "../../src/components/Header/Header";
import { LandingBlock } from "../../src/components/Blocks/LandingBlock/LandingBlock";
import { AboutBlock } from "../../src/components/Blocks/AboutBlock/AboutBlock";
import { ExperiencesBlock } from "../../src/components/Blocks/ExperiencesBlock/ExperiencesBlock";
import { WorksBlock } from "../../src/components/Blocks/WorksBlock/WorksBlock";
import { GetInTouch } from "../../src/components/Blocks/GetInTouch/GetInTouch";
import VerticalNav from "../components/VerticalNav";

interface MainPageProps {
  userAgent?: string;
}

export const MainPage: NextPage<MainPageProps> = ({ userAgent }) => {
  const [loading, setLoading] = useState<boolean>(true);

  let isMobile =
    userAgent &&
    Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

  useEffect(() => {
    const showSplash = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    showSplash();
  }, []);

  return (
    <div className="main">
      <Header />
      <LandingBlock loading={loading} isMobile={isMobile} />
      {!loading && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AboutBlock />
            <ExperiencesBlock />
            <WorksBlock />
            <GetInTouch />
          </div>
          {/* <VerticalNav /> */}
        </div>
      )}
    </div>
  );
};

MainPage.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers["user-agent"]; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }
  return { userAgent };
};
