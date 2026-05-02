import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGames, resedPaged } from "../../redux/actions";
import { Card, Paged } from "../index";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const currentPage = useSelector((state) => state.currentPage);
  const [gamesPerPage] = useState(15);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paged = (page) => {
    dispatch(resedPaged(page));
  };

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  if (!currentGames.length) {
    return (
      <div className={style.loading}>
        <div className={style.spinner}></div>
        <span className={style.loadingText}>Loading games...</span>
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      <div className={style.cardGrid}>
        {currentGames.map((game) => (
          <Card
            key={game?.id}
            id={game?.id}
            name={game?.name}
            released={game?.released}
            rating={game?.rating}
            image={game?.image}
          />
        ))}
      </div>
      <Paged gamesPerPage={gamesPerPage} allGames={games.length} paged={paged} />
    </div>
  );
};

export default CardsContainer;
