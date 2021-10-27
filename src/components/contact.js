import React, { Component } from "react";
import "../App.css";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact-imfo-box">
          <div className="container">
            <div className="row">
              <div className="col-md-4 arrow-right">
                <i className="fa fa-volume-control-phone" />
                <div className="overflow-hidden">
                  <h4>Teléfono</h4>
                  <p className="lead">2810001</p>
                </div>
              </div>
              <div className="col-md-4 arrow-right">
                <i className="fa fa-envelope" />
                <div className="overflow-hidden">
                  <h4>Email</h4>
                  <p className="lead">restaurante@gmail.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <i className="fa fa-map-marker" />
                <div className="overflow-hidden">
                  <h4>Dirección</h4>
                  <p className="lead">calle 34 # 12 - 6, Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
