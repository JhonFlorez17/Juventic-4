import React, { Component } from "react";
import alertify from "alertifyjs";
import "../App.css";
import "./carrito.css";
import "../../node_modules/alertifyjs/build/css/alertify.css";
import "../../node_modules/alertifyjs/build/css/themes/semantic.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

let articulos = [];
let carrito_render = {};
class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items_cart: [],
      nombreCliente: "",
      correoCliente: "",
    };

    this.update_input = this.update_input.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    carrito_render = JSON.parse(localStorage.getItem("carrito"));
    this.setState({
      items_cart: JSON.parse(localStorage.getItem("carrito")),
    });
  }

  componentWillUnmount() {
    articulos = [];
    carrito_render = {};
  }

  update_input(event, id_up) {
    carrito_render[id_up].cantidad = parseInt(event.target.value);
    localStorage.setItem("carrito", JSON.stringify(carrito_render));
    this.setState({
      items_cart: JSON.parse(localStorage.getItem("carrito")),
    });
    alertify.set("notifier", "position", "bottom-right");
    alertify.success("Se Actualizo Cantidad Con exito");
  }

  render_table() {
    articulos = [];
    if (this.state.items_cart) {
      Object.values(this.state.items_cart).forEach((producto) => {
        articulos.push(producto);
      });
    }

    return articulos.map((items) => {
      return (
        <>
          <tr>
            <th scope="row">{items.id}</th>
            <td>{items.title}</td>
            <td>
              $ <strong>{items.precio} </strong>
            </td>
            <td>
              <input
                type="number"
                id="cantidadTabla"
                name="cantidadTabla"
                class="cantidadTabla"
                Value={items.cantidad}
                onChange={(e) => {
                  this.update_input(e, items.id);
                }}
              />
            </td>
            <td>
              $ <span>{items.cantidad * items.precio} </span>
            </td>
            <td>
              <button
                class="btn-eliminar"
                id="btn-eliminar"
                onClick={() => {
                  this.eliminar_pro(items.id);
                }}
              >
                <img
                  src="./images/eliminar.svg"
                  class="eliminar-table"
                  alt="Eliminar"
                />
              </button>
            </td>
          </tr>
        </>
      );
    });
  }

  render_footer() {
    if (articulos.length >= 1) {
      const nCantidad = Object.values(this.state.items_cart).reduce(
        (acc, { cantidad }) => parseInt(acc) + parseInt(cantidad),
        0
      );
      const nPrecio = Object.values(this.state.items_cart).reduce(
        (acc, { cantidad, precio }) => acc + cantidad * precio,
        0
      );

      return (
        <tr id="footer">
          <th scope="row" colSpan={2}>
            Total Productos
          </th>
          <td></td>
          <td>{nCantidad}</td>
          <td className="font-weight-bold">
            $ <span>{nPrecio}</span>
          </td>
        </tr>
      );
    } else {
      return (
        <tr id="footer">
          <th scope="row" colSpan={5}>
            Carrito vacio !! Comienza a comprar
          </th>
        </tr>
      );
    }
  }

  eliminar_pro(id) {
    console.log(id);
    delete carrito_render[id];
    localStorage.setItem("carrito", JSON.stringify(carrito_render));
    this.setState({
      items_cart: JSON.parse(localStorage.getItem("carrito")),
    });
    alertify.set("notifier", "position", "bottom-right");
    alertify.error("Se Elimino producto del carrito");
  }

  vaciar_carrito() {
    localStorage.removeItem("carrito");
    alertify.set("notifier", "position", "bottom-right");
    alertify.error("Se Elimino el carrito");
    this.setState({
      items_cart: [],
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name + "" + e.target.value);
  }

  datos() {
    localStorage.setItem("nombreCliente", this.state.nombreCliente);
    localStorage.setItem("correoCliente", this.state.correoCliente);
  }

  render() {
    return (
      <>
        <div className="all-page-title page-breadcrumb-two">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-12">
                <h1>Carrito</h1>
              </div>
            </div>
          </div>
        </div>
        <form id="formulario">
          <div className="contact-box">
            <div className="container">
              <div className="row mt-3">
                <div className="col">
                  <h2 className="d-flex justify-content-center mb-3">
                    Finaliza tu compra
                  </h2>

                  <div className="form-group row">
                    <label
                      htmlFor="cliente"
                      className="col-12 col-md-2 col-form-label h2"
                    >
                      Nombre completo :
                    </label>
                    <div className="col-12 col-md-10">
                      <input
                        type="text"
                        onblur="clickNombre(this)"
                        className="form-control"
                        id="nombreCliente"
                        name="nombreCliente"
                        required
                        placeholder="Ingresa tu nombre completo"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="email"
                      className="col-12 col-md-2 col-form-label h2"
                    >
                      Correo :
                    </label>
                    <div className="col-12 col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        onblur="clickCorreo(this)"
                        id="correoCliente"
                        name="correoCliente"
                        required
                        placeholder="Ingresa tu correo"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row inner-menu-box">
                <h4 id="title-table">Carrito de compras</h4>
                <div
                  className="table-responsive"
                  style={{ padding: "1em", marginBottom: "2em" }}
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col">Accion</th>
                      </tr>
                    </thead>
                    <tbody id="items">{this.render_table()}</tbody>
                    <tfoot>{this.render_footer()}</tfoot>
                  </table>
                </div>
                <div className="botonesTabla">
                  <button
                    type="submit"
                    className="vaciarCarrito"
                    id="vaciar-Carrito"
                    onClick={() => {
                      this.vaciar_carrito();
                    }}
                  >
                    Vaciar Carrito
                  </button>

                  <LinkContainer to="/menu" className="seguirComprando">
                    <Nav.Link className="seguirComprando">
                      Seguir Comprando
                    </Nav.Link>
                  </LinkContainer>

                  <Link to="/confirm">
                    <button
                      type="submit"
                      onClick={() => {
                        this.datos();
                      }}
                      className="comprar"
                    >
                      Comprar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Carrito;
