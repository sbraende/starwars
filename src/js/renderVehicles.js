import vehiclesImageList from "./vehiclesImageList.js";
import getImagePath from "./getImagePath.js";

const getVehicleDetails = async (vehicleURL) => {
  try {
    const response = await fetch(vehicleURL);
    const data = await response.json();
    return data.result.properties;
  } catch (error) {
    console.error("Failed to fetch person details:", error);
    const errorVehicles = document.querySelector(".vehicles__error");
    errorVehicles.classList.add("error--visable");
  }
};

const rendervehicles = async (vehicles) => {
  const vechicleList = document.querySelector(".vehicles-container");

  for (const vehicle of vehicles) {
    const vehicleDetails = await getVehicleDetails(vehicle.url);

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

    image.src = getImagePath(vehiclesImageList, vehicle.name);
    name.textContent = `${vehicle.name}`;
    model.textContent = `Model: ${vehicleDetails.model}`;
    costInCredits.textContent = `Cost in Credits: ${vehicleDetails.cost_in_credits}`;
    crew.textContent = `Crew: ${vehicleDetails.crew}`;
    passengers.textContent = `Passengers: ${vehicleDetails.passengers}`;
    cargoCapacity.textContent = `Cargo capacity: ${vehicleDetails.cargo_capacity}`;

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
  }
};

export default rendervehicles;
