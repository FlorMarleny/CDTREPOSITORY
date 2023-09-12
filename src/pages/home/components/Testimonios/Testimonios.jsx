import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import imagenT1 from "../../../../img/imagenT1.jpeg";
import imagenT2 from "../../../../img/imagenT2.jpeg";
import imagenT3 from "../../../../img/imagenT3.jpeg";
import imagenT4 from "../../../../img/imagenT4.jpeg";
import "./Testimonios.css";
const opiniones = [
  {
    id: 1,
    name: "JOSÉ CARLOS ECHE LORO",
    image: imagenT1,
    rating: 5,
    opinion:
      "“Conocí el CDT en el 2019 cuando no me encontraba laborando y partir de ahí he llevado los cursos: Excel para Profesionales, Marketing Digital con Redes Sociales, Word Empresarial, Herramientas Colaborativas para la Educación, Excel Avanzado con Macros, Mi Primera Página con Google Sites, Introducción a la Informática y Ofimática Profesional. Actualmente laboro en el área de planillas de la Municipalidad Provincial de Sechura, utilizando todos los conocimientos adquiridos en el CDT”",
  },
  {
    id: 2,
    name: "ALEJANDRA CANCICO RUIZ",
    image: imagenT2,
    rating: 4,
    opinion:
      "“Llevé los cursos: Excel para Profesionales y Ofimática Profesional, los cuales me han ayudado para mejorar mi empleabilidad, aplicando lo aprendido en la actividad de automatización de inventario en la empresa donde laboraba. Actualmente me encuentro llevando el Programa de Seguridad y Salud en el Trabajo, el cual suma a las actividades realizadas en el área de seguridad industrial dentro de una empresa industrial donde laboro actualmente”",
  },
  {
    id: 3,
    name: "LUIS NAMOC INFANTE",
    image: imagenT3,
    rating: 3,
    opinion:
      "“En el año 2020, realicé los cursos Excel Básico, Excel para Profesionales y Word Empresarial, cuando aún era estudiante de la carrera técnica agropecuaria en el I.E.S.T.P. Carlos Malpica Rivarola. Los conocimientos adquiridos me permitieron fortalecer mis competencias técnicas digitales. Actualmente trabajo en una empresa industrial, como Técnico Agropecuario”",
  },
  {
    id: 4,
    name: "Henry Barboza",
    image: imagenT4,
    rating: 4,
    opinion:
      "“Soy Henry Barboza, docente de la I.E. Abilia Ocampo de Rioja. En este año cursé el Programa Educar. Los conocimientos adquiridos, sobre el uso de herramientas y técnicas digitales, me permitieron fortalecer mi perfil profesional, los cuales aplico con mis estudiantes de educación secundaria, dando un uso más efectivo al aula de innovación. Actualmente tengo el puesto de coordinador pedagógico en la Institución donde laboro”",
  },
];

const Testimonial = ({ name, image, rating, opinion }) => {
  return (
    <div className="testimonial-container ">
      <img src={image} alt={name} className="user-image img-fluid" />
      <div className="user-rating">
        {[...Array(rating)].map((_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>
      <div className="user-content">
        <p className="user-name">{name}</p>
        <p className="user-opinion">{opinion}</p>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow">&#8592;</span>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow ">&#8594;</span>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonios = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">
        El poder de la educación gratuita<span></span>
      </h2>

      <div style={{ maxWidth: "auto", margin: "0 auto" }} className="w-75 ">
        <p className="text-center">
          
          En este espacio, compartimos testimonios inspiradores de estudiantes
          que han transformado sus vidas gracias a cursos y capacitaciones sin
          costo. A través del acceso igualitario a la educación, han superado
          barreras y alcanzado sus metas.
        </p>
      </div>

      <Row className="mt-5 my-4 ">
        <Col sm={12} className="mx-auto ">
          <div style={{ maxWidth: "auto", margin: "0 auto" , }}>
            <Slider {...settings} className="testimonial-slider   ">
              {opiniones.map((testimonial) => (
                <div key={testimonial.id}>
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>

      <center>
        <a className=" m-auto btn bg-rojo mt-1" href="/programas" role="button">
          Empieza ya
        </a>
      </center>
    </Container>
  );
};

export default Testimonios;
