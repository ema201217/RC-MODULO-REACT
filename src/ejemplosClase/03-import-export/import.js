
import { sumar, restar, dividir, multiplicar } from "./export";

const calculadora = (n1, n2, operation) => {
  switch (operation) {
    case "sumar":
      return sumar(n1, n2);
    case "restar":
      return restar(n1, n2);
    case "multiplicar":
      return multiplicar(n1, n2);
    case "dividir":
      return dividir(n1, n2);
    case undefined:
      return "Debe colocar una operación matemática";
    default:
      return "La operación es invalida";
  }
};

// const resultado = calculadora(9, 2, "dividir");
// console.log(resultado);
