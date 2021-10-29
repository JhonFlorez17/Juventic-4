import React, { Component } from "react";
import "../App.css";
import "./stylemenu.css";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import Comentarios from "../components/comentarios";
import Contact from "../components/contact";

const articulos = [
  {
    id: 0,
    nommbre_modal: "Bebida Especial 1",
    descripcion: "Bebida con limon y algunas yerbas camperas.",
    precio: 8000,
    imagen: "images2/img-01.jpg",
  },
  {
    id: 1,
    nommbre_modal: "Bebida Especial 2",
    descripcion: "Bebida con naranja y algunas yerbas camperas.",
    precio: 9000,
    imagen: "images2/img-02.jpg",
  },
  {
    id: 2,
    nommbre_modal: "Bebida Especial 3",
    descripcion: "Bebida con vodka y algunas yerbas camperas.",
    precio: 10000,
    imagen: "images2/img-03.jpg",
  },
  {
    id: 3,
    nommbre_modal: "Ensalada Especial 1",
    descripcion: "Ensalada con aguacte y vegetales camperos",
    precio: 15000,
    imagen: "images2/img-04.jpg",
  },
  {
    id: 4,
    nommbre_modal: "Ensalada Especial 2",
    descripcion: "Ensalada con huevos fritos y vegetales camperos",
    precio: 15000,
    imagen: "images2/img-05.jpg",
  },
  {
    id: 5,
    nommbre_modal: "Ensalada Especial 3",
    descripcion: "Ensalada con champiñons, miel y vegetales camperos",
    precio: 20000,
    imagen: "images2/img-06.jpg",
  },
  {
    id: 6,
    nommbre_modal: "Hamburguesa Especial 1",
    descripcion: "Hamburguesa extra L con queso especial",
    precio: 25000,
    imagen: "images2/img-07.jpg",
  },
  {
    id: 7,
    nommbre_modal: "Hot dog Especial 1",
    descripcion: "Hot Dog extra L con queso especial y ensalada",
    precio: 20000,
    imagen: "images2/img-08.jpg",
  },
  {
    id: 8,
    nommbre_modal: "Pizza Especial 1",
    descripcion: "Pizza de carne-queso especial",
    precio: 20000,
    imagen: "images2/img-09.jpg",
  },
  {
    id: 9,
    nommbre_modal: "Hamburguesa Especial 2",
    descripcion: "Hamburguesa extra con queso especial y papas",
    precio: 27000,
    imagen: "images2/img-10.jpg",
  },
  {
    id: 10,
    nommbre_modal: "Hot dog Especial 2",
    descripcion: "Hot Dog extra L con queso especial y ensalada",
    precio: 20000,
    imagen: "images2/img-11.jpg",
  },
  {
    id: 11,
    nommbre_modal: "Pizza Especial 2",
    descripcion: "Pizza de carne-queso especial",
    precio: 20000,
    imagen: "images2/img-12.jpg",
  },
];

const bebidas = [
  {
    id: 12,
    nommbre_modal: "Standard black ",
    descripcion: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    precio: 12000,
    imagen: "images2/menu-beverage.jpg",
  },
  {
    id: 13,
    nommbre_modal: "Standard black coffee",
    descripcion: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    precio: 7000,
    imagen: "images2/menu-beverage.jpg",
  },
  {
    id: 14,
    nommbre_modal: "Standard white coffee",
    descripcion: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    precio: 4000,
    imagen: "images2/menu-beverage.jpg",
  },
  {
    id: 15,
    nommbre_modal: "Standard white",
    descripcion: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    precio: 9000,
    imagen: "images2/menu-beverage.jpg",
  },
];

class Menu extends Component {
  items_menu() {
    return articulos.map((menu) => {
      return (
        <div className="col-lg-4 col-md-6 special-grid drinks">
          <div className="gallery-single fix">
            <img className="img-fluid" alt="Image" src={menu.imagen} />
            <div className="why-text">
              <h5 className="miboton" data-bs-target="#reg-modal">
                {menu.nommbre_modal}
              </h5>
              <p> {menu.descripcion} </p>
              <h5 id="precio"> $ {menu.precio} COP</h5>
            </div>
          </div>
        </div>
      );
    });
  }

