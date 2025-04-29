// 8. Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.
const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite um número inteiro: "));
let num2 = Number(prompt("Digite um outro número inteiro: "));
let num3 = Number(prompt("Digite um outro número inteiro: "));
let temp = 0;

if (num1 < num2) {
  temp = num1;
  num1 = num2;
  num2 = temp;
}

if (num1 < num3) {
  temp = num1;
  num1 = num3;
  num3 = temp;
}

if (num2 < num3) {
  temp = num2;
  num2 = num3;
  num3 = temp;
}

console.log(num1, num2, num3);
