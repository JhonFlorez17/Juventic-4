import React, { Component } from "react";
import "../App.css";
let articulos = [];
let carrito_render = {};

class Confirm_cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: "",
      items_cart: [],
    };
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
                  <button className="btn btn-common" id="btn-reserva">
                    {" "}
                    CONFIRMAR COMPRA{" "}
                  </button>
                  <a href="carrito.html">
                    <button className="btn btn-common" id="btnback">
                      {" "}
                      VOLVER{" "}
                    </button>
                  </a>
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
