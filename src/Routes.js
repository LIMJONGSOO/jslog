import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Rendering } from "./components/Contents";

export default () => (
  <Router>
    <Switch>
      <Route path="/mongobook" exact component={Rendering} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
