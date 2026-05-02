const cleanArray = (gamesListApi) => {
  let videogamesApi = [];
  gamesListApi.map((element) => {
    videogamesApi.push({
      id: element.id,
      name: element.name,
      description: element.description,
      image: element.background_image,
      released: element.released,
      rating: element.rating,
      platforms: element.platforms?.map((el) => el.platform.name),
      genres: element.genres?.map((el) => el.name),
      created: false,
    });
  });
  return videogamesApi;
};

const cleanArray2 = (gamesListApi) => {
  let videogamesApi = [];
  videogamesApi.push({
    id: gamesListApi.id,
    name: gamesListApi.name,
    image: gamesListApi.background_image,
    genres: gamesListApi.genres?.map((g) => g.name),
    description: gamesListApi.description_raw,
    released: gamesListApi.released,
    rating: gamesListApi.rating,
    platforms: gamesListApi.platforms?.map((el) => el.platform.name),
    created: false,
  });
  return videogamesApi;
};

const cleanArrayGenres = (gamesListBdd) => {
  let videogamesBdd = [];
  gamesListBdd.map((element) => {
    videogamesBdd.push({
      id: element.id,
      name: element.name,
      description: element.description,
      image: element.img,
      released: element.released,
      rating: element.rating,
      platforms: element.platforms,
      genres: element.genres?.map((el) => el.name),
      created: element.created,
    });
  });
  return videogamesBdd;
};

module.exports = {
  cleanArray,
  cleanArray2,
  cleanArrayGenres,
};
