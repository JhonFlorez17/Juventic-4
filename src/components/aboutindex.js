import React, { Component } from "react";
import "../App.css";
import "./aboutindex.css";

class aboutindex extends Component {
  render() {
    return (
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="inner-column">
                <h1>
                  Conoce nuestra <span>Trayectoria</span>
                </h1>
                <h4>Esta es nuestra historia</h4>
                <p>
                  Somos el primer y único restaurante con 5 estrellas en Bogotá
                  . Desde 2017 estamos brindando experiencias a nuestros
                  visitantes y contamos con diferentes espacios para compartir
                  en familia y amigos.
                </p>
                <p>
                  Nuestra receta es unica y secreta en el mundo, ya que es una
                  receta que ha estado por generaciones en nuestra familia y
                  ahora tienes la oportunidad de deleitarla.
                </p>
                <a
                  className="btn btn-lg btn-circle btn-outline-new-white"
                  href="about.html"
                >
                  Conoce más
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                src="images/about-img.jpg"
                alt="imagen"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutindex;
