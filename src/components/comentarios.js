import React, { Component } from "react";
import "../App.css";
import "./comentarios.css";
import { Carousel } from "react-bootstrap";
import { getComentario } from "../request/probar";

class Comentarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_pop: [],
    };
    this.load_comentarios();
  }

  load_comentarios() {
    getComentario().then((jsonR) => {
      this.setState({
        menu_pop: jsonR,
      });
    });
  }

  items_Com() {
    return this.state.menu_pop.map((item, i) => {
      if (item.estado == "Aprobado") {
        return (
          <Carousel.Item className="carousel-item2 text-center ">
            <div className="img-box m-auto">
              <img
                className="d-block w-100 rounded-circle carousel-item2"
                src={item.imagen_cli}
              />
            </div>
            <h5 className="mt-4 mb-0">
              <strong className="text-warning text-uppercase">
                {item.nombre_cli}
              </strong>
            </h5>
            <h6 className="text-dark m-0">{item.profesion_cli}</h6>
            <p className="m-0 pt-3">{item.comentario}</p>
          </Carousel.Item>
        );
      }
    });
  }

  render() {
    return (
      <>
        <div className="customer-reviews-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>Valoración de los clientes</h2>
                  <p>
                    Testimonios de algunos clientes acerca de nuestros productos
                    y servicios
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mr-auto ml-auto text-center">
                <div className="carousel-inner mt-4">
                  <Carousel
                    id="reviews"
                    className="carousel slide"
                    data-ride="carousel"
                    indicators={false}
                  >
                    {this.items_Com()}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Comentarios;
