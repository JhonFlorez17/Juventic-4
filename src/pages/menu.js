import React, { Component } from "react";
import "../App.css";
import "./stylemenu.css";
import "./modalcart.css";
import { Tab, Nav, Row, Col, Modal, Button } from "react-bootstrap";
import Comentarios from "../components/comentarios";
import Contact from "../components/contact";
import { getMenu, getBebidas, getEnsaladas } from "../request/probar";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { numero_carrito } from "../js/carrito";
import {
  aumentar,
  disminuir,
  enviar_carrito,
  carga_local,
  input_modal,
  vaciar_json,
} from "../js/carrito";
import Numero_carrito from "../components/number_carrito";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_pop: [],
      bebidas: [],
      ensaladas: [],
      show: false,
      infomodal: {},
    };
    this.load_menu();
    this.load_bebidas();
    this.load_ensaladas();
    this.handleClose();
    this.handleShow();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    vaciar_json();
    carga_local();
  }

  componentDidUpdate() {
    input_modal(this.state.infomodal.id);
    numero_carrito();
  }

  handleClose() {
    this.setState({
      show: false,
      infomodal: {},
    });
  }

  handleShow(items) {
    this.setState({
      show: true,
      infomodal: items,
    });
  }

  load_menu() {
    getMenu().then((jsonR) => {
      this.setState({
        menu_pop: jsonR,
      });
    });
  }

  load_bebidas() {
    getBebidas().then((jsonR) => {
      this.setState({
        bebidas: jsonR,
      });
    });
  }

  load_ensaladas() {
    getEnsaladas().then((jsonR) => {
      this.setState({
        ensaladas: jsonR,
      });
    });
  }

  items_menu() {
    return this.state.menu_pop.map((items, i) => {
      return (
        <>
          <div key={i} className="col-lg-4 col-md-6 special-grid drinks">
            <div className="gallery-single fix">
              <img className="img-fluid" alt="Image" src={items.imagen} />
              <div className="why-text">
                <Button
                  className="miboton"
                  style={{ width: "230px" }}
                  onClick={() => {
                    this.handleShow(items);
                  }}
                >
                  {items.nommbre_modal}
                </Button>
                <p> {items.descripcion} </p>
                <h5 id="precio"> $ {items.precio} COP</h5>
              </div>
            </div>
          </div>
        </>
      );
    });
  }

  items_bebida() {
    return this.state.bebidas.map((bebida, i) => {
      return (
        <div className="menu-item" key={i}>
          <div className="menu-img">
            <img alt="Image" src={bebida.imagen} />
          </div>
          <div className="menu-text">
            <h3 className="h3m" data-toggle="modal" data-target="#reg-modal">
              <span className="textoSnack"> {bebida.nommbre_modal}</span>
              <strong>$ {bebida.precio} </strong>
            </h3>
            <p>{bebida.descripcion}</p>
          </div>
        </div>
      );
    });
  }

  items_ensaladas() {
    return this.state.ensaladas.map((ensalada) => {
      return (
        <div className="menu-item">
          <div className="menu-img">
            <img src={ensalada.imagen} alt="Image" />
          </div>
          <div className="menu-text">
            <h3
              className="h3m"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              <span className="textoSnack">{ensalada.nommbre_modal}</span>
              <strong>${ensalada.precio} </strong>
            </h3>
            <p>{ensalada.descripcion}</p>
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
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="first">
                        <div className="row" id="productos">
                          <div className="heading-title text-center">
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
                        <div className="row">
                          <div className="heading-title text-center">
                            <h2>BEBIDAS</h2>
                            <p>Bienvenido a la sección de bebidas</p>
                          </div>
                          <div className="col-lg-7 col-md-12" id="bebidas">
                            {this.items_bebida()}
                          </div>
                          <div className="col-lg-5 d-none d-lg-block">
                            <img
                              src="images2/menu-beverage-img.jpg"
                              alt="Image"
                              className="img-bebida"
                            />
                            <a
                              className="nav-link"
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
                        <div className="row">
                          <div className="heading-title text-center">
                            <h2>ENSALADAS</h2>
                            <p>Bienvenido a la sección de ensaladas</p>
                          </div>
                          <div className="col-lg-7 col-md-12">
                            {this.items_ensaladas()}
                          </div>
                          <div className="col-lg-5 d-none d-lg-block">
                            <img
                              src="images2/menu-snack-img.jpg"
                              alt="Image"
                              className="img-bebida"
                            />
                            <a
                              className="nav-link"
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
        <Modal
          show={this.state.show}
          onHide={this.handleClose.bind(this)}
          centered
        >
          <Modal.Header id="modal-header">
            <Modal.Title id="title-h5">
              {this.state.infomodal.nommbre_modal}
            </Modal.Title>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={this.handleClose.bind(this)}
            >
              X
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="descripcion">
              <p> {this.state.infomodal.descripcion}</p>
            </div>
            <div className="description" id="img-modal">
              <img
                src={this.state.infomodal.imagen}
                className="logoCarritomodal"
                alt=""
                srcset=""
              ></img>
            </div>
            <hr />
            <span className="cantidadSpan">Cantidad</span>
            <div className="btn-carrito">
              <button
                className="btn-disminuir"
                id="btn-disminuir"
                onClick={() => {
                  disminuir();
                }}
              >
                -
              </button>
              <input
                type="number"
                className="cantidad"
                id="cantidad"
                value="1"
              />
              <button
                className="btn-aumentar"
                id="btn-aumentar"
                onClick={() => {
                  aumentar();
                }}
              >
                +
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="modalb"
              onClick={() => {
                this.handleClose();
                enviar_carrito(this.state.infomodal);
              }}
            >
              Enviar Al Carrito
            </Button>
          </Modal.Footer>
        </Modal>
        <Comentarios />
        <Contact />
        <Numero_carrito />
      </>
    );
  }
}

export default Menu;
