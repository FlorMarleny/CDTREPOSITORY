import React from "react";
import { Helmet } from "react-helmet";
// import "./Home.css";
import { useDarkMode } from "../../DarkModeContext";
// import Portada from "./components/Portada/Portada";
import Portada1 from "./components/Portada1/Portada1";

import Programas from "./components/Programas/Programas";
import Experiencias from "./components/Experiencias/Experiencias";
import Agradecimiento from "./components/Agradecimiento/Agradecimiento";
import Testimonios from "./components/Testimonios/Testimonios";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Helmet>
        <title>Inicio</title>
      </Helmet>

      {/* Portada */}
      {/* <Portada /> */}
      <Portada1 />

      {/* Programas principales*/}
      <Programas />

      {/* Collage DE EXPERIENCIAS */}
      <Experiencias />

      {/* Banner de gracias */}
      <Agradecimiento />

      {/* Carrusel de testimonios */}
      <Testimonios />

      <Footer />
    </div>
  );
};

export default Home;
