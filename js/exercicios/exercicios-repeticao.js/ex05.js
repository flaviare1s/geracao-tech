// 5. Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
// números lidos. O número que encerrará a leitura será zero.
const prompt = require("prompt-sync")();

let numero;
let totalNumeros = 0;
let totalPares = 0;
let totalImpares = 0;
let somaPares = 0;
let somaTotal = 0;

do {
  numero = Number(prompt("Digite um número positivo (0 para encerrar): "));

  if (numero > 0) {
    totalNumeros++;
    somaTotal += numero;

    if (numero % 2 === 0) {
      totalPares++;
      somaPares += numero;
    } else {
      totalImpares++;
    }
  }
} while (numero !== 0);

const mediaPares = totalPares > 0 ? somaPares / totalPares : 0;
const mediaGeral = totalNumeros > 0 ? somaTotal / totalNumeros : 0;

console.log(`Quantidade de números pares: ${totalPares}`);
console.log(`Quantidade de números ímpares: ${totalImpares}`);
console.log(`Média dos valores pares: ${mediaPares.toFixed(2)}`);
console.log(`Média geral: ${mediaGeral.toFixed(2)}`);
