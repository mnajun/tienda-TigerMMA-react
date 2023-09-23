import React from "react";
import { Link } from "react-router-dom";
import lobo from "../../lobo.png";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="home__title">Tiger MMA</h1>

        <Link to="/shop" className="home__cta">
          CONSIGUE LO MEJOR PARA GUERREROS
        </Link>

        <img src={lobo} alt="remera de lobo" className="home__image" />
      </div>
    </>
  );
};

export default Home;
