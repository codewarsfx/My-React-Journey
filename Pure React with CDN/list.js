import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import UseDropdown from "../useDropdown";
import Result from "./Result";

export default function Search() {
  const [location, updateState] = useState("Seattle WA");
  const [animal, AnimalDropdown] = UseDropdown("Animal", "Dog", ANIMALS);
  const [breeds, updateBreeds] = useState([]);
  const [breed, BreedDropdown, updateBreed] = UseDropdown("Breed", "", breeds);
  const [pets, updatePet] = useState([]);

  // function in charge of getting pets data from api

  async function getPets() {
    const { animals } = await pet.animals({
      breed,
      location,
      type: animal,
    });
    updatePet(animals);
  }

  //------------------------------------------------------

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
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          getPets();
        }}
      >
        {" "}
        <div className="dropDownElements">
          <label htmlFor="reactInput">
            Input
            <input
              placeholder="Location"
              type="text"
              value={location}
              id="reactInput"
              onChange={(e) => updateState(e.target.value)}
            />
          </label>
        </div>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Search</button>
      </form>
      <Result pets={pets} />
    </div>
  );
}
