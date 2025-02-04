import fetchFilms from "./fetchFilms.js";
import fetchPeople from "./fetchPeople.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchFilms();
  fetchPeople();
});
