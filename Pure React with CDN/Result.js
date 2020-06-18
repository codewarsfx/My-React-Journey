import React from "react";
import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="result-section">
      {pets.length === 0 ? (
        <h1>pets not found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            // size={pet.size}
            media={pet.photos}
          />
        ))
      )}
    </div>
  );
};
export default Result;
