import React, { Component } from "react";
import "../App.css";
import alertify from "alertifyjs";
import "../../node_modules/alertifyjs/build/css/alertify.css";
import "../../node_modules/alertifyjs/build/css/themes/semantic.css";
import emailjs from "emailjs-com";

class Confirma extends Component {
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
    this.sendEmailjs = this.sendEmailjs.bind(this);
  }

  componentDidMount() {
    this.setState({
      evento: localStorage.getItem("evento"),
      fecha: localStorage.getItem("fecha"),
      hora: localStorage.getItem("hora"),
      numPersonas: localStorage.getItem("numPersonas"),
      solicitudCliente: localStorage.getItem("solicitudCliente"),
      nombreCliente: localStorage.getItem("nombreCliente"),
      correoCliente: localStorage.getItem("correoCliente"),
      celularCliente: localStorage.getItem("celularCliente"),
    });
  }

  sendEmailjs(e) {
    e.preventDefault();
    let valores = {
      from_name: this.state.nombreCliente,
      to_name: this.state.nombreCliente,
      to_email: this.state.correoCliente,
      message:
        "evento:" +
        this.state.evento +
        "; fecha:" +
        this.state.fecha +
        "; hora:" +
        this.state.hora +
        "; numPersonas:" +
        this.state.numPersonas +
        "; nombreCliente:" +
        this.state.nombreCliente +
        "; correoCliente:" +
        this.state.correoCliente +
        "; celularCliente:" +
        this.state.celularCliente +
        "; solicitudCliente:" +
        this.state.solicitudCliente,
    };
    emailjs
      .send(
        "service_ndnj4uq",
        "template_qonkhro",
        valores,
        "user_SLROp8OMOhXacRTRrx5KS"
      )
      .then(
        (result) => {
          alertify.set("notifier", "position", "bottom-right");
          alertify.success("Se Actualizo Cantidad Con exito");
          localStorage.removeItem("numPersonas");
          localStorage.removeItem("nombreCliente");
          localStorage.removeItem("evento");
          localStorage.removeItem("correoCliente");
          localStorage.removeItem("hora");
          localStorage.removeItem("solicitudCliente");
          localStorage.removeItem("celularCliente");
          localStorage.removeItem("fecha");
          setTimeout(function () {
            window.location.href = "/home";
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render_table() {
    return (
      <tr>
        <td> {this.state.evento}</td>
        <td> {this.state.fecha}</td>
        <td> {this.state.hora}</td>
        <td> {this.state.numPersonas}</td>
        <td> {this.state.solicitudCliente}</td>
      </tr>
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
                <h3>Revise los datos suministrados y confirme la reserva</h3>
              </div>
            </div>
            <div className="row">
              <div className="heading-title text-center">
                <table
                  id="reservas"
                  className="table table-success table-striped"
                >
                  <thead>
                    <tr>
                      <td>Evento</td>
                      <td>Fecha</td>
                      <td>Hora</td>
                      <td>Numero de personas</td>
                      <td>Solicitudes adicionales</td>
                    </tr>
                  </thead>
                  <tbody id="datosreservas"> {this.render_table()} </tbody>
                </table>

                <div className="submit-button text-center">
                  <button
                    className="btn btn-common"
                    id="btn-reserva"
                    onClick={this.sendEmailjs}
                  >
                    CONFIRMAR RESERVA
                  </button>
                  <a href="/reservas">
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

export default Confirma;
