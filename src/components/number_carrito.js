import { Component, react } from "react";
import "../App.css";
import { numero_carrito } from "../js/carrito";

class Number_cart extends Component {
  componentDidMount() {
    numero_carrito();
  }
  render() {
    return (
      <a href="carrito.html" class="back-to-top2">
        <i class="fa fa-cart-arrow-down">
          <span class="number-cart" id="number-cart">
            0
          </span>
        </i>
      </a>
    );
  }
}

export default Number_cart;
