const respuesta = prompt("Ingresa tu edad");

// let mensaje = "";
// if (respuesta > 18) {
//   mensaje = "Es mayor de edad";
// } else {
//   mensaje = "Es menor de edad";
// }

let mensaje = respuesta > 18 ? "Es mayor de edad" : "Es menor de edad";

alert(mensaje);

// ---------------------------

let error = false;
do {
  let respuesta2 = prompt("Ingresa un numero entre 10 y 20");
  // let mensaje2 = "";
  // if (isNaN(respuesta2)) {
  //   mensaje2 = "El valor debe ser numérico";
  // } else if (respuesta2 < 10 || respuesta2 > 20) {
  //   mensaje2 = "El valor debe ser entre 10 y 20";
  // } else {
  //   mensaje2 = `El valor ingresado es ${respuesta2}`;
  //   error = false;
  // }

  let mensaje2 = isNaN(respuesta2)
    ? "El valor debe ser numérico"
    : respuesta2 < 10 || respuesta2 > 20
    ? "El valor debe ser entre 10 y 20"
    : `El valor ingresado es ${respuesta2}`;
  error = isNaN(respuesta2) || respuesta2 < 10 || respuesta2 > 20;
  alert(mensaje2);
} while (error);
