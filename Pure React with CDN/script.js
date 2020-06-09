//create a list component which changes with props values
import React from "react";
import ReactDom from "react-dom";
import List from "./list";

const App = () => {
  // return React.createElement("ul", {}, [
  //   React.createElement(list, { name: "chidera", DOB: 1999 }),
  //   React.createElement(list, { name: "joan", DOB: 2000 }),
  //   React.createElement(list, { name: "Sarah", DOB: 1909 }),
  // ]);
  return (
    <div>
      <List />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("target"));
