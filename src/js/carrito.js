import alertify from "alertifyjs";
import "../../node_modules/alertifyjs/build/css/alertify.css";
import "../../node_modules/alertifyjs/build/css/themes/semantic.css";

let carrito = {};

export function aumentar() {
  let num_actual = document.getElementById("cantidad").value;
  let num_update = parseInt(num_actual) + parseInt(1);
  return (document.getElementById("cantidad").value = num_update);
}

export function disminuir() {
  let num_actual = document.getElementById("cantidad").value;
  let num_update = parseInt(num_actual) - parseInt(1);
  return (document.getElementById("cantidad").value = num_update);
}

export function vaciar_json() {
  carrito = {};
}
export function enviar_carrito(item) {
  let producto;
  let num_actual = document.getElementById("cantidad").value;
  producto = {
    title: item.nombre,
    precio: item.precio,
    id: item.id,
    cantidad: parseInt(num_actual),
  };

  carrito[producto.id] = { ...producto };
  console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  alertify.set("notifier", "position", "bottom-left");
  alertify.success("Se agrego Con exito al carrito");
}

export function numero_carrito() {
  const number_carrito = document.getElementById("number-cart");
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    const number_actual = Object.keys(carrito).length;
    number_carrito.textContent = number_actual;
  }
}

export function input_modal(id) {
  if (carrito[id]) {
    let num = carrito[id].cantidad;
    console.log(num);
    return (document.getElementById("cantidad").value = num);
  } /*  else {
    return (document.getElementById("cantidad").value = 1);
  } */
}

export function carga_local() {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }
}
