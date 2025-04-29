// 9. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.G. contendo 10 valores.
const prompt = require("prompt-sync")();

const A = Number(prompt("Digite o valor inicial (A): "));
const R = Number(prompt("Digite a razão (R): "));

console.log("Sequência em P.G. com 10 termos:");

let termo = A;

for (let i = 0; i < 10; i++) {
  console.log(termo);
  termo *= R;
}
