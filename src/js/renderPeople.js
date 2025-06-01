import peopleImageList from "./peopleImageList.js";
import getImagePath from "./getImagePath.js";

const getPersonDetails = async (personURL) => {
  try {
    const response = await fetch(personURL);
    const data = await response.json();
    return data.result.properties;
  } catch (error) {
    console.error("Failed to fetch person details:", error);
    const errorPeople = document.querySelector(".people__error");
    errorPeople.classList.add("error--visable");
  }
};

const renderPeople = async (people) => {
  const peopleList = document.querySelector(".people-container");

  for (const person of people) {
    const personDetails = await getPersonDetails(person.url);
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

    image.src = getImagePath(peopleImageList, person.name);
    name.textContent = `${person.name}`;
    birthYear.textContent = `Birth year: ${personDetails.birth_year}`;
    gender.textContent = `Gender: ${personDetails.gender}`;
    mass.textContent = `Mass: ${personDetails.mass}`;
    height.textContent = `Height: ${personDetails.height}`;

    peopleList.append(card);
    card.append(image, textContainer);
    textContainer.append(name, birthYear, gender, mass, height);
  }
};

export default renderPeople;
