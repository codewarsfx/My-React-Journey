//create a list component which changes with props values
import React from "react";
import ReactDom from "react-dom";
import List from "./list";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  // return React.createElement("ul", {}, [
  //   React.createElement(list, { name: "chidera", DOB: 1999 }),
  //   React.createElement(list, { name: "joan", DOB: 2000 }),
  //   React.createElement(list, { name: "Sarah", DOB: 1909 }),
  // ]);
  return (
    <React.StrictMode>
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Router>
          <List path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDom.render(<App />, document.getElementById("target"));
