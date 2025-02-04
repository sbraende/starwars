import getImageUrl from "./getImageUrl";

const renderPlanets = (planets) => {
  const planetsList = document.querySelector(".planets-container");
  planets.forEach((planet) => {
    console.log(planet.name);
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

    image.src = getImageUrl("planets", planet);
    name.textContent = `${planet.name}`;
    diameter.textContent = `Diameter: ${planet.diameter}`;
    terrain.textContent = `Terrain: ${planet.terrain}`;
    population.textContent = `Population: ${planet.population}`;
    gravity.textContent = `Gravity: ${planet.gravity}`;

    planetsList.append(card);
    card.append(image, textContainer);
    textContainer.append(name, diameter, terrain, population, gravity);
  });
};

export default renderPlanets;
