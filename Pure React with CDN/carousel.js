import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
  }

  static getDerivedStateFromProps({ media }) {
     let photos = ["http://placecorgi.com/600/600"];
    console.log(media)
    if (media.length>0) {
      photos = media.map(({ large }) => large);
      console.log(photos)
    }
    console.log(photos)
    return { photos };
  }
  //eslint-disable-next-line
  handleClick = (event) => {
    this.setState({
      active: parseInt(event.target.dataset.index),
    });
  };
  
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, i) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={(e) => this.handleClick(e)}
              data-index={i}
              src={photo}
              className={i === active ? "active" : ""}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
