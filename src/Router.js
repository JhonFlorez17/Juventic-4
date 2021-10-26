import React, { Component } from "react";
import "./App.css";
import App from "./App";
import Menu from "./pages/menu";
import Home from "./pages/home";
import About from "./pages/about";
import Servicios from "./pages/servicios";
import Reservas from "./pages/reservas";
import Carrito from "./pages/carrrito";
import {
  BrowserRouter as Routers,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <Routers>
        <App>
          <Redirect from="/" to="/home" />
          <Switch>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/reserva" component={Reservas}></Route>
            <Route path="/carrito" component={Carrito}></Route>
            <Route path="/servicios" component={Servicios}></Route>
          </Switch>
        </App>
      </Routers>
    );
  }
}

export default Router;
