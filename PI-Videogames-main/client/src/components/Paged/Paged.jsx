import React from "react";
import style from "./Paged.module.css";

const Paged = ({ gamesPerPage, allGames, paged }) => {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(allGames / gamesPerPage); i++) {
    pageNumber.push(i + 1);
  }
  pageNumber.pop();

  return (
    <nav className={style.pagination}>
      {pageNumber.map((number) => (
        <button
          key={number}
          className={style.pageBtn}
          onClick={() => paged(number)}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Paged;
