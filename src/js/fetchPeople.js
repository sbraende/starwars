import renderPeople from "./renderPeople.js";

const fetchPeople = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    renderPeople(data.results);
  } catch (error) {
    console.error(error);
  }
};

export default fetchPeople;
