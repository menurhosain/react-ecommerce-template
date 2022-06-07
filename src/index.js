import React from "react";
import ReactDOM from "react-dom";
import GridContainer from "./containers/grid.container";
import Home from "./pages/home.page";

const App = () => (
  <GridContainer>
    <Home />
  </GridContainer>
);

const appRoot = document.getElementById("approot");

console.log("application is running");
ReactDOM.render(<App />, appRoot);
