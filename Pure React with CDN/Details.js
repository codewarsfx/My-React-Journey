import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./carousel";
import ErrorBoundary from "./errorboundaries";
import Modal from "./modal";
import {navigate} from "@reach/router"

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isModal:false
    };
  }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
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
        media: animal.photos,
      });
    }, console.error)
  }

 handleModalClick = (e)=>{

  this.setState({isModal:!this.state.isModal})

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
        <p style={{width:"60%",color:"#ddd",textAlign:"center"}}>
            {description} 
            <button onClick={this.handleModalClick}>Click to Adopt{name}</button>

            { this.state.isModal?
              <Modal>would you like to adopt {name} please click here to do so or you will have bad dreams lol <a href={url}>here</a> </Modal>:null
            }
        </p>
      </div>
    );
  }
}

export default function thrownewError(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}






