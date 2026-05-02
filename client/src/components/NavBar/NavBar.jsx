import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import { useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";
import style from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(getGames());
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        <Link to="/Home" className={style.logo} onClick={handleChange}>
          <span className={style.logoIcon}>VG</span>
          <span className={style.logoText}>Videogames</span>
        </Link>

        <div className={style.searchWrapper}>
          <SearchBar />
        </div>

        <Link to="/Form" className={style.createBtn}>
          + Create Game
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
