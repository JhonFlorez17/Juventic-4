import React, { Component } from "react";
import "../App.css";
import alertify from "alertifyjs";
import "../../node_modules/alertifyjs/build/css/alertify.css";
import "../../node_modules/alertifyjs/build/css/themes/semantic.css";
import emailjs from "emailjs-com";
let articulos = [];

class Confirm_cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: "",
      items_cart: [],
    };
    this.sendEmailjs = this.sendEmailjs.bind(this);
  }

  componentDidMount() {
    this.setState({
      nombre: localStorage.getItem("nombreCliente"),
      correo: localStorage.getItem("correoCliente"),
      items_cart: JSON.parse(localStorage.getItem("carrito")),
    });
  }

  componentWillUnmount() {
    articulos = [];
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
            <td>{items.title}</td>
            <td>{items.precio}</td>
            <td>{items.cantidad}</td>
            <td>{items.cantidad * items.precio}</td>
          </tr>
        </>
      );
    });
  }

  sendEmailjs(e) {
    const nCantidad = Object.values(this.state.items_cart).reduce(
      (acc, { cantidad }) => parseInt(acc) + parseInt(cantidad),
      0
    );
    const nPrecio = Object.values(this.state.items_cart).reduce(
      (acc, { cantidad, precio }) => acc + cantidad * precio,
      0
    );

    e.preventDefault();
    let valores = {
      from_name: this.state.nombre,
      to_name: this.state.nombre,
      to_email: this.state.correo,
      message:
        "Nombre: " +
        this.state.nombre +
        " Cantidad de articulos: " +
        nCantidad +
        "  Valor total: " +
        nPrecio +
        "  Articulos: " +
        articulos.map((items) => {
          return "item: " + items.title + "  precio: " + items.precio + "\n";
        }),
    };
    emailjs
      .send(
        "service_ndnj4uq",
        "template_zn1jifa",
        valores,
        "user_SLROp8OMOhXacRTRrx5KS"
      )
      .then(
        (result) => {
          alertify.set("notifier", "position", "bottom-right");
          alertify.success("Pedido realizado con exito");
          localStorage.removeItem("nombreCliente");
          localStorage.removeItem("correoCliente");
          localStorage.removeItem("carrito");

          setTimeout(function () {
            window.location.href = "/home";
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <>
        <div className="all-page-title page-breadcrumb-two">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-12">
                <h1>Confirme su reserva</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-box">
          <div className="container">
            <div className="row">
              <div className="heading-title text-center">
                <h3>Revise los datos suministrados y confirme su compra</h3>
              </div>
            </div>
            <div className="row">
              <div className="heading-title text-center">
                <h1>Datos personales</h1>
                <table className="table table-success table-striped">
                  <thead>
                    <tr>
                      <td>Nombre</td>
                      <td>Correo</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.nombre}</td>
                      <td>{this.state.correo}</td>
                    </tr>
                  </tbody>
                </table>
                <canvas id="canvas" />
                <h1>Carrito de compras</h1>
                <table
                  className="table table-success table-striped"
                  id="carrito-correo"
                >
                  <thead>
                    <tr>
                      <td>Producto</td>
                      <td>Precio</td>
                      <td>Cantidad</td>
                      <td>Total</td>
                    </tr>
                  </thead>
                  <tbody id="datosproductos">{this.render_table()}</tbody>
                </table>
                <div className="submit-button text-center">
                  <button
                    className="btn btn-common"
                    id="btn-reserva"
                    onClick={this.sendEmailjs}
                  >
                    CONFIRMAR COMPRA
                  </button>

                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Confirm_cart;
