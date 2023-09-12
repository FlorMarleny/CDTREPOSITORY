import React from "react";
import empresa from "../../../../img/Pacasmayo3.png";
import pacasmayo from "../../../../img/banner-pacasmayo.png";
import fotoPacasmayo from "../../../../img/foto-pacasmayo.jpg";
import "./Agradecimiento.css";

const Agradecimiento = () => {
  return (
    <div className="responsive-bann d-flex position-relative">
      <div className="row  ">
        <div className="col-md-6  justify-content-center">
          <div className="d-flex mx-2 mt-5 ">
            <div className="text-center">
              <img
                className="img-with-overlay centered-img img-fluid max-size-image"
                src={pacasmayo}
                alt=""
              />
              <img
                className="img-with-overlay centered-img img-fluid max-size-image"
                src={fotoPacasmayo}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-1 offset-md-1 offset-lg-2 p-5 w-100 m-0">
              <img
                src={empresa}
                alt="Logo de la Empresa"
                id="logo"
                className="img-fluid"
                style={{ maxWidth: "200px", height: "auto" }}
              />

              <p className="mb-6 mt-2 text-white">
                Un agradecimiento especial a{" "}
                <strong>Cementos Pacasmayo S.A.A.</strong> por su compromiso con
                la educación y el desarrollo personal.
              </p>
              <a
                className="more-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cementospacasmayo.com.pe/"
              >
                Conócenos aún más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agradecimiento;
