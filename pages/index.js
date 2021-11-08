import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import { App } from "../src/App";

export default function Index() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
