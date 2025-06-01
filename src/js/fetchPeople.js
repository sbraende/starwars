import renderPeople from "./renderPeople.js";

const fetchPeople = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/people");
    const data = await response.json();
    renderPeople(data.results);
  } catch (error) {
    const errorPeople = document.querySelector(".people__error");
    errorPeople.classList.add("error--visable");
    console.error(error);
  }
};

export default fetchPeople;
