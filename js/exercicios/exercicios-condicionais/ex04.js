// 4. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
// somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se
// atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.
const prompt = require("prompt-sync")();

let A = Number(prompt("Digite um número inteiro: "));
let B = Number(prompt("Digite outro número inteiro: "));
let soma = A + B;
let multiplicacao = A * B;
let C;

if (A === B) {
  C = soma;
} else {
  C = multiplicacao;
}

console.log(C);
