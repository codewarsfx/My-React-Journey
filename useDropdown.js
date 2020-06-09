import React, { useState } from "react";

const useDropdown = (label, options, defaultParam) => {
  const [state, setState] = useState(defaultParam);
  const id = `use-dropDown-${label.replace(" ", "")}`;
  const dropDown = () => (
    <label htmlFor={id}>
      <select
        value={state}
        id={id}
        onChange={(e) => {
          setState(e.target.value);
        }}
        onBlur={(e) => {
          setState(e.target.value);
        }}
        disabled={!options.length}
      >
        <option>ALL</option>
        {options.map((item) => {
          <option key={state} value={item}>
            {item}
          </option>;
        })}
      </select>
    </label>
  );
};
