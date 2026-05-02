import { useState } from "react";
import axios from "axios";
import style from "./form.module.css";
import { Link } from "react-router-dom";

const platf = [
  "PC", "PlayStation 5", "PlayStation 4", "Xbox One", "Xbox Series S/X",
  "Nintendo Switch", "iOS", "Android", "Nintendo 3DS", "Nintendo DS",
  "Nintendo DSi", "macOS", "Linux", "Xbox 360", "Xbox", "PlayStation 3",
  "PlayStation 2", "PlayStation", "PS Vita", "PSP", "Wii U", "Wii",
  "GameCube", "Nintendo 64", "Game Boy Advance", "Game Boy Color",
  "Game Boy", "SNES", "NES", "Classic Macintosh", "Apple II",
  "Commodore / Amiga", "Atari 7800", "Atari 5200", "Atari 2600",
  "Atari Flashback", "Atari 8-bit", "Atari ST", "Atari Lynx", "Atari XEGS",
  "Genesis", "SEGA Saturn", "SEGA CD", "SEGA 32X", "SEGA Master System",
  "Dreamcast", "3DO", "Jaguar", "Game Gear", "Neo Geo", "Web",
];

const gen = [
  "Action", "Indie", "Adventure", "RPG", "Strategy", "Shooter", "Casual",
  "Simulation", "Puzzle", "Arcade", "Platformer", "Racing",
  "Massively Multiplayer", "Sports", "Fighting", "Family", "Board Games",
  "Educational", "Card",
];

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    genres: [],
    released: "",
    rating: "",
    platforms: [],
    img: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const validate = (form) => {
    let errors = {};
    if (form.name.length < 2) errors.name = "Must have at least 2 characters";
    if (form.description.length < 15) errors.description = "Must have at least 15 characters";
    if (isNaN(form.rating) || form.rating === "") errors.rating = "Must be a number";
    else if (form.rating < 1 || form.rating > 5) errors.rating = "Must be between 1 and 5";
    if (form.genres.length < 1) errors.genres = "Select at least one genre";
    if (form.platforms.length < 1) errors.platforms = "Select at least one platform";
    return errors;
  };

  const error = validate(form);
  const isValid = Object.keys(error).length === 0;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isValid) return;
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    axios.post(`${API_URL}/videogames`, form);
    setSubmitted(true);
  };

  function handleSelectP(event) {
    if (event.target.value !== "platforms" && !form.platforms.includes(event.target.value))
      setForm({ ...form, platforms: [...form.platforms, event.target.value] });
  }

  function handleDeleteP(p) {
    setForm({ ...form, platforms: form.platforms.filter((el) => el !== p) });
  }

  function handleSelectG(event) {
    if (event.target.value !== "genres" && !form.genres.includes(event.target.value))
      setForm({ ...form, genres: [...form.genres, event.target.value] });
  }

  function handleDeleteG(g) {
    setForm({ ...form, genres: form.genres.filter((el) => el !== g) });
  }

  if (submitted) {
    return (
      <div className={style.page}>
        <div className={style.successContainer}>
          <div className={style.successIcon}>✓</div>
          <h2 className={style.successTitle}>Game Created!</h2>
          <p className={style.successText}>Your game has been added to the database.</p>
          <Link to="/Home" className={style.successBtn}>Go to Games</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.header}>
          <Link to="/Home" className={style.backBtn}>← Back</Link>
          <div>
            <h1 className={style.title}>Create a Game</h1>
            <p className={style.subtitle}>Add a new game to the database</p>
          </div>
        </div>

        <form onSubmit={submitHandler} className={style.form}>
          <div className={style.formGrid}>
            <div className={style.field}>
              <label className={style.label}>Game Name</label>
              <input
                type="text"
                value={form.name}
                onChange={changeHandler}
                name="name"
                className={`${style.input} ${touched.name && error.name ? style.inputError : ""}`}
                placeholder="Enter game name..."
              />
              {touched.name && error.name && (
                <span className={style.errorText}>{error.name}</span>
              )}
            </div>

            <div className={style.field}>
              <label className={style.label}>Rating (1–5)</label>
              <input
                type="text"
                value={form.rating}
                onChange={changeHandler}
                name="rating"
                className={`${style.input} ${touched.rating && error.rating ? style.inputError : ""}`}
                placeholder="e.g. 4.5"
              />
              {touched.rating && error.rating && (
                <span className={style.errorText}>{error.rating}</span>
              )}
            </div>

            <div className={`${style.field} ${style.fullWidth}`}>
              <label className={style.label}>Description</label>
              <textarea
                value={form.description}
                onChange={changeHandler}
                name="description"
                className={`${style.textarea} ${touched.description && error.description ? style.inputError : ""}`}
                placeholder="Describe the game..."
                rows={4}
              />
              {touched.description && error.description && (
                <span className={style.errorText}>{error.description}</span>
              )}
            </div>

            <div className={style.field}>
              <label className={style.label}>Release Date</label>
              <input
                type="text"
                value={form.released}
                onChange={changeHandler}
                name="released"
                className={style.input}
                placeholder="e.g. 2024-01-15"
              />
            </div>

            <div className={style.field}>
              <label className={style.label}>Image URL</label>
              <input
                type="text"
                value={form.img}
                onChange={changeHandler}
                name="img"
                className={style.input}
                placeholder="https://..."
              />
            </div>

            <div className={`${style.field} ${style.fullWidth}`}>
              <label className={style.label}>Genres</label>
              <select name="genres" onChange={handleSelectG} className={style.select}>
                <option value="genres">Select a genre...</option>
                {gen.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
              {form.genres.length > 0 && (
                <div className={style.tagList}>
                  {form.genres.map((el, i) => (
                    <span key={i} className={style.tag}>
                      {el}
                      <button type="button" onClick={() => handleDeleteG(el)} className={style.tagRemove}>×</button>
                    </span>
                  ))}
                </div>
              )}
              {error.genres && <span className={style.errorText}>{error.genres}</span>}
            </div>

            <div className={`${style.field} ${style.fullWidth}`}>
              <label className={style.label}>Platforms</label>
              <select name="platforms" onChange={handleSelectP} className={style.select}>
                <option value="platforms">Select a platform...</option>
                {platf.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
              {form.platforms.length > 0 && (
                <div className={style.tagList}>
                  {form.platforms.map((el, i) => (
                    <span key={i} className={style.tag}>
                      {el}
                      <button type="button" onClick={() => handleDeleteP(el)} className={style.tagRemove}>×</button>
                    </span>
                  ))}
                </div>
              )}
              {error.platforms && <span className={style.errorText}>{error.platforms}</span>}
            </div>
          </div>

          <button type="submit" className={style.submitBtn} disabled={!isValid}>
            Create Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
