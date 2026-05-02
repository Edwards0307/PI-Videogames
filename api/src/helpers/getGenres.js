require("dotenv").config();
const { YOUR_API_KEY } = process.env;
const { Genre } = require("../db");
const axios = require("axios");

const findGenresBdd = async () => {
  const genre = await Genre.findAll();
  if (genre.length < 1) {
    let url = `https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`;
    let infoGenresApi = (await axios.get(url)).data.results;
    const result = await Genre.bulkCreate(infoGenresApi);
  }
};

/* Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí  */

module.exports = { findGenresBdd };
