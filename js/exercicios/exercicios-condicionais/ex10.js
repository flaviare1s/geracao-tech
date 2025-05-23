// 10. O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
// uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
// Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
// com a tabela abaixo.
// IMC em adultos Condição
// Abaixo de 18,5 Abaixo do peso
// Entre 18,5 e 25 Peso normal
// Entre 25 e 30 Acima do peso
// Acima de 30 obeso
const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite o seu peso: "));
let altura = Number(prompt("Digite a sua altura (em m): "));
let IMC = (peso / altura ** 2).toFixed(2);

if (IMC < 18.5) {
  console.log(`Seu IMC é ${IMC} e você está abaixo do peso.`);
} else if (IMC >= 18.5 && IMC < 25) {
  console.log(`Seu IMC é ${IMC} e você está com o peso normal.`);
} else if (IMC >= 25 && IMC < 30) {
  console.log(`Seu IMC é ${IMC} e você está acima do peso.`);
} else {
  console.log(`Seu IMC é ${IMC} e você está com obesidade.`);
}
