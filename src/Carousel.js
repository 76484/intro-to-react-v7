import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({ active: Number(event.target.dataset.index) });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img alt="animal" src={images[active]} />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              alt="animal-thumbnail"
              className={index === active ? "active" : ""}
              data-index={index}
              key={photo}
              onClick={this.handleIndexClick}
              src={photo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
