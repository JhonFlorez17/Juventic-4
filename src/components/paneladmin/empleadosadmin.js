import React, { Component } from "react";
import "../../App.css";
import "../admin.css";
import "../../pages/carrito.css";
import {
  getEmpleado,
  NewEmpleado,
  DeleteEmpleado,
  UpdateEmpleado,
} from "../../request/probar";
import alertify from "alertifyjs";
import "../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../node_modules/alertifyjs/build/css/themes/semantic.css";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";

class Empleadosadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      show: false,
      showedit: false,
      id: 0,
      nombre: "",
      cargo: "",
      imagen: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShowedit = this.handleShowedit.bind(this);
  }

  handleClose() {
    this.setState({
      show: false,
    });
    this.listarEmpleado();
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

  handleShowedit(id, nombre, cargo, imagen) {
    this.setState({
      showedit: true,
      id: id,
      nombre: nombre,
      cargo: cargo,
      imagen: imagen,
    });
  }

  componentDidMount() {
    this.listarEmpleado();
  }

  render_table() {
    return this.state.items.map((emple, i) => {
      return (
        <>
          <tr>
            <th scope="row">{emple.id}</th>
            <td>{emple.nombre}</td>
            <td>{emple.cargo}</td>
            <td>{emple.imagen}</td>
            <td>
              <button
                class="btn-eliminar"
                id="btn-eliminar"
                onClick={() => {
                  this.eliminarEmpleado(emple.id);
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
                    emple.id,
                    emple.nombre,
                    emple.cargo,
                    emple.imagen
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

  listarEmpleado() {
    getEmpleado().then((jsonR) => {
      this.setState({
        items: jsonR,
      });
      console.log(jsonR);
    });
  }

  createEmpleado() {
    const data = {
      nombre: this.state.nombre,
      cargo: this.state.cargo,
      imagen: this.state.imagen,
    };

    NewEmpleado(data)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Se agrego Empleado Con exito");
        this.handleClose();
      })
      .catch(console.log);
  }

  eliminarEmpleado(id) {
    DeleteEmpleado(id)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.error("Se Elimino Con exito");
        this.listarEmpleado();
      })
      .catch(console.log);
  }

  updateEmpleado() {
    const data = {
      id: this.state.id,
      nombre: this.state.nombre,
      cargo: this.state.cargo,
      imagen: this.state.imagen,
    };

    UpdateEmpleado(data)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Se Actualizo con exito");
        this.handleCloseedit();
        this.listarEmpleado();
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
                <h1>No tiene Acceso A Editar Empleados</h1>
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
                  <h1>CRUD Empleados</h1>
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
                    Nuevo Empleado
                  </button>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cargo</th>
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
              <Modal.Title>Nuevo Empleado</Modal.Title>
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
                    placeholder="cargo"
                    aria-label="cargo"
                    aria-describedby="basic-addon1"
                    name="cargo"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Cargo
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
                    Por favor Ingresar imagen
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.createEmpleado();
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
                    placeholder="cargo"
                    aria-label="cargo"
                    aria-describedby="basic-addon1"
                    name="cargo"
                    required
                    defaultValue={this.state.cargo}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Cargo
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
                      this.updateEmpleado();
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

export default Empleadosadmin;
