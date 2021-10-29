import React, { Component } from "react";
import "../App.css";

class Reservas extends Component {
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
                    ¡Reserva cualquiera de nuestros servicios en tan solo segundos!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="formulario">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <select className="custom-select d-block form-control" onclick="clickEvento(this)" id="evento"
                          name="evento" required data-error="Por favor selecciona el servicio que deseas">
                          <option disabled selected>Seleciona el servicio*</option>
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
                          <option value="Cena con amigos">Cena con amigos</option>
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="date" className="form-control" onblur="clickFecha(this)" id="fecha" name="fecha" required
                          data-error="Escoja una fecha" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="time" className="form-control" onblur="clickHora(this)" id="hora" name="hora" minlength="2" maxlength="20"/>
                        <p>Horario de atención: 04:00 pm a 10:30 pm</p>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="number" className="form-control" onblur="clickPersonas(this)" id="numPersonas"
                          name="numpersonas" placeholder="Número de personas" required
                          data-error="INVÁLIDO. Solo se aceptan números" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="nombreCliente" name="nombreCliente"
                          placeholder="Nombre completo" minlength="10" maxlength="50" pattern="[A-Za-z ]+" required
                          data-error="INVÁLIDO. Por favor escribe tu nombre correctamente" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="email" placeholder="Correo electrónico" id="correoCliente" name="correoCliente"
                          className="form-control" minlength="14" maxlength="64" required
                          data-error="INVÁLIDO. Por favor escribe tu correo electrónico correctamente" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="number" className="form-control" id="celularCliente" name="celularCliente"
                          placeholder="Teléfono" minlength="7" maxlength="10" required
                          data-error="INVÁLIDO. Solo se aceptan números" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input className="form-control" onblur="clickSolicitud(this)" id="solicitudCliente"
                          name="solicitudCliente" placeholder="Solicitudes adicionales" rows="4" minlength="10"
                          maxlength="500" required data-error="Por favor escribe tus solicitudes adicionales" />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="submit-button text-center">
                        <button type="submit" id="buttonID" className="btn btn-common">
                          RESERVAR
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Reservas;
