import React, { useState } from "react";

const UseDropdown = (label, defaultParam, options) => {
  const [state, setState] = useState(defaultParam);
  const id = `use-dropDown-${label.replace(" ", "").toLowerCase()}`;
  const dropDown = () => (
    <div className="dropDownElements">
      <label htmlFor={id}>
        {label}
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
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
  return [state, dropDown, setState];
};

export default UseDropdown;
