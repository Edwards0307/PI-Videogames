import { CardsContainer, Filter, Order, NavBar } from "../../components/index";
import { useState } from "react";
import style from "./home.module.css";

const Home = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div className={style.page}>
      <NavBar />
      <div className={style.controls}>
        <Order update={update} setUpdate={setUpdate} />
        <Filter />
      </div>
      <div className={style.content}>
        <CardsContainer />
      </div>
    </div>
  );
};

export default Home;
