import React, { Component } from "react";
import "../App.css";
import {
  Navbar,
  Container,
  Nav,
  Modal,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { registro, login } from "../js/login";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showReg: false,
      usuarioLog: "",
      contraLog: "",
      usuarioReg: "",
      contraReg: "",
      contraCReg: "",
      validated: false,
      validatedReg: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitReg = this.handleSubmitReg.bind(this);
  }

  componentDidMount() {
    this.setState({
      validated: false,
    });
  }

  handleClose() {
    this.setState({
      show: false,
      infomodal: {},
    });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleCloseReg() {
    this.setState({
      showReg: false,
    });
  }

  handleShowReg() {
    this.setState({
      showReg: true,
      show: false,
    });
  }

  cerrar_sesion() {
    localStorage.removeItem("admin_view");
    window.location.href = "/home";
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name + "" + e.target.value);
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      login(this.state.usuarioLog, this.state.contraLog);
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({
      validated: true,
    });
  }

  handleSubmitReg(event) {
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      registro(
        this.state.usuarioReg,
        this.state.contraReg,
        this.state.contraCReg
      );
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({
      validatedReg: true,
    });
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
              <img src="images/logo-index.png" alt="" />
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
                  <LinkContainer to="/menu">
                    <Nav.Link eventKey="link-1">Menu</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/about">
                    <Nav.Link eventKey="link-2">Quienes Somos</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/servicios">
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
                    <Nav.Link>Carrito</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">{this.render_boton_user()}</Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Modal
          show={this.state.show}
          onHide={this.handleClose.bind(this)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
            >
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Usuario"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="usuarioLog"
                  required
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor Ingresar usuario
                </Form.Control.Feedback>
                <Form.Control.Feedback>Listo</Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Contraseña"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="contraLog"
                  required
                  type="password"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor Ingresar contraseña
                </Form.Control.Feedback>
                <Form.Control.Feedback>Listo</Form.Control.Feedback>
              </InputGroup>
              <Modal.Footer>
                <Button variant="secondary" type="submit">
                  Iniciar Sesion
                </Button>
                <Button
                  variant="primary"
                  onClick={this.handleShowReg.bind(this)}
                >
                  Registro
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showReg}
          onHide={this.handleCloseReg.bind(this)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={this.state.validatedReg}
              onSubmit={this.handleSubmitReg}
            >
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Usuario"
                  aria-label="usuarioReg"
                  name="usuarioReg"
                  required
                  onChange={this.handleChange}
                  aria-describedby="basic-addon1"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor Ingresar usuario
                </Form.Control.Feedback>
                <Form.Control.Feedback>Listo</Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Contraseña"
                  aria-label="contraReg"
                  aria-describedby="basic-addon1"
                  name="contraReg"
                  required
                  type="password"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor Ingresar Contraseña
                </Form.Control.Feedback>
                <Form.Control.Feedback>Listo</Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Confirmar contraseña"
                  aria-label="contraCReg"
                  aria-describedby="basic-addon1"
                  name="contraCReg"
                  type="password"
                  required
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor Confirmar Contraseña
                </Form.Control.Feedback>
                <Form.Control.Feedback>Listo</Form.Control.Feedback>
              </InputGroup>
              <Modal.Footer>
                <Button variant="secondary" type="submit">
                  Registrarme
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </header>
    );
  }
}

export default Header;
