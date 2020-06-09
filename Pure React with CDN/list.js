import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

export default function Search() {
  const [location, updateState] = useState("seattle LA");
  const [animals, updateAnimal] = useState("dog");
  const [breed, updateBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);
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
        <button>Search</button>
        <label htmlFor="selectOption">
          <select
            name="select"
            id="selectOption"
            value={animals}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option value="">All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breeds">
          <select
            name="breed"
            id="breeds"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option>ALL</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
}
