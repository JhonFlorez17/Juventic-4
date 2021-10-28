import React, { Component } from "react";
import "../App.css";


class About extends Component {
  render() {
    return (
      <>
        <div className="all-page-title page-breadcrumb-two">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-12">
                <h1>Quienes somos</h1>
              </div>
            </div>
          </div>
      </div>
      
        <div className="about-section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <div className="inner-column">
                  <h1>
                    Conoce nuestra <span> Trayectoria </span>
                  </h1>
                  <h4>Esta es nuestra historia</h4>
                  <p>
                    Somos el primer y único restaurante con 5 estrellas en Bogotá
                    . Desde 2017 estamos brindando experiencias a nuestros
                    visitantes y contamos con diferentes espacios para compartir
                    en familia y amigos.
                  </p>
                  <p>
                    Nuestra receta es unica y secreta en el mundo, ya que es una
                    receta que ha estado por generaciones en nuestra familia y
                    ahora tienes la oportunidad de deleitarla.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img src="images/about-img.jpg" alt className="img-fluid" />
              </div>
              <div class="col-md-12">
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="inner-column">
                    <h1>Nuestro <span> Compromiso </span></h1>
                    <p>Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit nunc, sit amet pulvinar orci nibh ut
                      massa. Proin nec lectus sed nunc placerat semper. Duis hendrerit elit nec sapien porttitor, ut pretium
                      ipsum feugiat. Aenean volutpat porta nisi in gravida. Curabitur pulvinar ligula sed facilisis bibendum.
                      Nullam vitae nulla elit. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    

        <div className="stuff-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2><span>Nuestro equipo de trabajo</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="images\stuff-img-01.jpg" alt className="img-fluid"/>
                    <ul className ="social">
                    <li><a href="#" className ="fa fa-facebook"></a></li>
                    <li><a href="#" className ="fa fa-google-plus"></a></li>
                    <li><a href="#" className ="fa fa-instagram"></a></li>
                    <li><a href="#" className ="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Williamson</h3>
                    <span className="post">Gerente general</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="images\stuff-img-02.jpg"/>
                    <ul className ="social">
                    <li><a href="#" className ="fa fa-facebook"></a></li>
                    <li><a href="#" className ="fa fa-google-plus"></a></li>
                    <li><a href="#" className ="fa fa-instagram"></a></li>
                    <li><a href="#" className ="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>
                    <span className="post">Chef</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="images\stuff-img-03.jpg"/>
                    <ul className ="social">
                    <li><a href="#" className ="fa fa-facebook"></a></li>
                    <li><a href="#" className ="fa fa-google-plus"></a></li>
                    <li><a href="#" className ="fa fa-instagram"></a></li>
                    <li><a href="#" className ="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Kristiana</h3>
                    <span className="post">Panadera</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="images\stuff-img-04.jpg"/>
                    <ul className ="social">
                    <li><a href="#" className ="fa fa-facebook"></a></li>
                    <li><a href="#" className ="fa fa-google-plus"></a></li>
                    <li><a href="#" className ="fa fa-instagram"></a></li>
                    <li><a href="#" className ="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Douglas</h3>
                    <span className="post">Chef</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="images\stuff-img-05.jpg"/>
                    <ul className ="social">
                    <li><a href="#" className ="fa fa-facebook"></a></li>
                    <li><a href="#" className ="fa fa-google-plus"></a></li>
                    <li><a href="#" className ="fa fa-instagram"></a></li>
                    <li><a href="#" className ="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Michell</h3>
                    <span className="post">Auxiliar de cocina</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="images\stuff-img-06.jpg"/>
                    <ul className ="social">
                    <li><a href="#" className ="fa fa-facebook"></a></li>
                    <li><a href="#" className ="fa fa-google-plus"></a></li>
                    <li><a href="#" className ="fa fa-instagram"></a></li>
                    <li><a href="#" className ="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Danny</h3>
                    <span className="post">Auxiliar de cocina</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="customer-reviews-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>Valoración de los clientes</h2>
                  <p>Testimonios de algunos clientes acerca de nuestros productos y servicios</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div claclassNamess="col-md-8 mr-auto ml-auto text-center">
                <div id="reviews" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner mt-4">
                    <div className="carousel-item text-center active">
                      <div className="img-box m-auto">
                        <img className="d-block w-100 rounded-circle" src="images/cliente1.jpg"/>
                      </div>
                      <h5 className="mt-4 mb-0"><strong class="text-warning text-uppercase">Carlos Pérez</strong></h5>
                      <h6 className="text-dark m-0">Ingeniero de sistemas</h6>
                      <p className="m-0 pt-3">Las hamburguesas me encantaron, desde que las probé solo pienso cuando me iré a
                        comer otra.</p>
                    </div>
                    <div className="carousel-item text-center">
                      <div className="img-box m-auto">
                        <img className="d-block w-100 rounded-circle" src="images/cliente2.jpg"/>
                      </div>
                      <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Ana Peralta</strong></h5>
                      <h6 className="text-dark m-0">Ama de casa</h6>
                      <p className="m-0 pt-3">Llenó mis expectativas. El servicio que me brindaron para el cumpleaños de mi hijo
                        fue magnifico. Todos los niños quedaron contentos. Los recomendaré.</p>
                    </div>
                    <div className="carousel-item text-center">
                      <div className="img-box m-auto">
                        <img className="d-block w-100 rounded-circle" src="images/cliente3.jpg"/>
                      </div>
                      <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Daniel López</strong></h5>
                      <h6 className="text-dark m-0">Estudiante</h6>
                      <p className="m-0 pt-3">Me encantá visitar este lugar con mis amigos, pasamos un rato agradable y las
                        comidas son muy deliciosas.</p>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#reviews" role="button" data-slide="prev">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#reviews" role="button" data-slide="next">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    <span className="sr-only">Next</span>
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

export default About;