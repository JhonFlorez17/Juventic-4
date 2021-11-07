import React, { Component } from "react";
import "../App.css";
import Number_carrito from "../components/number_carrito";

import { Link } from "react-router-dom";

class Reservas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evento: "",
      fecha: "",
      hora: "",
      numPersonas: "",
      nombreCliente: "",
      correoCliente: "",
      celularCliente: "",
      solicitudCliente: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name + "" + e.target.value);
  }

  handleSubmit(e) {
    console.log(this.state.evento);
    localStorage.setItem("evento", this.state.evento);
  }

  datos() {
    localStorage.setItem("evento", this.state.evento);
    localStorage.setItem("fecha", this.state.fecha);
    localStorage.setItem("hora", this.state.hora);
    localStorage.setItem("numPersonas", this.state.numPersonas);
    localStorage.setItem("solicitudCliente", this.state.solicitudCliente);

    localStorage.setItem("nombreCliente", this.state.nombreCliente);
    localStorage.setItem("celularCliente", this.state.celularCliente);
    localStorage.setItem("correoCliente", this.state.correoCliente);
  }

  render() {
    return (
      <>
        <div className="all-page-title page-breadcrumb-two">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-12">
                <h1>Reservas</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>Reserva nuestros servicios</h2>
                  <p>
                    ¡Reserva cualquiera de nuestros servicios en tan solo
                    segundos!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="formulario" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          className="custom-select d-block form-control"
                          onChange={this.handleChange}
                          name="evento"
                          required
                          data-error="Por favor selecciona el servicio que deseas"
                        >
                          <option disabled selected>
                            Seleciona el servicio*
                          </option>
                          <option value="Celebración de cumpleaños">
                            Celebración de cumpleaños
                          </option>
                          <option value="Aniversarios">Aniversarios</option>
                          <option value="Fiestas infantiles">
                            Fiestas infantiles
                          </option>
                          <option value="Declaraciones o propuestas">
                            Declaraciones o propuestas
                          </option>
                          <option value="Despedidas">Despedidas</option>
                          <option value="Cena con amigos">
                            Cena con amigos
                          </option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          onChange={this.handleChange}
                          type="date"
                          className="form-control"
                          name="fecha"
                          required
                          data-error="Escoja una fecha"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          onChange={this.handleChange}
                          type="time"
                          className="form-control"
                          name="hora"
                        />
                        <p>Horario de atención: 04:00 pm a 10:30 pm</p>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          onChange={this.handleChange}
                          type="number"
                          className="form-control"
                          name="numPersonas"
                          min="1"
                          max="20"
                          placeholder="Número de personas"
                          required
                          data-error="INVÁLIDO. Solo se aceptan números"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          onChange={this.handleChange}
                          type="text"
                          className="form-control"
                          name="nombreCliente"
                          placeholder="Nombre completo"
                          minLength={10}
                          maxLength={50}
                          pattern="[A-Za-z ]+"
                          required
                          data-error="INVÁLIDO. Por favor escribe tu nombre correctamente"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          onChange={this.handleChange}
                          type="email"
                          placeholder="Correo electrónico"
                          name="correoCliente"
                          className="form-control"
                          minLength={14}
                          maxLength={64}
                          required
                          data-error="INVÁLIDO. Por favor escribe tu correo electrónico correctamente"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          onChange={this.handleChange}
                          type="number"
                          className="form-control"
                          name="celularCliente"
                          placeholder="Teléfono"
                          minLength={7}
                          maxLength={10}
                          required
                          data-error="INVÁLIDO. Solo se aceptan números"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          onChange={this.handleChange}
                          className="form-control"
                          name="solicitudCliente"
                          placeholder="Solicitudes adicionales"
                          rows={4}
                          minLength={10}
                          maxLength={500}
                          required
                          data-error="Por favor escribe tus solicitudes adicionales"
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="submit-button text-center">
                        <Link to="/confirmacion_reservas">
                          <button
                            type="submit"
                            className="btn btn-common"
                            onClick={() => {
                              this.datos();
                            }}
                          >
                            RESERVAR
                          </button>
                        </Link>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Number_carrito />
      </>
    );
  }
}

export default Reservas;
