// 6. Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são
// VERDADEIROS ou FALSOS.
const prompt = require("prompt-sync")()

let valor1 = prompt("Digite o primeiro valor (true/false): ") === "true";
let valor2 = prompt("Digite o segundo valor (true/false): ") === "true";

if (valor1 === true && valor2 === true) {
  console.log("Ambos são VERDADEIROS");
} else if (valor1 === false && valor2 === false) {
  console.log("Ambos são FALSOS");
} else {
  console.log("Os valores são diferentes (um verdadeiro e outro falso)");
}
