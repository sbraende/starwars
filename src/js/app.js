import fetchFilms from "./fetchFilms.js";
import fetchPeople from "./fetchPeople.js";
import fetchPlanets from "./fetchPlanets.js";
import fetchVechicles from "./fetchVechicles.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchFilms();
  fetchPeople();
  fetchPlanets();
  fetchVechicles();
});
