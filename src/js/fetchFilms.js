import renderFilms from "./renderFilms";

const fetchFilms = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    renderFilms(data.results);
  } catch (error) {
    console.error(error);
  }
};

export default fetchFilms;
