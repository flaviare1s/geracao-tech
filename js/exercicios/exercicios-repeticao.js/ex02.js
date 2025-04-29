// 2. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
// a. A menor altura do grupo;
// b. A maior altura do grupo;

const prompt = require("prompt-sync")();

let menorAltura = Infinity;
let maiorAltura = -Infinity;

for (let i = 1; i <= 15; i++) {
  const altura = Number(prompt(`Digite a altura ${i}: `));

  if (altura < menorAltura) {
    menorAltura = altura;
  }

  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
}

console.log(`A menor altura do grupo é: ${menorAltura}`);
console.log(`A maior altura do grupo é: ${maiorAltura}`);
