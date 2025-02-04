import fetchFilms from "./fetchFilms.js";
import fetchPeople from "./fetchPeople.js";
import fetchPlanets from "./fetchPlanets.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchFilms();
  fetchPeople();
  fetchPlanets();
});
