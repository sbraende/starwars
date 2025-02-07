import vechiclesImageList from "./vechiclesImageList.js";
import getImagePath from "./getImagePath.js";

const renderVechicles = (vechicles) => {
  const vechicleList = document.querySelector(".vechicles-container");
  vechicles.forEach((vechicle) => {
    console.log(vechicle.name);
    const card = document.createElement("li");
    const image = document.createElement("img");
    const textContainer = document.createElement("div");
    const name = document.createElement("h3");
    const model = document.createElement("p");
    const costInCredits = document.createElement("p");
    const crew = document.createElement("p");
    const passengers = document.createElement("p");
    const cargoCapacity = document.createElement("p");

    card.classList.add("card");
    image.classList.add("card__image");
    textContainer.classList.add("card__text-container");
    name.classList.add("card__title");

    image.src = getImagePath(vechiclesImageList, vechicle.name);
    name.textContent = `${vechicle.name}`;
    model.textContent = `Model: ${vechicle.model}`;
    costInCredits.textContent = `Cost in Credits: ${vechicle.cost_in_credits}`;
    crew.textContent = `Crew: ${vechicle.crew}`;
    passengers.textContent = `Passengers: ${vechicle.passengers}`;
    cargoCapacity.textContent = `Cargo capacity: ${vechicle.cargo_capacity}`;

    vechicleList.append(card);
    card.append(image, textContainer);
    textContainer.append(
      name,
      model,
      costInCredits,
      crew,
      passengers,
      cargoCapacity
    );
  });
};

export default renderVechicles;
