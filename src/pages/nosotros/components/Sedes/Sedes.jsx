import React from "react";
import "./Sedes.css";
import Sechura1 from "../../../../img/sechura1.jpeg";
import Pacasmayo1 from "../../../../img/pacasmayo1S.jpg";
import Tembladera1 from "../../../../img/tembladera1S.jpg";
// import Tembladera2 from "../../../../img/tembladera2S.jpg";
// import Pacasmayo2 from "../../../../img/pacasmayo1S.jpg";
// import Sechura2 from "../../../../img/sechura2S.jpg";

import { Carousel, Row, Col } from "react-bootstrap";

const Sedes = () => {
  const sedeCaptionStyle = {
    padding: "12px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "300px",
    height: "350px",
  };

  return (
    <section className="mt-4 mb-5" style={{ padding: "1rem" }}>
      <div className="sedes-container">
        <h2>
          Explorando nuestra <span>Historia</span>
        </h2>

        <p className="color-p">Un Recorrido por Nuestros Espacios Únicos</p>

        <Carousel>
          {/* PACASMAYO */}
          <Carousel.Item>
            <Row>
              <Col xs={12} md={6}>
                <img
                  style={imageStyle}
                  className="d-block w-100 brightness-increase bg-primary"
                  src={Pacasmayo1}
                  alt="Sede 1"
                />
              </Col>

              <Col xs={12} md={6}>
                <div style={sedeCaptionStyle}>
                  <h3 style={{ color: "#ad091e" }}>CDT Pacasmayo</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde accusamus magni maxime soluta aut, veniam voluptatum
                    molestias facilis fugiat sequi necessitatibus laudantium
                    asperiores voluptatem illum modi incidunt quia numquam!
                    Quod, commodi tempora illo sint quidem beatae amet impedit
                    expedita accusamus assumenda fuga autem nulla voluptatem
                    laboriosam nobis recusandae fugit harum temporibus neque
                    suscipit doloremque consectetur! Repellat ducimus nostrum,
                    voluptas provident consequatur necessitatibus animi,
                    temporibus labore in accusantium, expedita sapiente facere
                    ea architecto eaque fuga corporis sed adipisci odio earum
                    minus.
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          {/* TEMBLADERA */}
          <Carousel.Item>
            <Row>
              <Col xs={12} md={6}>
                <img
                  style={imageStyle}
                  className="d-block w-100 brightness-increase"
                  src={Tembladera1}
                  alt="Sede 2"
                />
              </Col>
              <Col xs={12} md={6}>
                <div style={sedeCaptionStyle}>
                  <h3 style={{ color: "#ad091e" }}>CDT Tembladera</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde accusamus magni maxime soluta aut, veniam voluptatum
                    molestias facilis fugiat sequi necessitatibus laudantium
                    asperiores voluptatem illum modi incidunt quia numquam!
                    Quod, commodi tempora illo sint quidem beatae amet impedit
                    expedita accusamus assumenda fuga autem nulla voluptatem
                    laboriosam nobis recusandae fugit harum temporibus neque
                    suscipit doloremque consectetur! Repellat ducimus nostrum,
                    voluptas provident consequatur necessitatibus animi,
                    temporibus labore in accusantium, expedita sapiente facere
                    ea architecto eaque fuga corporis sed adipisci odio earum
                    minus.
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          {/* SECHURA */}
          <Carousel.Item>
            <Row>
              <Col xs={12} md={6}>
                <img
                  style={imageStyle}
                  className="d-block w-100 brightness-increase"
                  src={Sechura1}
                  alt="Sede 3"
                />
              </Col>
              <Col xs={12} md={6}>
                <div style={sedeCaptionStyle}>
                  <h3 style={{ color: "#ad091e" }}>CDT Sechura</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde accusamus magni maxime soluta aut, veniam voluptatum
                    molestias facilis fugiat sequi necessitatibus laudantium
                    asperiores voluptatem illum modi incidunt quia numquam!
                    Quod, commodi tempora illo sint quidem beatae amet impedit
                    expedita accusamus assumenda fuga autem nulla voluptatem
                    laboriosam nobis recusandae fugit harum temporibus neque
                    suscipit doloremque consectetur! Repellat ducimus nostrum,
                    voluptas provident consequatur necessitatibus animi,
                    temporibus labore in accusantium, expedita sapiente facere
                    ea architecto eaque fuga corporis sed adipisci odio earum
                    minus.
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Sedes;
