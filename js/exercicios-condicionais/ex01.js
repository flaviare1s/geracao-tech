// 1. Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C
const prompt = require("prompt-sync")();

let a = Number(prompt("Digite o valor de A: "));
let b = Number(prompt("Digite o valor de B: "));
let c = Number(prompt("Digite o valor de C: "));
let soma = a + b;

if (a + b < c) {
  console.log(`${a} + ${b} = ${soma}, e não é maior que ${c}`);
} else {
  console.log(`${a} + ${b} = ${soma}, e é maior que ${c}`);
}
