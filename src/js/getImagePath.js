const getImagePath = (imageList, queryItem) => {
  try {
    return imageList.find(
      (listItem) =>
        listItem.title.trim().toLowerCase() === queryItem.trim().toLowerCase()
    ).path;
  } catch (error) {
    console.error(`Could not find image: ${error}`);
  }
};

export default getImagePath;
