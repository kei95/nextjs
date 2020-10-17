import { container, title, card } from "../../material-kit-react.js";

import imagesStyle from "../../material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      width: "12rem",
      height: "12rem",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#5e5e5e",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
  cardContainer: {
    "@media (min-width: 992px)": {
      ...card,
      width: "90%",
      paddingBottom: "2rem",
    },
    width: "90%",
    paddingBottom: "2rem",
  },
  borderLine: {
    borderBottomColor: "#c7c7c7",
    borderBottomStyle: "solid",
    borderTopWidth: "0.2px",
    marginTop: "0.5rem",
  },
  cardWrapper: {
    marginBottom: "5rem",
  },
  cardTitle: {
    transition: "color 0.1s ease",
    color: "#5e5e5e",
    fontWeight: "700",
    textAlign: "left !important",
    fontSize: "1.2rem",
    border: "none !important",
    textDecoration: "none",
    "&:hover": {
      color: "#f2e6e6",
    },
  },
  periodText: {
    color: "#999",
    fontSize: "1rem",
    textAlign: "left !important",
  },
  cardYear: {
    color: "#5e5e5e",
    fontWeight: "700",
    textAlign: "right !important",
    fontSize: "1.2rem",
  },
  cardText: {
    margin: "1.071rem auto 0",
    color: "#999",
    textAlign: "center !important",
  },
  dot: {
    marginRight: "1rem",
  },
  footerBox: {
    margin: "50px auto 50px auto",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "0 1rem",
    width: "100%",
    margin: "1rem 0 0 0",
  },
  smallTitleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "0 0 0 2.3rem",
  },
  dotTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: "3rem",
  },
  descriptionTextWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  slash: {
    color: "#595959",
    fontSize: "1.5rem",
    textAlign: "left !important",
  },
  descriptionText: {
    margin: "0.3rem 0",
    maxWidth: "600px",
    color: "#595959",
    fontSize: "1rem",
    textAlign: "left !important",
  },
  jobDescriptionText: {
    margin: "0.3rem 0",
    maxWidth: "600px",
    color: "#999",
    fontSize: "1rem",
    textAlign: "left !important",
    marginLeft: "0.3rem",
  },
  appLinkText: {
    color: "#00acc1",
    fontSize: "1rem",
    transition: "color 0.1s ease",
    textAlign: "left !important",
    border: "none !important",
    textDecoration: "none",
    paddingLeft: "1.5rem",
    "&:hover": {
      color: "#f2e6e6",
    },
  },
  image: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "50% !important",
    objectFit: "cover",
  },
};

export default profilePageStyle;
