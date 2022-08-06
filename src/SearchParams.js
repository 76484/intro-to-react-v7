import { useContext, useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("Seattle, WA");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="location"
            value={location}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            value={animal}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            value={breed}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          <select
            id="theme"
            onBlur={(e) => {
              setTheme(e.target.value);
            }}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            value={theme}
          >
            {["#f06d06", "darkblue", "chartreuse", "mediumorchid", "peru"].map(
              (color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              )
            )}
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
