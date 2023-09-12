import React from "react";
import programasTransversales from "../../../../img/programas-transversales.png";
import programaPerfil from "../../../../img/programas-por-perfil.png";
import programaEducar from "../../../../img/programa-educar-f.png";
import programasOficio from "../../../../img/programas-de-oficio.png";
import proyectoDojo from "../../../../img/proyecto-dojo.png";
import "./programa.css" ;

const Programas = () => {
  return (
    <div className="color-fondo mb-5">
      <div className="mt-5 contenedor">
        <h2 className="mb-4">
          Nuestros <span>programas</span>
        </h2>
        <div className="d-programas ">
          <div className="row w-100 m-0">
            <div className="col-md-6 col-lg-4">
              <a href="/programas?filtro=transversales">
                <div className="header-container h-50">
                  <img
                    src={programasTransversales}
                    alt=""
                    className="header-image"
                  />
                  <div className="header-text">Programas transversales</div>
                </div>
              </a>
            </div>

            <div className="col-md-6 col-lg-4">
              <a href="/programas?filtro=perfil">
                <div className="header-container h-50">
                  <img src={programaPerfil} alt="" className="header-image" />
                  <div className="header-text">Programas por perfil</div>
                </div>
              </a>
            </div>

            <div className="col-md-6 col-lg-4">
              <a href="/programas?filtro=educar">
                <div className="header-container h-50">
                  <img src={programaEducar} alt="" className="header-image" />
                  <div className="header-text">Programa educar</div>
                </div>
              </a>
            </div>

            <div className="col-md-6 col-lg-6">
              <a href="/programas?filtro=oficio">
                <div className="header-container h-50">
                  <img src={programasOficio} alt="" className="header-image" />
                  <div className="header-text">Programas de oficio</div>
                </div>
              </a>
            </div>

            <div className="col-md-6 col-lg-6">
              <a href="/programas?filtro=dojo">
                <div className="header-container h-50">
                  <img
                    src={proyectoDojo}
                    alt=""
                    className="header-image img-fluid"
                  />
                  <div className="header-text">Proyecto Dojo</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programas;
