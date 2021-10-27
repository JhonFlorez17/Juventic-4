import React, { Component } from "react";
import "../App.css";
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <>
        <div className="all-page-title page-breadcrumb">
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
              <div className="col-3">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active todo"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Lo más vendido
                  </a>
                  <a className="nav-link bebida" href="menu.html" role="tab">
                    Menú Completo
                  </a>
                </div>
              </div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="row">
                      <div className="heading-title text-center">
                        <h2>Menú Especial</h2>
                        <p>
                          Bienvenido a la sección de lo más vendido actualmente
                        </p>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-01.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Bebida especial 1
                            </h5>
                            <br />
                            <p>Bebida con limon y algunas yerbas camperas.</p>
                            <h5> $8.000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-02.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Bebida especial 2
                            </h5>
                            <br />
                            <p>Bebida con naranja y algunas yerbas camperas.</p>
                            <h5> $9.000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-03.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Bebida especial 3
                            </h5>
                            <br />
                            <p>Bebida con vodka y algunas yerbas camperas.</p>
                            <h5> $10.000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-04.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Ensalada especial 1
                            </h5>
                            <br />
                            <p>Ensalada con aguacte y vegetales camperos</p>
                            <h5> $15.000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-05.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Ensalada especial 2
                            </h5>
                            <br />
                            <p>
                              Ensalada con huevos fritos y vegetales camperos
                            </p>
                            <h5> $15.000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-06.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Ensalada especial 3
                            </h5>
                            <br />
                            <p>
                              Ensalada con champiñons, miel y vegetales camperos
                            </p>
                            <h5> $20000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-07.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Hamburguesa especial 1
                            </h5>
                            <br />
                            <p>Hamburguesa extra L con queso especial</p>
                            <h5> $25000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-08.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Hot Dog especial 1
                            </h5>
                            <br />
                            <p>Hot Dog extra L con queso especial y ensalada</p>
                            <h5> $20000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-09.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Pizza especial 1
                            </h5>
                            <br />
                            <p>Pizza de carne-queso especial</p>
                            <h5> $20000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-10.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Hamburguesa especial 2
                            </h5>
                            <br />
                            <p>Hamburguesa extra con queso especial y papas</p>
                            <h5> $27000 COP</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="images2/img-12.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h5
                              className="miboton"
                              data-bs-toggle="modal"
                              data-bs-target="#reg-modal"
                              onclick="ref_carrito()"
                            >
                              Pizza especial 2
                            </h5>
                            <br />
                            <p>Pizza de carne-queso especial</p>
                            <h5> $20000 COP</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
