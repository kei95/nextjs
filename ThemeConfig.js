import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f4f1de",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#f4f1de",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.20s linear;
  }
`;
