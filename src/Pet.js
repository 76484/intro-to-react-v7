import { Link } from "react-router-dom";

const Pet = ({ animal, breed, id, images, location, name }) => {
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";

  if (images) {
    hero = images[0];
  }

  return (
    <Link className="pet" to={`/details/${id}`}>
      <div className="image-container">
        <img alt={name} src={hero} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} &mdash; {breed} &mdash; {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
