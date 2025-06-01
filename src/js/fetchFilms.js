import renderFilms from "./renderFilms";

const fetchFilms = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/films");
    const data = await response.json();
    renderFilms(data.result);
  } catch (error) {
    const errorFilm = document.querySelector(".films__error");
    errorFilm.classList.add("error--visable");
    console.error(error);
  }
};

export default fetchFilms;
