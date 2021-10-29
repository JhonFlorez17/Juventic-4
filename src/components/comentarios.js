import React, { Component } from "react";
import "../App.css";
import "./comentarios.css";
import { Carousel } from "react-bootstrap";

class Comentarios extends Component {
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
                    <Carousel.Item className="carousel-item2 text-center ">
                      <div className="img-box m-auto">
                        <img
                          className="d-block w-100 rounded-circle carousel-item2"
                          src="images/cliente1.jpg"
                        />
                      </div>
                      <h5 className="mt-4 mb-0">
                        <strong className="text-warning text-uppercase">
                          Carlos Pérez
                        </strong>
                      </h5>
                      <h6 className="text-dark m-0">Ingeniero de sistemas</h6>
                      <p className="m-0 pt-3">
                        Las hamburguesas me encantaron, desde que las probé solo
                        pienso cuando me iré a comer otra.
                      </p>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item2 text-center ">
                      <div className="img-box m-auto">
                        <img
                          className="d-block w-100 rounded-circle"
                          src="images/cliente2.jpg"
                        />
                      </div>
                      <h5 className="mt-4 mb-0">
                        <strong className="text-warning text-uppercase">
                          Ana peralta
                        </strong>
                      </h5>
                      <h6 className="text-dark m-0">Ama de casa</h6>
                      <p className="m-0 pt-3">
                        Llenó mis expectativas. El servicio que me brindaron
                        para el cumpleaños de mi hijo fue magnifico. Todos los
                        niños quedaron contentos. Los recomendaré.
                      </p>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item2 text-center ">
                      <div className="img-box m-auto">
                        <img
                          className="d-block w-100 rounded-circle"
                          src="images/cliente3.jpg"
                        />
                      </div>
                      <h5 className="mt-4 mb-0">
                        <strong className="text-warning text-uppercase">
                          Daniel lopez
                        </strong>
                      </h5>
                      <h6 className="text-dark m-0">Estudiante</h6>
                      <p className="m-0 pt-3">
                        Me encantá visitar este lugar con mis amigos, pasamos un
                        rato agradable y las comidas son muy deliciosas.
                      </p>
                    </Carousel.Item>
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
