const {
  createGame,
  getGameById,
  allByNameGames,
  allGames,
} = require("../Controllers/videoGamesController");

const getGamesHandlers = async (req, res) => {
  const { name } = req.query;
  try {
    const findGames = name ? await allByNameGames(name) : await allGames();
    res.status(200).json(findGames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getGamesHandlersById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const game = await getGameById(id, source);
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createGamesHandlres = async (req, res) => {
  const { name, description, genres, released, rating, platforms, img } =
    req.body;
  try {
    const newGame = await createGame(
      name,
      description,
      genres,
      released,
      rating,
      platforms,
      img
    );

    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGamesHandlersById,
  getGamesHandlers,
  createGamesHandlres,
};
