import React from "react";
import { Link } from "react-router-dom";
import pacasmayoBL from "../../img/Pacasmayo Color.png";
import pacasmayoBN from "../../img/Pacasmayo2.png";
import { useDarkMode } from "../../DarkModeContext";
import "./Footer.css";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const phoneNumberSechura = "978857009";
  const phoneNumberPacasmayo = "978852534";
  const phoneNumberTembladera = "942022688";
  const whatsappLinkSechura = `https://wa.me/${phoneNumberSechura}`;
  const whatsappLinkPacasmayo = `https://wa.me/${phoneNumberPacasmayo}`;
  const whatsappLink = `https://wa.me/${phoneNumberTembladera}`;

  return (
    <footer
      className={`mt-5 color-fondo ${
        isDarkMode ? "dark-mode-content" : "light-mode-content"
      }`}
    >
      <div className="contenedor pt-5 border-bottom">
        <div className="row">
          <div className="col-md-3 col-12 mb-3 text-center logo-contenedor">
            <img
              src={isDarkMode ? pacasmayoBN : pacasmayoBL}
              alt=""
              width="180px"
              id="logoPacasmayo"
            />
          </div>
          <div className="col-md-9 col-12">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6 p-0 mb-3">
                <h5 className="mb-4">Inicio</h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/">
                      Nuestras experiencias
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/">
                      Testimomios
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6 p-0 mb-3">
                <h5 className="mb-4">Nosotros</h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/nosotros">
                      Historia
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/nosotros">
                      Misión y Visión{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-3 p-0">
                <h5 className="mb-4">Programas</h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/programas">
                      Transversales
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/programas">
                      Por perfil
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/programas">
                      Educar
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/programas">
                      Dojo
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link className="al" to="/programas">
                      De oficio
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-3 p-0">
                <h5 className="mb-4">Contacto</h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      className="al whatsapp-button"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={whatsappLinkSechura}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-whatsapp"
                        width="35"
                        height="25"
                        viewBox="0 0 20 24"
                        strokeWidth="1.5"
                        stroke="#019201"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                      Sechura
                    </a>
                  </li>

                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      className="al whatsapp-button"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={whatsappLinkPacasmayo}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-whatsapp"
                        width="35"
                        height="25"
                        viewBox="0 0 20 24"
                        strokeWidth="1.5"
                        stroke="#019201"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                      Pacasmayo
                    </a>
                  </li>

                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      className="al whatsapp-button"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={whatsappLink}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-whatsapp"
                        width="35"
                        height="25"
                        viewBox="0 0 20 24"
                        strokeWidth="1.5"
                        stroke="#019201"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                      Tembladera
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="py-4 d-flex justify-content-center align-items-center">
              <p className="copy-right mr-4">
                &copy; 2023 Tecsup N°1. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
