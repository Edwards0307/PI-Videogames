import { getGamesDetail, cleanState } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const gamesDetail = useSelector((state) => state.gamesDetail);

  useEffect(() => {
    dispatch(cleanState());
    dispatch(getGamesDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gamesDetail.length === 0) {
    return (
      <div className={style.loading}>
        <div className={style.spinner}></div>
        <p>Loading game details...</p>
      </div>
    );
  }

  return (
    <div className={style.page}>
      <div className={style.container}>
        <Link to="/Home" className={style.backBtn}>
          ← Back to Games
        </Link>

        {gamesDetail.map((game) => (
          <div key={game.id} className={style.gameDetail}>
            <div className={style.imageSection}>
              <img className={style.img} src={game?.image} alt={game?.name} />
            </div>

            <div className={style.infoSection}>
              <h1 className={style.title}>{game?.name}</h1>

              <div className={style.badges}>
                {(game?.genres || []).map((genre, i) => (
                  <span key={i} className={style.genreBadge}>{genre}</span>
                ))}
              </div>

              <div className={style.stats}>
                <div className={style.statItem}>
                  <span className={style.statLabel}>Rating</span>
                  <span className={style.statValue}>
                    <span className={style.star}>★</span> {game?.rating || "N/A"}
                  </span>
                </div>
                <div className={style.statItem}>
                  <span className={style.statLabel}>Released</span>
                  <span className={style.statValue}>{game?.released || "TBA"}</span>
                </div>
              </div>

              <div className={style.section}>
                <h3 className={style.sectionTitle}>Platforms</h3>
                <div className={style.platforms}>
                  {(game?.platforms || []).map((p, i) => (
                    <span key={i} className={style.platformBadge}>{p}</span>
                  ))}
                </div>
              </div>

              <div className={style.section}>
                <h3 className={style.sectionTitle}>Description</h3>
                <p className={style.description}>{game?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
