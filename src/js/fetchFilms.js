import renderFilms from "./renderFilms";

const fetchFilms = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    renderFilms(data.results);
  } catch (error) {
    const errorFilm = document.querySelector(".films__error");
    errorFilm.classList.add("error--visable");
    console.error(error);
  }
};

export default fetchFilms;
