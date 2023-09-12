import React from "react";
import "./Mision.css";

const Mision = () => {
  return (
    <section style={{ padding: "3rem" }}>
      <div className="row">
        <div className="col-md-6">
          <h2 className="mission-heading">
            VIS<span>IÓN</span>
          </h2>
          <p className="text-center">
            Generar un efecto desproporcionado de bienestar en la sociedad a
            través de la educación.
          </p>
        </div>

        <div className="col-md-6">
          <h2 className="mission-heading">
            MIS<span>IÓN</span>
          </h2>
          <p className="text-center">
            Promover el fortalecimiento de las competencias de la comunidad,
            para lograr la sostenibilidad social.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mision;
