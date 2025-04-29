// 8. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.A. contendo 10 valores.
const prompt = require("prompt-sync")();

const A = Number(prompt("Digite o valor inicial (A): "));
const R = Number(prompt("Digite a razão (R): "));

console.log("Sequência em P.A. com 10 termos:");
for (let i = 0; i < 10; i++) {
  const termo = A + i * R;
  console.log(termo);
}
