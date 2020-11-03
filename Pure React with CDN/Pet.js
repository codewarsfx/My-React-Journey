import React from "react";
import {Link} from "@reach/router"

const Pet = ({ name, media, id, gender, age }) => {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <div className="results">
      <div className="thumbnail">
        <h1>{name}</h1> <img src={hero} alt="placeholderimage" />
      </div>
      <h3>
        {age} - {gender}
      </h3>
      <Link to ={`/details/${id}`}>More Information on pet &#8594;</Link>
    </div>
  );
};

export default Pet;
