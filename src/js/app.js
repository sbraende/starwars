// Selectors
const peopleEl = document.querySelector(".people-container");
const planetsEl = document.querySelector(".planets-container");
const vehiclesEl = document.querySelector(".vehicles-container");

// Page init
document.addEventListener("DOMContentLoaded", () => renderPage());

// CORE LOGIC
// Get films
const getFilms = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    renderFilms(data.results);
  } catch (error) {
    log.error(error);
  }
};

// Render films
const renderFilms = (films) => {
  const filmsEl = document.querySelector(".films-container");
  films.forEach((film) => {
    console.log(film);

    // Create p for each relevant attribute
    const titleEl = document.createElement("h3");
    const titleNameEl = document.createElement("p");
    const directorEl = document.createElement("p");
    const episodeEl = document.createElement("p");
    const releaseDateEl = document.createElement("p");
    const urlEl = document.createElement("p");

    // Append
    filmsEl.append(
      titleEl,
      titleNameEl,
      directorEl,
      episodeEl,
      releaseDateEl,
      urlEl
    );

    // Add content
    titleEl.textContent = `${film.title}`;
    titleNameEl.textContent = `Title: ${film.title}`;
    directorEl.textContent = `Director: ${film.director}`;
    episodeEl.textContent = `Episode: ${film.episode_id}`;
    releaseDateEl.textContent = `Realise Date: ${film.release_date}`;
    episodeEl.textContent = `Episode: ${film.episode_id}`;
    urlEl.textContent = `Url: ${film.url}`;
  });
};

// Render
const renderPage = () => {
  getFilms();
};
