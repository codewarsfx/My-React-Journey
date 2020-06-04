//create a list component which changes with props values
import React from "react";
import ReactDOM from "react-dom";
import { list } from "./list";

const app = () => {
  return React.createElement("ul", {}, [
    React.createElement(list, { name: "chidera ", occupation: "doctor" }),
    React.createElement(list, { name: "bola", occupation: "farmer" }),
    React.createElement(list, { name: "linda", occupation: "nurse" }),
    React.createElement(list, { name: "shola", occupation: "lawyer" }),
  ]);
};
ReactDOM.render(React.createElement(app), document.getElementById("target"));
