import React, { Component } from "react";
import "../App.css";
import Number_carrito from "../components/number_carrito";
import { Link } from "react-router-dom";
import { getServicios } from "../request/probar";

const items = [
  {
    imagen: "images/blog-img-01.jpg",
    titulo: "Celebracion Cumpleaños",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla unde sunt nam in cupiditate quasiaspernatur, nisi iusto hice Placeat similique exercitationem modi sapiente corrupti voluptas pariatur exomnis.",
  },
  {
    imagen: "images/blog-img-02.jpg",
    titulo: "Aniversarios",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla unde sunt nam in cupiditate quasiaspernatur, nisi iusto hice Placeat similique exercitationem modi sapiente corrupti voluptas pariatur exomnis.",
  },
  {
    imagen: "images/blog-img-03.jpg",
    titulo: "Fiestas Infantiles",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla unde sunt nam in cupiditate quasiaspernatur, nisi iusto hice Placeat similique exercitationem modi sapiente corrupti voluptas pariatur exomnis.",
  },
  {
    imagen: "images/blog-img-04.jpg",
    titulo: "Declaraciones",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla unde sunt nam in cupiditate quasiaspernatur, nisi iusto hice Placeat similique exercitationem modi sapiente corrupti voluptas pariatur exomnis.",
  },
  {
    imagen: "images/blog-img-05.jpg",
    titulo: "Despedidas",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla unde sunt nam in cupiditate quasiaspernatur, nisi iusto hice Placeat similique exercitationem modi sapiente corrupti voluptas pariatur exomnis.",
  },
  {
    imagen: "images/blog-img-06.jpg",
    titulo: "Cena Con Amigos",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla unde sunt nam in cupiditate quasiaspernatur, nisi iusto hice Placeat similique exercitationem modi sapiente corrupti voluptas pariatur exomnis.",
  },
];

class Servicios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_pop: [],
    };
    this.load_servicios();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  load_servicios() {
    getServicios().then((jsonR) => {
      this.setState({
        menu_pop: jsonR,
      });
    });
  }

  items_Ser() {
    return this.state.menu_pop.map((item, i) => {
      return (
        <div class="col-lg-4 col-md-6 col-12" key={i}>
          <div class="blog-box-inner">
            <div class="blog-detail">
              <div class="blog-img-box">
                <img class="img-fluid" src={item.imagen} alt="" />
              </div>
              <h4>{item.nombre}</h4>
              <p>{item.descripcion}</p>
              <Link
                class="btn btn-lg btn-circle btn-outline-new-white"
                to="/reserva"
              >
                Reserva en línea
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div class="all-page-title page-breadcrumb-two">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-12">
                <h1>Nuestros Servicios</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="blog-box">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-title text-center">
                  <h2>Servicios</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint nulla unde sunt nam in cupiditate quasi aspernatur,
                    nisi iusto hice Placeat similique exercitationem modi
                    sapiente corrupti voluptas pariatur ex omnis.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">{this.items_Ser()}</div>
          </div>
        </div>
        <Number_carrito />
      </>
    );
  }
}

export default Servicios;
