import React, { Component } from "react";
import "../App.css";
import "./carousel.css";
import { Carousel } from "react-bootstrap";

class Carousel_home extends Component {
  render() {
    return (
      <Carousel className="cover-slides" fade id="slides">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/container-01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="m-b-20">
              <strong>Bienvenidos A fast food</strong>
            </h1>
            <p className="m-b-40">
              El mejor lugar para venir a celebrar o pasar el rato con los que
              más quieres ¿Qué esperas para conocernos?
            </p>
            <p>
              <a
                className="btn btn-lg btn-circle btn-outline-new-white"
                href="reservation.html"
              >
                Reservar
              </a>
            </p>
          </Carousel.Caption>
          <div className="overlay-background"></div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/container-02.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="m-b-20">
              <strong>LAS MEJORES ¡SI!, LAS MEJORES HAMBURGUESAS</strong>
            </h1>
            <p className="m-b-40">
              Deleita tu paladar con nuestras mejores recetas
            </p>
            <p>
              <a
                className="btn btn-lg btn-circle btn-outline-new-white"
                href="reservation.html"
              >
                Reservar
              </a>
            </p>
          </Carousel.Caption>
          <div className="overlay-background"></div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/container-03.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="m-b-20">
              <strong>
                ¿Amas el pollo frito? pues hoy es tu día de suerte
              </strong>
            </h1>
            <p className="m-b-40">
              ¡Estamos catalogados como el mejor pollo frito del país!
            </p>
            <p>
              <a
                className="btn btn-lg btn-circle btn-outline-new-white"
                href="reservation.html"
              >
                Reservar
              </a>
            </p>
          </Carousel.Caption>
          <div className="overlay-background"></div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/container.04.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="m-b-20">
              <strong>DOMICILIOS ¡A CUALQUIER LUGAR DE BOGOTÁ!</strong>
            </h1>
            <p className="m-b-40">Pregunta por tu domicilio de cortesía</p>
            <p>
              <a
                className="btn btn-lg btn-circle btn-outline-new-white"
                href="reservation.html"
              >
                Contactanos
              </a>
            </p>
          </Carousel.Caption>
          <div className="overlay-background"></div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousel_home;
