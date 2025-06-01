import renderPlanets from "./renderPlanets.js";

const fetchPlanets = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/planets");
    const data = await response.json();
    renderPlanets(data.results);
  } catch (error) {
    const errorPlanets = document.querySelector(".planets__error");
    errorPlanets.classList.add("error--visable");
    console.error(error);
  }
};

export default fetchPlanets;
