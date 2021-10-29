import React, { Component } from "react";
import "../App.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGooglePlus,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer-area bg-f">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <h3>Navega</h3>
                <p>
                  <span className="text-color">
                    <a href="index.html">Inicio</a>
                  </span>{" "}
                </p>
                <p>
                  <span className="text-color">
                    <a href="menu.html">Menú</a>
                  </span>{" "}
                </p>
                <p>
                  <span className="text-color">
                    <a href="blog.html">Servicios</a>
                  </span>{" "}
                </p>
                <p>
                  <span className="text-color">
                    <a href="blog-details.html">Nuestro Blog</a>
                  </span>{" "}
                </p>
                <p>
                  <span className="text-color">
                    <a href="about.html">Quienes somos</a>
                  </span>{" "}
                </p>
                <p>
                  <span className="text-color">
                    <a href="reservation.html">Contáctanos</a>
                  </span>{" "}
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3>Suscribete</h3>
                <div className="subscribe_form">
                  <form className="subscribe_form">
                    <input
                      name="EMAIL"
                      id="subs-email"
                      className="form_input"
                      placeholder="Dirección de Email"
                      type="email"
                    />
                    <button type="submit" className="submit">
                      SUSCRIBIRSE
                    </button>
                    <div className="clearfix" />
                  </form>
                </div>
                <ul className="list-inline f-social">
                  <li className="list-inline-item">
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3>Información de contacto</h3>
                <p className="lead">calle 34 # 12 - 6, Bogotá, Colombia</p>
                <p className="lead">
                  <a href="#">2810001</a>
                </p>
                <p>
                  <a href="#"> restaurante@gmail.com</a>
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3>Horarios de atención</h3>
                <p>
                  <span className="text-color">Lunes: </span> 04:00 PMm - 12:00
                  AM
                </p>
                <p>
                  <span className="text-color">Martes :</span> Cerrado
                </p>
                <p>
                  <span className="text-color">Miércoles - Viernes :</span>{" "}
                  04:00 PM - 02:00 AM
                </p>
                <p>
                  <span className="text-color">Sábado - Domingo :</span> 04:00
                  PM - 02:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <p className="company-name">
                    Todos los derechos reservados. © 2021{" "}
                    <a href="#">Restaurante</a> Desarrollado por :
                    <a href="#">html Juventic</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
