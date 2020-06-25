import React from "react";

const Pet = ({ name, media, id, gender, age }) => {
  let src = "https://source.unsplash.com/weekly?water/800x600";
  if (media.length > 0) {
    src = media[0].small;
  }
  return (
    <div className="results">
      <div className="thumbnail">
        <h1>{name}</h1> <img src={src} alt="placeholderimage" />
      </div>
      <h3>
        {age} - {gender}
      </h3>
      <a href={`/details/:${id}`}>More Information on pet &#8594;</a>
    </div>
  );
};

export default Pet;
