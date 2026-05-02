import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.orb1}></div>
      <div className={style.orb2}></div>
      <div className={style.orb3}></div>

      <div className={style.content}>
        <div className={style.badge}>
          <span className={style.dot}></span>
          Powered by RAWG API
        </div>

        <h1 className={style.title}>
          <span className={style.titleGradient}>VIDEO</span>
          <br />
          GAMES
        </h1>

        <p className={style.subtitle}>
          Explore a universe of games. Search thousands of titles,
          discover new favorites, and create your own game library.
        </p>

        <div className={style.actions}>
          <Link to="/Home" className={style.ctaPrimary}>
            Start Exploring
          </Link>
        </div>

        <div className={style.stats}>
          <div className={style.stat}>
            <span className={style.statNumber}>500K+</span>
            <span className={style.statLabel}>Games</span>
          </div>
          <div className={style.statDivider}></div>
          <div className={style.stat}>
            <span className={style.statNumber}>19</span>
            <span className={style.statLabel}>Genres</span>
          </div>
          <div className={style.statDivider}></div>
          <div className={style.stat}>
            <span className={style.statNumber}>50+</span>
            <span className={style.statLabel}>Platforms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
