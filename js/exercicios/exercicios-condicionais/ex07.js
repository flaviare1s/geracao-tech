// 7. Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
// imprimir o resultado desta operação.
const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0) {
  console.log(numero + 5);
} else {
  console.log(numero + 8);
}
