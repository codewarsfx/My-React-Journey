import React from "react";
export function list({ name, occupation }) {
  return React.createElement(
    "li",
    {},
    `my name is ${name} and im a ${occupation}`
  );
}
