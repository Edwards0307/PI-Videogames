import { useDispatch } from "react-redux";
import { useState } from "react";
import { getGamesName, resedPaged } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getGamesName(name));
    setName("");
    dispatch(resedPaged(1));
  }

  return (
    <div className={style.searchContainer}>
      <div className={style.searchIcon}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search games..."
        onChange={handleInputChange}
        value={name}
        className={style.input}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
      />
      <button type="submit" onClick={handleSubmit} className={style.button}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
