import filmImageList from "./filmImageList.js";
import getImagePath from "./getImagePath.js";

const renderFilms = (films) => {
  const filmsList = document.querySelector(".films-container");

  films.forEach((film) => {
    const card = document.createElement("li");
    const image = document.createElement("img");
    const textContainer = document.createElement("div");
    const title = document.createElement("h3");
    const director = document.createElement("p");
    const producer = document.createElement("p");
    const episode = document.createElement("p");
    const releaseDate = document.createElement("p");

    card.classList.add("card");
    image.classList.add("card__image");
    textContainer.classList.add("card__text-container");
    title.classList.add("card__title");

    image.src = getImagePath(filmImageList, film.properties.title);
    title.textContent = `${film.properties.title}`;
    director.textContent = `Director: ${film.properties.director}`;
    producer.textContent = `Producer: ${film.properties.producer}`;
    episode.textContent = `Episode: ${film.properties.episode_id}`;
    releaseDate.textContent = `Realise Date: ${film.properties.release_date}`;
    episode.textContent = `Episode: ${film.properties.episode_id}`;

    filmsList.append(card);
    card.append(image, textContainer);
    textContainer.append(title, director, producer, episode, releaseDate);
  });
};

export default renderFilms;
