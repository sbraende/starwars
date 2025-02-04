import renderPlanets from "./renderPlanets.js";

const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    renderPlanets(data.results);
  } catch (error) {
    console.error(error);
  }
};

export default fetchPlanets;
