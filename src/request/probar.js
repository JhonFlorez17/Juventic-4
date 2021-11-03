function getMenu() {
  return fetch("http://localhost:3000/articulos.json")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function getBebidas() {
  return fetch("http://localhost:3000/bebidas.json")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function getEnsaladas() {
  return fetch("http://localhost:3000/ensaladas.json")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStaff() {
  return fetch("http://localhost:3000/staff.json")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
export { getMenu, getBebidas, getEnsaladas, getStaff };
