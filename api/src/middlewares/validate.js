const { Videogame } = require("../db");

const validate = async (req, res, next) => {
  const { name, description, platforms, genres } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!description)
    return res.status(400).json({ error: "Missing description" });
  if (!platforms) return res.status(400).json({ error: "Missing plataforms" });
  if (!genres) return res.status(400).json({ error: "Missing genres" });

  const platf = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "Xbox One",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "PS Vita",
    "PSP",
    "Wii U",
    "Wii",
    "GameCube",
    "Nintendo 64",
    "Game Boy Advance",
    "Game Boy Color",
    "Game Boy",
    "SNES",
    "NES",
    "Classic Macintosh",
    "Apple II",
    "Commodore / Amiga",
    "Atari 7800",
    "Atari 5200",
    "Atari 2600",
    "Atari Flashback",
    "Atari 8-bit",
    "Atari ST",
    "Atari Lynx",
    "Atari XEGS",
    "Genesis",
    "SEGA Saturn",
    "SEGA CD",
    "SEGA 32X",
    "SEGA Master System",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",
    "Web",
  ];
  let cleanArray = platforms.filter((element) => platf.includes(element));
  if (cleanArray.length !== platforms.length)
    return res.status(400).json({ error: "Platform not allowed" });

  let findBdd = await Videogame.findAll({
    where: {
      name: name,
    },
  });
  let findByName = findBdd.map((element) => element.name);
  if (findByName.includes(name)) {
    return res
      .status(400)
      .json({ error: "There is already a game with that name" });
  }

  next();
};

module.exports = { validate };
