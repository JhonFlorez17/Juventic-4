import { Component, react } from "react";
import "../App.css";
import { numero_carrito } from "../js/carrito";

class Number_cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
    };
  }

  componentDidMount() {
    numero_carrito();
  }
  render() {
    return (
      <a href="carrito.html" className="back-to-top2">
        <i className="fa fa-cart-arrow-down">
          <span className="number-cart" id="number-cart">
            {this.state.numero}
          </span>
        </i>
      </a>
    );
  }
}

export default Number_cart;
