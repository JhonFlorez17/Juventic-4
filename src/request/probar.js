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

/* -------------------------------------- */

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

/* ----------------------------------- */

function getServicios() {
  return fetch("http://localhost:64684/api/servicion")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function NewServicio(data) {
  return fetch("http://localhost:64684/api/servicion", {
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

function DeleteServicio(id) {
  return fetch("http://localhost:64684/api/servicion/" + id, {
    method: "DELETE",
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function UpdateServicio(data) {
  return fetch("http://localhost:64684/api/servicion/", {
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

/* ----------------------------------- */

function getEmpleado() {
  return fetch("http://localhost:64684/api/empleado")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function NewEmpleado(data) {
  return fetch("http://localhost:64684/api/empleado", {
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

function DeleteEmpleado(id) {
  return fetch("http://localhost:64684/api/empleado/" + id, {
    method: "DELETE",
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function UpdateEmpleado(data) {
  return fetch("http://localhost:64684/api/empleado/", {
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

/* ----------------------------------- */

function getAbout() {
  return fetch("http://localhost:64684/api/about")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function DeleteAbout(id) {
  return fetch("http://localhost:64684/api/about/" + id, {
    method: "DELETE",
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function UpdateAbout(data) {
  return fetch("http://localhost:64684/api/about/", {
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

/* ----------------------------------- */

function getComentario() {
  return fetch("http://localhost:64684/api/comentario")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function NewComentario(data) {
  return fetch("http://localhost:64684/api/comentario", {
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

function DeleteComentario(id) {
  return fetch("http://localhost:64684/api/comentario/" + id, {
    method: "DELETE",
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

function UpdateComentario(data) {
  return fetch("http://localhost:64684/api/comentario/", {
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
  getServicios,
  NewServicio,
  DeleteServicio,
  UpdateServicio,
  getEmpleado,
  NewEmpleado,
  DeleteEmpleado,
  UpdateEmpleado,
  getComentario,
  NewComentario,
  UpdateComentario,
  DeleteComentario,
};
