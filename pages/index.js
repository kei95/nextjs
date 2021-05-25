import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import { App } from "../src/App";

export default function Index() {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
}
