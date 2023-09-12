// Importación de ganchos y estilos
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "../../DarkModeContext";
import Footer from "../../components/Footer/Footer";
import "./Vermas.css"; // Importación de estilos CSS

const Vermas = () => {
  const location = useLocation(); // Obtiene la ubicación actual
  const subprograma = location.state?.subprograma || null; // Obtiene el subprograma de la ubicación, o null si no hay
  const [activeTab, setActiveTab] = useState(null); // Estado para la pestaña activa
  const { isDarkMode } = useDarkMode(); // Obtiene el estado del modo oscuro
  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? null : index);
  }; // Maneja el clic en una pestaña
  if (!subprograma) {
    return <div>Subprograma no encontrado</div>;
  } // Si no hay subprograma, muestra un mensaje

  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="contenedor mt-4">
        <div className="row">
          {/* Detalles del subprograma */}
          <div className="col-md-8">
            <div
              className={`col-md-auto bg-light p-3 ${
                isDarkMode ? "dark-informacion" : "light-mode"
              }`}
            >
              {/* Muestra más información del subprograma */}
              <h2>{subprograma.nombre}</h2>
              <p>{subprograma.descripcion}</p>
              <div className="row">
                <div className="col-md-4">
                  <p>
                    <span
                      style={{ color: "green", marginRight: "5px" }}
                      role="img"
                      aria-label="Modalidad"
                    >
                      👨‍🏫
                    </span>
                    {subprograma.modalidad}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <span
                      style={{ color: "green", marginRight: "5px" }}
                      role="img"
                      aria-label="Horas Académicas"
                    >
                      ⏰
                    </span>
                    {subprograma.horasAcademicas}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <span
                      style={{ color: "green", marginRight: "5px" }}
                      role="img"
                      aria-label="Dirigido"
                    >
                      💸
                    </span>
                    Curso Gratuito
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`card mt-5 ${isDarkMode ? "dark-card" : "light-mode"}`}
            >
              <div className="card-body ">
                <h4>
                  <strong>{subprograma.textaprender}</strong>
                </h4>
                <div className="row mt-4">
                  <div
                    className={` ${
                      isDarkMode ? "dark-card-text" : "light-mode"
                    }`}
                  >
                    {subprograma.capacitado.map((item, index) => (
                      <p key={index} style={{ display: "flex" }}>
                        <span style={{ color: "green", marginRight: "5px" }}>
                          {subprograma.iconoCheck}
                        </span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Más contenido del curso */}
            <div
              className={`mt-5 ${
                isDarkMode ? "dark-contenido-curso" : "light-mode"
              }`}
            >
              <h4>
                {/* texto contenido curso */}
                <strong>{subprograma.textocontenidocurso}</strong>
              </h4>

              {/* Muestra el contenido del subprograma con pestañas */}
              <ul className="p-0">
                {subprograma.contenido1 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 1 ? "active" : ""}`}
                      onClick={() => handleTabClick(1)}
                    >
                      {subprograma.contenido1[0]}
                    </button>
                    {activeTab === 1 && (
                      <ul
                        className={`tab-content ${
                          isDarkMode ? "dark-tab-content" : "light-mode"
                        }`}
                      >
                        {subprograma.contenido1[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido2 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 2 ? "active" : ""}`}
                      onClick={() => handleTabClick(2)}
                    >
                      {subprograma.contenido2[0]}
                    </button>
                    {activeTab === 2 && (
                      <ul className="tab-content">
                        {subprograma.contenido2[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido3 && (
                  <li className="list-unstyled">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 3 ? "active" : ""}`}
                      onClick={() => handleTabClick(3)}
                    >
                      {subprograma.contenido3[0]}
                    </button>
                    {activeTab === 3 && (
                      <ul className="tab-content">
                        {subprograma.contenido3[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido4 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 4 ? "active" : ""}`}
                      onClick={() => handleTabClick(4)}
                    >
                      {subprograma.contenido4[0]}
                    </button>
                    {activeTab === 4 && (
                      <ul className="tab-content">
                        {subprograma.contenido4[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido5 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 5 ? "active" : ""}`}
                      onClick={() => handleTabClick(5)}
                    >
                      {subprograma.contenido5[0]}
                    </button>
                    {activeTab === 5 && (
                      <ul className="tab-content">
                        {subprograma.contenido5[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido6 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 6 ? "active" : ""}`}
                      onClick={() => handleTabClick(6)}
                    >
                      {subprograma.contenido6[0]}
                    </button>
                    {activeTab === 6 && (
                      <ul className="tab-content">
                        {subprograma.contenido6[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido7 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 7 ? "active" : ""}`}
                      onClick={() => handleTabClick(7)}
                    >
                      {subprograma.contenido7[0]}
                    </button>
                    {activeTab === 7 && (
                      <ul className="tab-content">
                        {subprograma.contenido7[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido8 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 8 ? "active" : ""}`}
                      onClick={() => handleTabClick(8)}
                    >
                      {subprograma.contenido8[0]}
                    </button>
                    {activeTab === 8 && (
                      <ul className="tab-content">
                        {subprograma.contenido8[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido9 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 9 ? "active" : ""}`}
                      onClick={() => handleTabClick(9)}
                    >
                      {subprograma.contenido9[0]}
                    </button>
                    {activeTab === 9 && (
                      <ul className="tab-content">
                        {subprograma.contenido9[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido10 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 10 ? "active" : ""}`}
                      onClick={() => handleTabClick(10)}
                    >
                      {subprograma.contenido10[0]}
                    </button>
                    {activeTab === 10 && (
                      <ul className="tab-content">
                        {subprograma.contenido10[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido11 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 11 ? "active" : ""}`}
                      onClick={() => handleTabClick(11)}
                    >
                      {subprograma.contenido11[0]}
                    </button>
                    {activeTab === 11 && (
                      <ul className="tab-content">
                        {subprograma.contenido11[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {subprograma.contenido12 && (
                  <li className="list-unstyled ">
                    <button
                      className={`tab-button ${
                        isDarkMode ? "dark-tab-button" : "light-mode"
                      } ${activeTab === 12 ? "active" : ""}`}
                      onClick={() => handleTabClick(12)}
                    >
                      {subprograma.contenido12[0]}
                    </button>
                    {activeTab === 12 && (
                      <ul className="tab-content">
                        {subprograma.contenido12[1].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Barra lateral con detalles adicionales */}
          <div className="col-md-4 ">
            <div
              className={`card custom-card-height card-hover-effect ${
                isDarkMode ? "dark-custom-card-height" : "light-mode"
              }`}
            >
              {/* Muestra la imagen del subprograma */}
              <img
                src={subprograma.imagen}
                alt={subprograma.nombre}
                className="card-img-top img-fluid custom-img-height"
              />

              <div className="card-body">
                {/* Muestra botón de inscripción */}
                <div>
                  <div
                    className={`text-center ${
                      isDarkMode ? "dark-inscribirse" : "light-mode"
                    }`}
                  >
                    <a
                      href="https://forms.gle/yLueEHaMSxgwsZir6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="custom-button "
                        style={{ width: "100%" }}
                      >
                        INSCRIBIRSE
                      </button>
                    </a>
                  </div>
                </div>

                {/* Requisitos */}
                {subprograma.requisitos &&
                  subprograma.requisitos.length > 0 && (
                    <div
                      className={` ${
                        isDarkMode ? "dark-informacion-card" : "light-mode"
                      }`}
                    >
                      {/* texto requisito */}
                      <h5>{subprograma.textrequisito}</h5>

                      <div className="mt-3">
                        {subprograma.requisitos.map((item, index) => (
                          <div
                            key={index}
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            <span
                              style={{ color: "green", marginRight: "5px" }}
                            >
                              {subprograma.iconoCheck}
                            </span>

                            <div style={{ marginLeft: "10px" }}>{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Dirigido a */}
                {subprograma.dirigido && (
                  <div
                    className={` mt-4 ${
                      isDarkMode ? "dark-informacion-card" : "light-mode"
                    }`}
                  >
                    {/* texto dirigido */}
                    <h5>{subprograma.textdirigido}</h5>
                    <h6 style={{ display: "flex", alignItems: "baseline" }}>
                      <span className="icon">{subprograma.iconoUsuarios}</span>
                      <span>{subprograma.dirigido}</span>
                    </h6>
                  </div>
                )}

                <div
                  className={` row  ${
                    isDarkMode ? "dark-informacion-card" : "light-mode"
                  }`}
                >
                  {/* Metodología */}
                  {subprograma.metodologia && (
                    <div className="col-md-8 mt-4">
                      {/* texto metodologia */}
                      <h5>{subprograma.textmetodologia}</h5>
                      <h6>
                        <span className="icon">
                          {subprograma.iconoMetodologia}
                        </span>
                        {subprograma.metodologia}
                      </h6>
                    </div>
                  )}

                  {/* Nivel */}
                  {subprograma.nivel && (
                    <div
                      className={` col-md-8 mt-4 ${
                        isDarkMode ? "dark-informacion-card" : "light-mode"
                      }`}
                    >
                      {/* texto nivel */}
                      <h5>{subprograma.textnivel}</h5>
                      <h6>
                        <span className="icon">{subprograma.iconoNivel}</span>
                        {subprograma.nivel}
                      </h6>
                    </div>
                  )}
                </div>

                {subprograma.especialidad && (
                  <div
                    className={` mt-4 ${
                      isDarkMode ? "dark-informacion-card" : "light-mode"
                    }`}
                  >
                    {/* texto especialidad */}
                    <h5>{subprograma.textespecialidad}</h5>
                    <h6>
                      <span className="icon">
                        {subprograma.iconoEspecialidad}
                      </span>
                      {subprograma.especialidad}
                    </h6>
                  </div>
                )}

                {subprograma.area && (
                  <div
                    className={` mt-4 ${
                      isDarkMode ? "dark-informacion-card" : "light-mode"
                    }`}
                  >
                    {/* texto area */}
                    <h5>{subprograma.textarea}</h5>
                    <h6>
                      <span className="icon">{subprograma.iconoArea}</span>
                      {subprograma.area}
                    </h6>
                  </div>
                )}

                {/* Muestra tabla de evaluación */}

                {subprograma.tabla && (
                  <table className="table mt-4">
                    <thead>
                      <th
                        colSpan={3}
                        className={` text-center custom-th p-2 ${
                          isDarkMode ? "dark-sistema" : "light-mode"
                        }`}
                      >
                        {subprograma.tituloSistema}
                      </th>
                    </thead>
                    <tbody>
                      {subprograma.tabla.map((fila, index) => (
                        <tr key={index}>
                          <td
                            className={`${
                              isDarkMode
                                ? "dark-sistema-contenido"
                                : "light-mode"
                            }`}
                          >
                            {fila.tdSistema}
                          </td>
                          <td
                            className={`${
                              isDarkMode
                                ? "dark-sistema-contenido"
                                : "light-mode"
                            }`}
                          >
                            {fila.tdSistemaConte}
                          </td>
                          <td
                            className={`${
                              isDarkMode
                                ? "dark-sistema-contenido"
                                : "light-mode"
                            }`}
                          >
                            {fila.tdSistemaPorcent}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vermas;
