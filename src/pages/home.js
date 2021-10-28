import React, { Component } from "react";
import "../App.css";
import Carousel_home from "../components/carousel";
import Info from "../components/aboutindex";
import Menu from "../components/menu";
import Servicios from "../components/servicios";
import Comentarios from "../components/comentarios";
import Contact from "../components/contact";

class Home extends Component {
  render() {
    return (
      <>
        <Carousel_home />
        <Info />
        <div className="qt-box qt-background">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <p className="lead ">"Mil sabores en un solo lugar"</p>
                <span className="lead">Michael Strahan</span>
              </div>
            </div>
          </div>
        </div>
        <Menu />
        <Servicios />
        <Contact />
      </>
    );
  }
}

export default Home;
