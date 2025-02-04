import findFilmImage from "./findFilmImage.js";

// Render films
const renderFilms = (films) => {
  const filmsList = document.querySelector(".films-container");

  films.forEach((film) => {
    // console.log(film);

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
    director.classList.add("card__text");
    producer.classList.add("card__text");
    episode.classList.add("card__text");
    releaseDate.classList.add("card__text");

    image.src = findFilmImage(film);
    title.textContent = `${film.title}`;
    director.textContent = `Director: ${film.director}`;
    producer.textContent = `Producer: ${film.producer}`;
    episode.textContent = `Episode: ${film.episode_id}`;
    releaseDate.textContent = `Realise Date: ${film.release_date}`;
    episode.textContent = `Episode: ${film.episode_id}`;

    filmsList.append(card);
    card.append(image, textContainer);
    textContainer.append(title, director, producer, episode, releaseDate);
  });
};

export default renderFilms;
