import React, { Component } from "react";
import "../App.css";
import "./admin.css";

class Admin extends Component {
  render() {
    if (
      localStorage.getItem("admin_view") == null ||
      localStorage.getItem("admin_view") === false
    ) {
      return (
        <div class="all-page-title page-breadcrumb-two" id="paneladmin">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-12">
                <h1>
                  No tienes acceso al Panel de Administracion, Por favor inicia
                  sesion
                </h1>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="all-page-title page-breadcrumb-two">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-12">
                <h1>Bienvenido al Panel Admin</h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Admin;
