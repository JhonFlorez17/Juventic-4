import React, { Component } from "react";
import "../App.css";
import "./carousel.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const items = [
  {
    imagen: "images/container-01.jpg",
    titulo: "Bienvenidos \n A fast food",
    descripcion:
      "El mejor lugar para venir a celebrar o pasar el rato con los que más quieres ¿Qué esperas para conocernos?",
    boton: "Reservar",
  },
  {
    imagen: "images/container-02.jpg",
    titulo: "LAS MEJORES ¡SI!, LAS MEJORES HAMBURGUESAS",
    descripcion: "Deleita tu paladar con nuestras mejores recetas",
    boton: "Reservar",
  },
  {
    imagen: "images/container-03.jpg",
    titulo: "¿Amas el pollo frito? pues hoy es tu día de suerte",
    descripcion: "¡Estamos catalogados como el mejor pollo frito del país!",
    boton: "Reservar",
  },
  {
    imagen: "images/container.04.jpg",
    titulo: "DOMICILIOS ¡A CUALQUIER LUGAR DE BOGOTÁ!",
    descripcion: "Pregunta por tu domicilio de cortesía",
    boton: "Contactanos",
  },
];

class Carousel_home extends Component {
  items_Car() {
    return items.map((item, i) => {
      return (
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={item.imagen} alt="First slide" />
          <Carousel.Caption>
            <h1 className="m-b-20">
              <strong>{item.titulo}</strong>
            </h1>
            <p className="m-b-40">{item.descripcion}</p>
            <p>
              <Link
                className="btn btn-lg btn-circle btn-outline-new-white"
                to="/reserva"
              >
                {item.boton}
              </Link>
            </p>
          </Carousel.Caption>
          <div className="overlay-background"></div>
        </Carousel.Item>
      );
    });
  }

  render() {
    return (
      <Carousel className="cover-slides" fade id="slides">
        {this.items_Car()}
      </Carousel>
    );
  }
}

export default Carousel_home;
