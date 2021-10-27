import React, { Component } from "react";
import "../App.css";

class Servicios extends Component {
  render() {
    return (
      <>
        <div className="stuff-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>Servicios</h2>
                  <p>Organizamos Tu evento para los momentos mas especiales</p>
                </div>
              </div>
            </div>
            <div className="row aling-items-center">
              <div className="col-md-4 col-sm-6">
                <div className="our-team-two">
                  <img src="./images/Cena.png" />
                  <div className="team-content">
                    <h3 className="title">Cenas Empresariales</h3>
                    <span className="post">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <div className="our-team-two">
                  <img src="./images/Cumpleaños.png" />
                  <div className="team-content">
                    <h3 className="title">Cumpleaños</h3>
                    <span className="post">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <div className="our-team-two">
                  <img src="./images/Matrimonio.png" />
                  <div className="team-content">
                    <h3 className="title">Matrimonios</h3>
                    <span className="post">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <a
                    className="btn btn-lg btn-circle btn-outline-new-white mt-5"
                    href="blog.html"
                  >
                    Mas Servicios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Servicios;
