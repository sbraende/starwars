import renderVechicles from "./renderVechicles.js";

const fetchVechicles = async () => {
  const response = await fetch("https://swapi.dev/api/vehicles");
  const data = await response.json();
  renderVechicles(data.results);
};

export default fetchVechicles;
