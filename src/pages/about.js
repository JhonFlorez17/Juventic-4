import React, { Component } from "react";
import "../App.css";
import Comentarios from "../components/comentarios";
import Contact from "../components/contact";
import { getEmpleado } from "../request/probar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGooglePlus,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Number_carrito from "../components/number_carrito";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: [],
    };
    this.load_staff();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  load_staff() {
    getEmpleado().then((jsonR) => {
      this.setState({
        staff: jsonR,
      });
    });
  }

  items_staff() {
    return this.state.staff.map((personal) => {
      return (
        <div className="col-md-4 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={personal.imagen} className="img-fluid" />
              <ul className="social">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faGooglePlus} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-content">
              <h3 className="title">{personal.nombre}</h3>
              <span className="post">{personal.cargo}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div className="all-page-title page-breadcrumb-two">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-12">
                <h1>Quienes somos</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <div className="inner-column">
                  <h1>
                    Conoce nuestra <span> Trayectoria </span>
                  </h1>
                  <h4>Esta es nuestra historia</h4>
                  <p>
                    Somos el primer y único restaurante con 5 estrellas en
                    Bogotá . Desde 2017 estamos brindando experiencias a
                    nuestros visitantes y contamos con diferentes espacios para
                    compartir en familia y amigos.
                  </p>
                  <p>
                    Nuestra receta es unica y secreta en el mundo, ya que es una
                    receta que ha estado por generaciones en nuestra familia y
                    ahora tienes la oportunidad de deleitarla.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img src="images/about-img.jpg" alt className="img-fluid" />
              </div>
              <div className="col-md-12">
                <div className="col-md-12">
                  <div className="inner-pt">
                    <h1>
                      Nuestro <span> Compromiso </span>
                    </h1>
                    <p>
                      Sed tincidunt, neque at egestas imperdiet, nulla sapien
                      blandit nunc, sit amet pulvinar orci nibh ut massa. Proin
                      nec lectus sed nunc placerat semper. Duis hendrerit elit
                      nec sapien porttitor, ut pretium ipsum feugiat. Aenean
                      volutpat porta nisi in gravida. Curabitur pulvinar ligula
                      sed facilisis bibendum. Nullam vitae nulla elit.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stuff-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>
                    <span>Nuestro equipo de trabajo</span>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>
            </div>
            <div className="row">{this.items_staff()}</div>
          </div>
        </div>
        <Comentarios />
        <Contact />
        <Number_carrito />
      </>
    );
  }
}

export default About;
