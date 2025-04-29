// 10. Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de
// A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 
const prompt = require("prompt-sync")();

const A = Number(prompt("Digite um número: "));
let fatorial = 1;

for (let i = A; i > 1; i--) {
  fatorial *= i;
}

console.log(`${A}! = ${A} X ${A - 1} X ${A - 2} X ${A - 3} X ${A - 4} = ${fatorial}`);
