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

function getPlatos() {
  return fetch("http://localhost:64684/api/platos")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function NewPlato(data) {
  return fetch("http://localhost:64684/api/platos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function DeletePlato(id) {
  return fetch("http://localhost:64684/api/platos/" + id, {
    method: "DELETE",
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function UpdatePlato(data) {
  return fetch("http://localhost:64684/api/platos/", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export {
  getMenu,
  getBebidas,
  getEnsaladas,
  getStaff,
  getPlatos,
  NewPlato,
  DeletePlato,
  UpdatePlato,
};
