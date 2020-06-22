import React from "react";
import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="result-section">
      {pets.length === 0 ? (
        <h1>No result found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name[0] + pet.name.slice(1).toLowerCase()}
            id={pet.id}
            age={pet.age}
            gender={pet.gender}
            // size={pet.size}
            media={pet.photos}
          />
        ))
      )}
    </div>
  );
};
export default Result;
