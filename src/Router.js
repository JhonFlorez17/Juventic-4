import React, { Component } from "react";
import "./App.css";
import App from "./App";
import Menu from "./pages/menu";
import Home from "./pages/home";
import About from "./pages/about";
import Servicios from "./pages/servicios";
import Reservas from "./pages/reservas";
import Carrito from "./pages/carrrito";
import Confirm_cart from "./components/confirm_cart";
import Admin from "./components/admin";
import Confirma_Reservas from "./components/confirmacion_reservas";
import Platosadmin from "./components/paneladmin/platosadmin";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <Routers>
        <App>
          <Switch>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/reserva" component={Reservas}></Route>
            <Route path="/carrito" component={Carrito}></Route>
            <Route path="/servicios" component={Servicios}></Route>
            <Route path="/confirm" component={Confirm_cart}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/adm/platos" component={Platosadmin}></Route>
            <Route
              path="/Confirmacion_Reservas"
              component={Confirma_Reservas}
            ></Route>
          </Switch>
        </App>
      </Routers>
    );
  }
}

export default Router;
