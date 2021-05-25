import React from "react";
import { Redirect, Route, Switch } from "react-router";

// pages
import { MainPage } from "./pages/MainPage";

export const App: React.VFC = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
