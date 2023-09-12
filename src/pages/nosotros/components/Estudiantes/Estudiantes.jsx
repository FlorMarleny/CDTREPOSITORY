import React, { useState, useEffect } from "react";
import "./Estudiantes.css";
import { FaUsers, FaBook, FaSmile } from "react-icons/fa"; // Importa los iconos que quieras usar

const Estudiantes = () => {
  const limiteMaximoSedeA = 12000;
  const limiteMaximoSedeB = 40;
  const limiteMaximoSedeC = 95;

  const [numeroSedeA, setNumeroSedeA] = useState(0);
  const [numeroSedeB, setNumeroSedeB] = useState(0);
  const [numeroSedeC, setNumeroSedeC] = useState(0);

  useEffect(() => {
    const seccionEstudiantes = document.getElementById("estudiantes");
    const seccionPos = seccionEstudiantes.offsetTop;
    const ventanaPos = window.scrollY + window.innerHeight;

    const applyEffects = () => {
      if (numeroSedeA < limiteMaximoSedeA) {
        setNumeroSedeA((prevNumero) =>
          Math.min(prevNumero + 30, limiteMaximoSedeA)
        );
      }
      if (numeroSedeB < limiteMaximoSedeB) {
        setNumeroSedeB((prevNumero) =>
          Math.min(prevNumero + 1, limiteMaximoSedeB)
        );
      }
      if (numeroSedeC < limiteMaximoSedeC) {
        setNumeroSedeC((prevNumero) =>
          Math.min(prevNumero + 1, limiteMaximoSedeC)
        );
      }
    };

    if (ventanaPos > seccionPos) {
      applyEffects();
      const interval = setInterval(applyEffects, 20);

      return () => clearInterval(interval);
    } else {
      applyEffects();
    }
  }, [
    numeroSedeA,
    numeroSedeB,
    numeroSedeC,
    limiteMaximoSedeA,
    limiteMaximoSedeB,
    limiteMaximoSedeC,
  ]);

  return (
    <div className="bg-fondo mb-5">
      <div id="estudiantes" className="estudiantes-section">
        <div className="row justify-content-center">
          <div className="col-md-4 col-12 d-flex justify-content-center">
            <div className="row align-items-center mt-3">
              <div className="col-md-2 icono">
                <FaUsers size={60} />
              </div>
              <div className="col-md-8 info">
                <span className="numero">{numeroSedeA}</span>
                <div className="texto">Estudiantes</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 d-flex justify-content-center">
            <div className="row align-items-center mt-3">
              <div className="col-md-2 icono">
                <FaBook size={60} />
              </div>
              <div className="col-md-8 info">
                <span className="numero">{numeroSedeB}</span>
                <div className="texto">Cursos activos</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 d-flex justify-content-center">
            <div className="row align-items-center mt-3">
              <div className="col-md-2 icono ">
                <FaSmile size={60} />
              </div>
              <div className="col-md-8 info">
                <span className="numero">{numeroSedeC}%</span>
                <div className="texto">de satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estudiantes;