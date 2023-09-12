import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anuncio1 from "../../../../img/anuncio1.jpg";
import anuncio2 from "../../../../img/anuncio2.jpg";
import anuncio3 from "../../../../img/anuncio3.jpg";
import anuncio4 from "../../../../img/anuncio4.jpg";
import anuncio5 from "../../../../img/anuncio5.jpeg";
import anuncio6 from "../../../../img/anuncio6.jpg";
import anuncio7 from "../../../../img/anuncio7.jpg";
import anuncio8 from "../../../../img/anuncio8.jpg";
import anuncio9 from "../../../../img/anuncio9.jpg";
import "./Portada.css"
const Portada = () => {
  return (
    <div className="contenedor mb-5 row">
      <div className="col-md-6 h-100 ">
        <h1 className="display-1 fw-bold title">
          Siempre apostando por una <span className="resaltar">educación</span>{" "}
          con <span className="resaltar">calidad</span>
        </h1>
        <p>
          Aprender nunca ha sido tan emocionante. ¡Elige tu curso gratuito y
          actualiza tus habilidades!
        </p>

        {/* Enlace "APRENDE MÁS" */}
        
        <div className="mb-3">
          <a className="mt-3 btn bg-rojo" href="/programas">
          <span>¡Inscríbete ahora!</span>
        </a>
        </div>
        

      </div>

      <div className="col-md-6  mt-3">
        <Carousel
          infiniteLoop
          autoPlay
          interval={2000}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <div>
            <img className="portada" src={anuncio1} alt="" />
          </div>
          <div>
            <img className="portada" src={anuncio2} alt="" />
          </div>
          <div>
            <img className="portada" src={anuncio3} alt="" />
          </div>
          <div>
            <img className="portada" src={anuncio4} alt="" />
          </div>
          <div>
            <img className="portada" src={anuncio5} alt="" />
          </div>
          <div>
            <img className="portada" src={anuncio6} alt="" />
          </div>
          <div>
            <img className="portada" src={anuncio7} alt="" />
          </div>
          <div>
            <img className="portada" src={anuncio8} alt="" />
          </div>
          <div>
            <img className="portada" src={anuncio9} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Portada;
