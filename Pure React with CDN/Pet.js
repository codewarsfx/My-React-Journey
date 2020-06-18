import React from "react";

const Pet = ({ name, media }) => {
  let src = "https://source.unsplash.com/random/300×300";
  if (media.length > 0) {
    src = media[0].small;
  }

  return (
    <div className="results">
      <p>
        {name} <img src={src} alt="placeholderimage" />
      </p>
    </div>
  );
};

export default Pet;
