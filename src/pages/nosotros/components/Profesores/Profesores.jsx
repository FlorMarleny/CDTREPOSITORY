import React from "react"
import imagenInfo from "../../../../img/profesores.webp"

const Profesores = () => {
  return (
    <div className="contenedor">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={imagenInfo}
            alt=""
            className="img-fluid"
            style={{ width: "100%", height: "auto" }}
          />{" "}
        </div>

        <div className="col-md-6">
          <h2>Los mejores profesores</h2>
          <p>
            Estos servicios son brindados por profesionales especializados de
            TECSUP.
          </p>
          <a className="mt-4 btn bg-rojo" href="/programas">
            <span>¡Inscríbete ahora!</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profesores;
