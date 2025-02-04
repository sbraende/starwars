const processString = (nameOrTitle) =>
  nameOrTitle.toLowerCase().trim().replaceAll(" ", "_");

const getImageUrl = (catergory, object) => {
  const baseUrl = `./src/assets/images/${catergory}/`;
  let nameProcessed = null;
  if (object.name) {
    nameProcessed = processString(object.name);
  } else if (object.title) {
    nameProcessed = processString(object.title);
  } else {
    console.error("Could not find name or title in object");
    return;
  }
  const extension = ".webp";

  return baseUrl + nameProcessed + extension;
};

export default getImageUrl;
