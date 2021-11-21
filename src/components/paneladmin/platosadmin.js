import React, { Component } from "react";
import "../../App.css";
import "../admin.css";
import "../../pages/carrito.css";
import {
  getPlatos,
  NewPlato,
  DeletePlato,
  UpdatePlato,
} from "../../request/probar";
import alertify from "alertifyjs";
import "../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../node_modules/alertifyjs/build/css/themes/semantic.css";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";

class Platosadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      show: false,
      showedit: false,
      id: 0,
      nombre: "",
      descripcion: "",
      precio: 0,
      imagen: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShowedit = this.handleShowedit.bind(this);
  }

  handleClose() {
    this.setState({
      show: false,
    });
    this.listarPlato();
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleCloseedit() {
    this.setState({
      showedit: false,
      infomodal: {},
    });
  }

  handleShowedit(id, nombre, descripcion, precio, imagen) {
    this.setState({
      showedit: true,
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen,
    });
  }

  componentDidMount() {
    this.listarPlato();
  }

  render_table() {
    return this.state.items.map((pla, i) => {
      return (
        <>
          <tr>
            <th scope="row">{pla.id}</th>
            <td>{pla.nombre}</td>
            <td>{pla.descripcion}</td>
            <td>{pla.precio}</td>
            <td>{pla.imagen}</td>
            <td>
              <button
                class="btn-eliminar"
                id="btn-eliminar"
                onClick={() => {
                  this.eliminarPlato(pla.id);
                }}
              >
                <img
                  src="../images/eliminar.svg"
                  class="eliminar-table"
                  alt="Editar"
                />
              </button>
              <button
                class="btn-eliminar"
                id="btn-eliminar"
                onClick={() => {
                  this.handleShowedit(
                    pla.id,
                    pla.nombre,
                    pla.descripcion,
                    pla.precio,
                    pla.imagen
                  );
                }}
              >
                <img
                  src="../images/editar.svg"
                  class="eliminar-table"
                  alt="Editar"
                />
              </button>
            </td>
          </tr>
        </>
      );
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name + "" + e.target.value);
  }

  listarPlato() {
    getPlatos().then((jsonR) => {
      this.setState({
        items: jsonR,
      });
      console.log(jsonR);
    });
  }

  createPlato() {
    const data = {
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      precio: this.state.precio,
      imagen: this.state.imagen,
    };

    NewPlato(data)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Se agrego Plato Con exito");
        this.handleClose();
      })
      .catch(console.log);
  }

  eliminarPlato(id) {
    DeletePlato(id)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.error("Se Elimino Con exito");
        this.listarPlato();
      })
      .catch(console.log);
  }

  updatePlato() {
    const data = {
      id: this.state.id,
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      precio: this.state.precio,
      imagen: this.state.imagen,
    };

    UpdatePlato(data)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Se Actualizo con exito");
        this.handleCloseedit();
        this.listarPlato();
      })
      .catch(console.log);
  }

  render() {
    if (
      localStorage.getItem("rol") == "user" ||
      localStorage.getItem("rol") === null
    ) {
      return (
        <div class="all-page-title page-breadcrumb-two">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-12">
                <h1>No tiene Acceso A Editar platos</h1>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div class="all-page-title page-breadcrumb-two">
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-12">
                  <h1>CRUD Platos</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <div className="container">
              <div className="row inner-menu-box">
                <div
                  className="table-responsive"
                  style={{ padding: "1em", marginBottom: "2em" }}
                >
                  <button
                    type="submit"
                    onClick={this.handleShow.bind(this)}
                    className="comprar"
                  >
                    Nuevo Plato
                  </button>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Accion</th>
                      </tr>
                    </thead>
                    <tbody id="items">{this.render_table()}</tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Modal
            show={this.state.show}
            onHide={this.handleClose.bind(this)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Nuevo Plato</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
              >
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="nombre"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="nombre"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Nombre
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="descripcion"
                    aria-label="descripcion"
                    aria-describedby="basic-addon1"
                    name="descripcion"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar descripcion
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="precio"
                    aria-label="precio"
                    aria-describedby="basic-addon1"
                    name="precio"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Precio
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="imagen"
                    aria-label="imagen"
                    aria-describedby="basic-addon1"
                    name="imagen"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Imagen
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.createPlato();
                    }}
                  >
                    Agregar
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={this.state.showedit}
            onHide={this.handleCloseedit.bind(this)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Editar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
              >
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Id"
                    aria-label="Id"
                    aria-describedby="basic-addon1"
                    name="id"
                    required
                    readOnly="disabled"
                    defaultValue={this.state.id}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Nombre
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="nombre"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="nombre"
                    required
                    defaultValue={this.state.nombre}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Nombre
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="descripcion"
                    aria-label="descripcion"
                    aria-describedby="basic-addon1"
                    name="descripcion"
                    required
                    defaultValue={this.state.descripcion}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Descripcion
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="precio"
                    aria-label="precio"
                    aria-describedby="basic-addon1"
                    name="precio"
                    required
                    defaultValue={this.state.precio}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Precio
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="imagen"
                    aria-label="imagen"
                    aria-describedby="basic-addon1"
                    name="imagen"
                    required
                    defaultValue={this.state.imagen}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Imagen
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.updatePlato();
                    }}
                  >
                    Editar
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }
}

export default Platosadmin;
