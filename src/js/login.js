import alertify from "alertifyjs";
import "../../node_modules/alertifyjs/build/css/alertify.css";
import "../../node_modules/alertifyjs/build/css/themes/semantic.css";

export function registro(user, contra, contraconfirm) {
  if (!(contra === contraconfirm)) {
    alertify.set("notifier", "position", "bottom-left");
    alertify.error(
      "Las contraseñas no son iguales, Por favor volver a llenar formulario "
    );
    setTimeout(function () {
      window.location.href = "/home";
    }, 3000);
  } else {
    if (localStorage.getItem("admin") == null) {
      const datos = {
        user,
        contra,
        rol: "admin",
      };
      let adddatos = [];
      adddatos.push(datos);
      localStorage.setItem("admin", JSON.stringify(adddatos));
      alertify.set("notifier", "position", "bottom-left");
      alertify.success("Registro completo, Porfavor inicia sesion ");
      setTimeout(function () {
        window.location.href = "/home";
      }, 3000);
    } else {
      const datos = {
        user,
        contra,
        rol: "user",
      };
      let adddatos = JSON.parse(localStorage.getItem("admin"));
      adddatos.push(datos);
      localStorage.setItem("admin", JSON.stringify(adddatos));
      alertify.set("notifier", "position", "bottom-left");
      alertify.success("Registro completo ");
      setTimeout(function () {
        window.location.href = "/home";
      }, 3000);
    }
  }
}

export function login(user, contra) {
  let data = JSON.parse(localStorage.getItem("admin"));
  let band = 0;
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].user === user && data[i].contra === contra) {
        localStorage.setItem("admin_view", true);
        window.location.href = "/admin";
        alertify.set("notifier", "position", "bottom-left");
        alertify.success("Bienvenido al sistema");
        band = 1;
        break;
      }
    }

    if (band === 0) {
      for (let j = 0; j < data.length; j++) {
        if (!(data[j].user === user)) {
          alertify.set("notifier", "position", "bottom-left");
          alertify.error("Usuario Incorrecto");
        }
        if (!(data[j].contra === contra)) {
          alertify.set("notifier", "position", "bottom-left");
          alertify.error("Contraseña Incorrecta");
        }
      }
    }
  } else {
    alertify.set("notifier", "position", "bottom-left");
    alertify.error("No hay usuarios registrado");
    window.location.href = "/home";
  }
}
