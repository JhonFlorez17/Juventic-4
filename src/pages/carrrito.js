import React, { Component } from "react";
import "../App.css";
import "./carrito.css";
/* import { render_carrito } from "../js/localstorage"; */

let carrito_render = {};

class Carrito extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    carrito_render = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito_render);
  }

  render_table() {
    return Object.values(carrito_render).forEach((items) => {
      return (
        <tr>
          <th scope="row">{items.id}</th>
          <td>{items.title}</td>
          <td>
            $ <strong>{items.precio} </strong>
          </td>
          <td style="width: 200px;">
            <input
              type="number"
              id="cantidadTabla"
              name="cantidadTabla"
              class="cantidadTabla"
              min="1"
              value={items.cantidad}
            />
          </td>
          <td>
            $ <span></span>
          </td>
          <td>
            <button href="" class="btn-eliminar" id="btn-eliminar">
              <img
                src="./images/eliminar.svg"
                class="eliminar-table"
                alt="Eliminar"
              />
            </button>
          </td>
        </tr>
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
                <h1>Carrito</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="container">
            <div className="row mt-3">
              <div className="col">
                <h2 className="d-flex justify-content-center mb-3">
                  Finaliza tu compra
                </h2>
                <form id="formulario">
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
                        placeholder="Ingresa tu nombre completo"
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
                        placeholder="Ingresa tu correo"
                      />
                    </div>
                  </div>
                </form>
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
                  <tfoot>
                    <tr id="footer">
                      <th scope="row" colSpan={5}>
                        Carrito vacío - comience a comprar!
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="botonesTabla">
                <button
                  type="submit"
                  className="vaciarCarrito"
                  id="vaciar-Carrito"
                  onclick="vaciar_carrito()"
                >
                  Vaciar Carrito
                </button>
                <a href="menu.html" className="seguirComprando">
                  Seguir Comprando
                </a>
                <a href="checkout.html" className="comprar">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Carrito;
