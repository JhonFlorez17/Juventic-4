import React, { Component } from "react";
import "../../App.css";
import "../admin.css";
import "../../pages/carrito.css";
import {
  getServicios,
  NewServicio,
  DeleteServicio,
  UpdateServicio,
} from "../../request/probar";
import alertify from "alertifyjs";
import "../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../node_modules/alertifyjs/build/css/themes/semantic.css";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";

class Serviciosadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      show: false,
      showedit: false,
      id: 0,
      nombre: "",
      descripcion: "",
      imagen: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShowedit = this.handleShowedit.bind(this);
  }

  handleClose() {
    this.setState({
      show: false,
    });
    this.listarServicio();
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

  handleShowedit(id, nombre, descripcion, imagen) {
    this.setState({
      showedit: true,
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      imagen: imagen,
    });
  }

  componentDidMount() {
    this.listarServicio();
  }

  render_table() {
    return this.state.items.map((servi, i) => {
      return (
        <>
          <tr>
            <th scope="row">{servi.id}</th>
            <td>{servi.nombre}</td>
            <td>{servi.descripcion}</td>
            <td>{servi.imagen}</td>
            <td>
              <button
                class="btn-eliminar"
                id="btn-eliminar"
                onClick={() => {
                  this.eliminarServicio(servi.id);
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
                    servi.id,
                    servi.nombre,
                    servi.descripcion,
                    servi.imagen
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

  listarServicio() {
    getServicios().then((jsonR) => {
      this.setState({
        items: jsonR,
      });
      console.log(jsonR);
    });
  }

  createServicio() {
    const data = {
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      imagen: this.state.imagen,
    };

    NewServicio(data)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Se agrego Servicio Con exito");
        this.handleClose();
      })
      .catch(console.log);
  }

  eliminarServicio(id) {
    DeleteServicio(id)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.error("Se Elimino Con exito");
        this.listarServicio();
      })
      .catch(console.log);
  }

  updateServicio() {
    const data = {
      id: this.state.id,
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      imagen: this.state.imagen,
    };

    UpdateServicio(data)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Se Actualizo con exito");
        this.handleCloseedit();
        this.listarServicio();
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
                <h1>No tiene Acceso A Editar Servicios</h1>
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
                  <h1>CRUD Servicios</h1>
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
                    Nuevo Servicio
                  </button>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
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
              <Modal.Title>Nuevo Servicio</Modal.Title>
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
                      this.createServicio();
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
                      this.updateServicio();
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

export default Serviciosadmin;
