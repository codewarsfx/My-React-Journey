import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import UseDropdown from "../useDropdown";

export default function Search() {
  const [location, updateState] = useState("seattle LA");
  const [animal, AnimalDropdown] = UseDropdown("ANIMAL", "dog", ANIMALS);
  const [breeds, updateBreeds] = useState([]);
  const [breed, BreedDropdown, updateBreed] = UseDropdown("BREED", "", breeds);

  //effect controls implicit updating of the breeds drop down menu when any given animal is clicked
  useEffect(() => {
    updateBreed("");
    updateBreeds([]);

    pet.breeds(animal).then(({ breeds }) => {
      let breedsArray = breeds.map(({ name }) => name);
      updateBreeds(breedsArray);
    });
  }, [animal, updateBreeds, updateBreed]);
  //---------------------------------------------------------------------------------------

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
