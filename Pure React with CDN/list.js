import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import UseDropdown from "../useDropdown";

export default function Search() {
  const [location, updateState] = useState("seattle LA");
  const [, AnimalDropdown] = UseDropdown("ANIMAL", "dog", ANIMALS);
  const [breeds] = useState([]);
  const [, BreedDropdown] = UseDropdown("BREED", "", breeds);
  return (
    <div>
      <h1>{location}</h1>
      <form action="#">
        <label htmlFor="reactInput">
          Input
          <input
            type="text"
            value={location}
            id="reactInput"
            onChange={(e) => updateState(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Search</button>
      </form>
    </div>
  );
}
