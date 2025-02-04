import getImageUrl from "./getImageUrl";

const renderPeople = (people) => {
  const peopleList = document.querySelector(".people-container");
  people.forEach((person) => {
    // title: name
    // birth_year:
    // gender
    // mass
    // height

    const card = document.createElement("li");
    const image = document.createElement("img");
    const textContainer = document.createElement("div");
    const name = document.createElement("h3");
    const birthYear = document.createElement("p");
    const gender = document.createElement("p");
    const mass = document.createElement("p");
    const height = document.createElement("p");

    card.classList.add("card");
    image.classList.add("card__image");
    textContainer.classList.add("card__text-container");
    name.classList.add("card__title");
    birthYear.classList.add("card__text");
    gender.classList.add("card__text");
    mass.classList.add("card__text");
    height.classList.add("card__text");

    image.src = getImageUrl("people", person);
    name.textContent = `${person.name}`;
    birthYear.textContent = `Birth year: ${person.birth_year}`;
    gender.textContent = `Gender: ${person.gender}`;
    mass.textContent = `Mass: ${person.mass}`;
    height.textContent = `Height: ${person.height}`;

    peopleList.append(card);
    card.append(image, textContainer);
    textContainer.append(name, birthYear, gender, mass, height);
  });
};

export default renderPeople;
