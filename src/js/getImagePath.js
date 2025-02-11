const getImagePath = (imageList, queryItem) => {
  try {
    return imageList
      .find(
        (listItem) =>
          listItem.title.trim().toLowerCase() === queryItem.trim().toLowerCase()
      )
      .path.trim()
      .toLowerCase();
  } catch (error) {
    throw new Error(`Could not find image that matches title/name. ${error}`);
  }
};

export default getImagePath;
