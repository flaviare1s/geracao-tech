// 7. Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de
// N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.
const prompt = require("prompt-sync")();

let n = Number(prompt("Qual número você quer saber a tabuada (de 1 a 10)? "));
let i = 0;

while (i <= 10) {
  console.log(`${i} x ${n} = ${n * i}`);
  i++;
}
