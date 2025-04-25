// 5. Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.
const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));
let dobro = numero * 2;
let triplo = numero * 3;
let resultado;

if (numero > 0) {
  resultado = dobro;
} else if (numero === 0) {
  console.log("Digite um valor diferente de zero!");
} else {
  resultado = triplo;
}

console.log(resultado);