  items_bebida() {
    return bebidas.map((bebida) => {
      return (
        <div class="menu-item">
          <div class="menu-img">
            <img alt="Image" src={bebida.imagen} />
          </div>
          <div class="menu-text">
            <h3 class="h3m" data-toggle="modal" data-target="#reg-modal">
              <span class="textoSnack"> {bebida.nommbre_modal}</span>
              <strong>{bebida.precio} </strong>
            </h3>
            <p>{bebida.descripcion}</p>
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
                <h1>Menú Especial</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-box">
          <div className="container">
            <div className="row inner-menu-box">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Lo Mas Vendido</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Bebidas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Ensaladas</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content class="tab-content">
                      <Tab.Pane eventKey="first">
                        <div class="row" id="productos">
                          <div class="heading-title text-center">
                            <h2>Menú Especial</h2>
                            <p>
                              Bienvenido a la sección de lo más vendido
                              actualmente
                            </p>
                          </div>
                          {this.items_menu()}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div class="row">
                          <div class="heading-title text-center">
                            <h2>BEBIDAS</h2>
                            <p>Bienvenido a la sección de bebidas</p>
                          </div>
                          <div class="col-lg-7 col-md-12" id="bebidas">
                            {this.items_bebida()}
                          </div>
                          <div class="col-lg-5 d-none d-lg-block">
                            <img
                              src="images2/menu-beverage-img.jpg"
                              alt="Image"
                              className="img-bebida"
                            />
                            <a
                              class="nav-link"
                              download="Menu.jpg"
                              id="v-pills-descargapdf-tab"
                              href="images2/MenuDescarga.jpg"
                              title="Descarga Menu"
                            >
                              Descargar Menu
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div class="row">
                          <div class="heading-title text-center">
                            <h2>ENSALADAS</h2>
                            <p>Bienvenido a la sección de ensaladas</p>
                          </div>
                          <div class="col-lg-7 col-md-12">
                            <div class="menu-item">
                              <div class="menu-img">
                                <img src="images2/menu-snack.jpg" alt="Image" />
                              </div>
                              <div class="menu-text">
                                <h3
                                  class="h3m"
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                >
                                  <span class="textoSnack">
                                    Corn Tikki - Spicy fried Aloo
                                  </span>
                                  <strong>$15.00</strong>
                                </h3>
                                <p>
                                  Lorem ipsum dolor sit amet elit. Phasel nec
                                  preti facil
                                </p>
                              </div>
                            </div>
                            <div class="menu-item">
                              <div class="menu-img">
                                <img src="images2/menu-snack.jpg" alt="Image" />
                              </div>
                              <div class="menu-text">
                                <h3
                                  class="h3m"
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                >
                                  <span class="textoSnack">
                                    Corn Tikki - Spicy fried Aloo
                                  </span>
                                  <strong>$15.00</strong>
                                </h3>
                                <p>
                                  Lorem ipsum dolor sit amet elit. Phasel nec
                                  preti facil
                                </p>
                              </div>
                            </div>

                            <div class="menu-item">
                              <div class="menu-img">
                                <img src="images2/menu-snack.jpg" alt="Image" />
                              </div>
                              <div class="menu-text">
                                <h3
                                  class="h3m"
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                >
                                  <span class="textoSnack">
                                    Bread besan Toast
                                  </span>
                                  <strong>$15.00</strong>
                                </h3>
                                <p>
                                  Lorem ipsum dolor sit amet elit. Phasel nec
                                  preti facil
                                </p>
                              </div>
                            </div>

                            <div class="menu-item">
                              <div class="menu-img">
                                <img src="images2/menu-snack.jpg" alt="Image" />
                              </div>
                              <div class="menu-text">
                                <h3
                                  class="h3m"
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                >
                                  <span class="textoSnack">
                                    Tandoori Soya Chunks
                                  </span>
                                  <strong>$15.00</strong>
                                </h3>
                                <p>
                                  Lorem ipsum dolor sit amet elit. Phasel nec
                                  preti facil
                                </p>
                              </div>
                            </div>

                            <div class="menu-item">
                              <div class="menu-img">
                                <img src="images2/menu-snack.jpg" alt="Image" />
                              </div>
                              <div class="menu-text">
                                <h3
                                  class="h3m"
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                >
                                  <span class="textoSnack">
                                    Corn Tikki - Spicy fried Aloo
                                  </span>
                                  <strong>$15.00</strong>
                                </h3>
                                <p>
                                  Lorem ipsum dolor sit amet elit. Phasel nec
                                  preti facil
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 d-none d-lg-block">
                            <img
                              src="images2/menu-snack-img.jpg"
                              alt="Image"
                              className="img-bebida"
                            />
                            <a
                              class="nav-link"
                              download="Menu.jpg"
                              id="v-pills-descargapdf-tab"
                              href="images2/MenuDescarga.jpg"
                              title="Descarga Menu"
                            >
                              Descargar menu
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>

        <div className="qt-box qt-background">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <p className="lead ">
                  " Las mejores hamburguesas solo las encuentras cuando las
                  deleitas "
                </p>
                <span className="lead">Fast ood Delicious</span>
              </div>
            </div>
          </div>
        </div>

        <Comentarios />
        <Contact />
      </>
    );
  }
}

export default Menu;
