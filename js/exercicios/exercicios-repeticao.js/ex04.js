// 4. Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.
const prompt = require("prompt-sync")();

let intervalo1 = 0;
let intervalo2 = 0;
let intervalo3 = 0;
let intervalo4 = 0;
let quantidade = 0;

let numero;

do {
  numero = Number(prompt("Digite um número (negativo para parar): "));

  if (numero >= 0 && numero <= 100) {
    quantidade++;

    switch (true) {
      case numero <= 25:
        intervalo1++;
        break;
      case numero <= 50:
        intervalo2++;
        break;
      case numero <= 75:
        intervalo3++;
        break;
      case numero <= 100:
        intervalo4++;
        break;
    }
  }
} while (numero >= 0);

console.log(`Quantidade de números entre 0 e 100: ${quantidade}`);
console.log(`Intervalo [0-25]: ${intervalo1}`);
console.log(`Intervalo [26-50]: ${intervalo2}`);
console.log(`Intervalo [51-75]: ${intervalo3}`);
console.log(`Intervalo [76-100]: ${intervalo4}`);
