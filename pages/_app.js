import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../styles/styles.css";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig";
import useDarkMode from "use-dark-mode";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  React.useEffect(() => {
    setIsMounted(true);
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Kei's portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="../static/icon/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <GlobalStyles />
      {isMounted && <Component {...pageProps} theme={theme} />}
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
