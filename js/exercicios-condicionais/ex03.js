// 3. Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.
const prompt = require("prompt-sync")()

let numero = Number(prompt('Digite um número: '))

numero % 2 === 0 ? console.log('PAR!') : console.log('ÍMPAR!')
