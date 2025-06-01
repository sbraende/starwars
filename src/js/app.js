import fetchFilms from "./fetchFilms.js";
import fetchPeople from "./fetchPeople.js";
import fetchPlanets from "./fetchPlanets.js";
import fetchVehicles from "./fetchVehicles.js";

const filmsButton = document.querySelector(".nav-button-films");
const peopleButton = document.querySelector(".nav-button-people");
const planetsButton = document.querySelector(".nav-button-planets");
const vehiclesButton = document.querySelector(".nav-button-vehicles");
const navButtons = [filmsButton, peopleButton, planetsButton, vehiclesButton];

const filmsSection = document.querySelector(".films");
const peopleSection = document.querySelector(".people");
const planetsSection = document.querySelector(".planets");
const vehiclesSection = document.querySelector(".vehicles");
const sections = [filmsSection, peopleSection, planetsSection, vehiclesSection];

const displaySection = (selectedSection) => {
  sections.forEach((section) => {
    section.style.display = "none";
  });
  selectedSection.style.display = "block";
};

const setActive = (navButton) => {
  navButtons.forEach((n) => {
    n.classList.remove("nav-active");
  });
  navButton.classList.add("nav-active");
};

document.addEventListener("DOMContentLoaded", () => {
  displaySection(filmsSection);
  fetchFilms();
});

filmsButton.addEventListener("click", () => {
  setActive(filmsButton);
  displaySection(filmsSection);
  fetchFilms();
});

peopleButton.addEventListener("click", () => {
  setActive(peopleButton);
  displaySection(peopleSection);
  fetchPeople();
});

planetsButton.addEventListener("click", () => {
  setActive(planetsButton);
  displaySection(planetsSection);
  fetchPlanets();
});

vehiclesButton.addEventListener("click", () => {
  setActive(vehiclesButton);
  displaySection(vehiclesSection);
  fetchVehicles();
});
