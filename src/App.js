import React, { Fragment } from "react";
import Navigator from "./components/Navigator/Navigator";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navigator />
      <Routes />
    </Fragment>
  );
}

export default App;
