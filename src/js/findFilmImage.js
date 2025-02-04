const findFilmImage = (film) => {
  const baseUrl = "./src/assets/images/films/";
  const filmTitleProcessed = film.title
    .toLowerCase()
    .trim()
    .replaceAll(" ", "_");
  const extension = ".webp";
  return baseUrl + filmTitleProcessed + extension;
};

export default findFilmImage;
