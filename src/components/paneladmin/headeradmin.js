import React, { Component } from "react";
import "../../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Headeradmin extends Component {
  constructor(props) {
    super(props);
  }

  cerrar_sesion() {
    localStorage.removeItem("admin_view");
    window.location.href = "/home";
  }

  render_boton_user() {
    if (localStorage.getItem("admin_view")) {
      return <Nav.Link onClick={this.cerrar_sesion}>Logout</Nav.Link>;
    } else {
      return <Nav.Link onClick={this.handleShow.bind(this)}>Login</Nav.Link>;
    }
  }

  render() {
    return (
      <header className="top-navbar">
        <Navbar
          expand="lg"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <Container className="container">
            <Navbar.Brand className="navbar-brand">
              <img src="../images/logo-index.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbar-toggler"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="collapse navbar-collapse"
            >
              <Nav variant="pills" as="ul" className="ml-auto">
                <Nav.Item as="li">
                  <LinkContainer to="/home">
                    <Nav.Link>Inicio</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/adm/platos">
                    <Nav.Link eventKey="link-1">PLatos</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/about">
                    <Nav.Link eventKey="link-2">Empleados</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/adm/servicios">
                    <Nav.Link>Servicios</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/reserva">
                    <Nav.Link>Reservas</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/carrito">
                    <Nav.Link>Pedidos</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">{this.render_boton_user()}</Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Headeradmin;
