// 3. Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
// negativos e o percentual de valores negativos e positivos.
const prompt = require("prompt-sync")();

let valor;
let soma = 0;
let quantidade = 0;
let positivos = 0;
let negativos = 0;

do {
  valor = Number(prompt("Digite um número (ou 0 para parar):"));

  if (valor !== 0) {
    soma += valor;
    quantidade++;

    if (valor > 0) {
      positivos++;
    } else {
      negativos++;
    }
  }
} while (valor !== 0);

if (quantidade === 0) {
  console.log("Não foi inserido nenhum valor!");
} else {
  const media = soma / quantidade;
  const percentualPositivos = (positivos / quantidade) * 100;
  const percentualNegativos = (negativos / quantidade) * 100;

  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Positivos: ${positivos}`);
  console.log(`Negativos: ${negativos}`);
  console.log(`% Positivos: ${percentualPositivos.toFixed(2)}%`);
  console.log(`% Negativos: ${percentualNegativos.toFixed(2)}%`);
}
