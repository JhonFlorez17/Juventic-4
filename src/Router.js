import React, { Component } from "react";
import "./App.css";
import App from "./App";
import Menu from "./pages/menu";
import Home from "./pages/home";
import About from "./pages/about";
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
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            {/*  
            <Route path="/reserva" component={}></Route>
            <Route path="/carrito" component={}></Route>
            <Route path="/About" component={}></Route> */}
          </Switch>
        </App>
      </Routers>
    );
  }
}

export default Router;
