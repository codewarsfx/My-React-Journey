import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./carousel";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    pet.animal(this.props.id.slice(1)).then(({ animal }) => {
      console.log(animal);
      this.setState({
        loading: false,
        age: animal.age,
        description: animal.description,
        gender: animal.gender,
        name: animal.name,
        status: animal.status,
        url: animal.url,
        photo: animal.photos[0].large,
        media: animal.photos[0],
      });
    }, console.error);
  }
  render() {
    let media = this.state.media ? this.state.media : "";
    const { name, age, description, gender, status, url, photo } = this.state;
    if (this.state.loading) return <div className="loader"></div>;
    return (
      <div className="details">
        <Carousel media={media} />
        <img src={photo} alt="breed" className="details-image" />
        <h1>Hi meet {name}</h1>
        <h2>
          {age}-{gender}-{status}
        </h2>
        <h3>About {name}</h3>
        <p>
          {description} <a href={url}>find out more</a>
        </p>
      </div>
    );
  }
}

export default Details;
