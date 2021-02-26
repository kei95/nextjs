import React, { useState, useEffect } from "react";

// components
import { Header } from "../src/components/Header/Header";
import { LandingBlock } from "../src/components/Blocks/LandingBlock/LandingBlock";
import { AboutBlock } from "../src/components/Blocks/AboutBlock/AboutBlock";
import { WorksBlock } from "../src/components/Blocks/WorksBlock/WorksBlock";
import { GetInTouch } from "../src/components/Blocks/GetInTouch/GetInTouch";
import { Loading } from "../src/components/Loading/Loading";

export default function Index({ userAgent }) {
  const [loading, setLoading] = useState(true);
  let isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  useEffect(() => {
    const end = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    window.addEventListener("load", end);
    return () => {
      window.addEventListener("load", end);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="main">
            <LandingBlock isMobile={isMobile} />
            <AboutBlock />
            <WorksBlock />
            <GetInTouch />
          </div>
        </>
      )}
    </div>
  );
}

Index.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers["user-agent"]; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }
  return { userAgent };
};
