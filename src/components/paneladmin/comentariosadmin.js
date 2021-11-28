import React, { Component } from "react";
import "../../App.css";
import "../admin.css";
import "../../pages/carrito.css";
import {
  getComentario,
  NewComentario,
  DeleteComentario,
  UpdateComentario,
} from "../../request/probar";
import alertify from "alertifyjs";
import "../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../node_modules/alertifyjs/build/css/themes/semantic.css";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";

class Comentariosadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      show: false,
      showedit: false,
      id: 0,
      nombre_cli: "",
      imagen_cli: "",
      profesion_cli: "",
      comentario: "",
      estado: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShowedit = this.handleShowedit.bind(this);
  }

  handleClose() {
    this.setState({
      show: false,
    });
    this.listarComentario();
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

  handleShowedit(
    id,
    nombre_cli,
    imagen_cli,
    profesion_cli,
    comentario,
    estado
  ) {
    this.setState({
      showedit: true,
      id: id,
      nombre_cli: nombre_cli,
      imagen_cli: imagen_cli,
      profesion_cli: profesion_cli,
      comentario: comentario,
      estado: estado,
    });
  }

  componentDidMount() {
    this.listarComentario();
  }

  render_table() {
    return this.state.items.map((comen, i) => {
      return (
        <>
          <tr>
            <th scope="row">{comen.id}</th>
            <td>{comen.nombre_cli}</td>
            <td>{comen.imagen_cli}</td>
            <td>{comen.profesion_cli}</td>
            <td>{comen.comentario}</td>
            <td>{comen.estado}</td>
            <td>
              <button
                class="btn-eliminar"
                id="btn-eliminar"
                onClick={() => {
                  this.eliminarComentario(comen.id);
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
                    comen.id,
                    comen.nombre_cli,
                    comen.imagen_cli,
                    comen.profesion_cli,
                    comen.comentario,
                    comen.estado
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

  listarComentario() {
    getComentario().then((jsonR) => {
      this.setState({
        items: jsonR,
      });
      console.log(jsonR);
    });
  }

  createComentario() {
    const data = {
      nombre_cli: this.state.nombre_cli,
      imagen_cli: this.state.imagen_cli,
      profesion_cli: this.state.profesion_cli,
      comentario: this.state.comentario,
      estado: this.state.estado,
    };

    NewComentario(data)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Se agrego Con exito comentario Con exito");
        this.handleClose();
      })
      .catch(console.log);
  }

  eliminarComentario(id) {
    DeleteComentario(id)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.error("Se Elimino Con exito");
        this.listarComentario();
      })
      .catch(console.log);
  }

  updateComentario() {
    const data = {
      id: this.state.id,
      nombre_cli: this.state.nombre_cli,
      imagen_cli: this.state.imagen_cli,
      profesion_cli: this.state.profesion_cli,
      comentario: this.state.comentario,
      estado: this.state.estado,
    };

    UpdateComentario(data)
      .then((data) => {
        console.log(data);
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Se Actualizo con exito");
        this.handleCloseedit();
        this.listarComentario();
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
                <h1>No tiene Acceso A Editar Comentarios</h1>
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
                  <h1>CRUD Comentarios</h1>
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
                  {/*     <button
                    type="submit"
                    onClick={this.handleShow.bind(this)}
                    className="comprar"
                  >
                    Nuevo Plato
                  </button> */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre Cliente</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Profesion</th>
                        <th scope="col">Comentario</th>
                        <th scope="col">Estado</th>
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
              <Modal.Title>Nuevo Comentario</Modal.Title>
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
                      this.createComentario();
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
                    name="nombre_cli"
                    required
                    defaultValue={this.state.nombre_cli}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Nombre
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="imagen"
                    aria-label="imagen"
                    aria-describedby="basic-addon1"
                    name="imagen_cli"
                    required
                    defaultValue={this.state.imagen_cli}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Imagen
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="profesion"
                    aria-label="profesion"
                    aria-describedby="basic-addon1"
                    name="profesion_cli"
                    required
                    defaultValue={this.state.profesion_cli}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Profesion
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Comentario"
                    aria-label="Comentario"
                    aria-describedby="basic-addon1"
                    name="comentario"
                    required
                    defaultValue={this.state.comentario}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Comentario
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>

                <InputGroup className="mb-3">
                  {/*    <FormControl
                    placeholder="estado"
                    aria-label="estado"
                    aria-describedby="basic-addon1"
                    name="estado"
                    required
                    defaultValue={this.state.estado}
                    onChange={this.handleChange}
                  /> */}

                  <Form.Select
                    aria-label="estado"
                    name="estado"
                    onChange={this.handleChange}
                  >
                    <option>{this.state.estado}</option>
                    <option
                      name="estado"
                      value="pendiente"
                      onChange={this.handleChange}
                    >
                      Pendiente
                    </option>
                    <option
                      name="estado"
                      value="Aprobado"
                      onChange={this.handleChange}
                    >
                      Aprobado
                    </option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Por favor Ingresar Comentario
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Listo</Form.Control.Feedback>
                </InputGroup>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.updateComentario();
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

export default Comentariosadmin;
