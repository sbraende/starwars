import getImagePath from "./getImagePath.js";
import planetsImageList from "./planetsImageList.js";

const getPlanetDetails = async (planetURL) => {
  try {
    const response = await fetch(planetURL);
    const data = await response.json();
    return data.result.properties;
  } catch (error) {
    console.error("Failed to fetch person details:", error);
    const errorPlanets = document.querySelector(".planets__error");
    errorPlanets.classList.add("error--visable");
  }
};

const renderPlanets = async (planets) => {
  const planetsList = document.querySelector(".planets-container");

  for (const planet of planets) {
    const planetDetails = await getPlanetDetails(planet.url);

    const card = document.createElement("li");
    const image = document.createElement("img");
    const textContainer = document.createElement("div");
    const name = document.createElement("h3");
    const diameter = document.createElement("p");
    const terrain = document.createElement("p");
    const population = document.createElement("p");
    const gravity = document.createElement("p");

    card.classList.add("card");
    image.classList.add("card__image");
    textContainer.classList.add("card__text-container");
    name.classList.add("card__title");

    image.src = getImagePath(planetsImageList, planet.name);
    name.textContent = `${planet.name}`;
    diameter.textContent = `Diameter: ${planetDetails.diameter}`;
    terrain.textContent = `Terrain: ${planetDetails.terrain}`;
    population.textContent = `Population: ${planetDetails.population}`;
    gravity.textContent = `Gravity: ${planetDetails.gravity}`;

    planetsList.append(card);
    card.append(image, textContainer);
    textContainer.append(name, diameter, terrain, population, gravity);
  }
};

export default renderPlanets;
