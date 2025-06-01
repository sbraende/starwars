import renderVehicles from "./renderVehicles.js";

const fetchVehicles = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/vehicles");
    const data = await response.json();
    renderVehicles(data.results);
  } catch (error) {
    const errorVehicles = document.querySelector(".vehicles__error");
    errorVehicles.classList.add("error--visable");
    console.error(error);
  }
};

export default fetchVehicles;
