import React from "react";
import collage1 from "../../../../img/anuncio2.jpg";
import collage2 from "../../../../img/graduadostemb.jpg";
import collage3 from "../../../../img/reunionSech.jpg";
import collage4 from "../../../../img/madres-sech.jpg";
import "./Experiencias.css";

const Experiencias = () => {
  return (
    <div className="contenedor mt-4">
      <h2 className="mb-4">
        Una experiencia, <span> un recuerdo</span>
      </h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={collage1}
            alt=""
            className="efecto-hover img-fluid h-100 w-100"
          />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <img
                src={collage2}
                alt=""
                className="efecto-hover img-fluid w-100 mb-3"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src={collage3}
                alt=""
                className="efecto-hover img-fluid w-100"
              />
            </div>
            <div className="col-md-6">
              <img
                src={collage4}
                alt=""
                className="efecto-hover img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencias;
