import { filterGamesByGenres, filterGamesByCreate, resedPaged } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterGenres = (event) => {
    dispatch(filterGamesByGenres(event.target.value));
    dispatch(resedPaged(1));
  };

  const handleFilterGames = (event) => {
    dispatch(filterGamesByCreate(event.target.value));
  };

  return (
    <div className={style.filters}>
      <select className={style.select} onChange={(event) => handleFilterGenres(event)}>
        <option value="All Genres">All Genres</option>
        <option value="Action">Action</option>
        <option value="Indie">Indie</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="Strategy">Strategy</option>
        <option value="Shooter">Shooter</option>
        <option value="Casual">Casual</option>
        <option value="Simulation">Simulation</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Arcade">Arcade</option>
        <option value="Platformer">Platformer</option>
        <option value="Racing">Racing</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
        <option value="Sports">Sports</option>
        <option value="Fighting">Fighting</option>
        <option value="Family">Family</option>
        <option value="Board Games">Board Games</option>
        <option value="Educational">Educational</option>
        <option value="Card">Card</option>
      </select>

      <select className={style.select} onChange={(event) => handleFilterGames(event)}>
        <option value="All Games">All Games</option>
        <option value="Api">API Games</option>
        <option value="Bdd">My Games</option>
      </select>
    </div>
  );
};

export default Filter;
