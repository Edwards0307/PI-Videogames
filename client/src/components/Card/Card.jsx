import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, released, rating, image }) {
  return (
    <div className={style.card}>
      <Link to={`/Detail/${id}`} className={style.imageLink}>
        <div className={style.imageWrapper}>
          <img className={style.img} src={image} alt={name} />
          <div className={style.imageOverlay}></div>
        </div>
      </Link>

      <div className={style.cardBody}>
        <h3 className={style.name}>{name}</h3>
        <div className={style.meta}>
          <span className={style.released}>{released || "TBA"}</span>
          <span className={style.rating}>
            <span className={style.star}>★</span> {rating || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
