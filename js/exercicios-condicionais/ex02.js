// 2. Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).
const prompt = require("prompt-sync")()
let nome = prompt('Digite o seu nome: ')
let sexo = prompt('Digite seu sexo: "F ou M": ').toUpperCase()
let estadoCivil = prompt('Qual seu estado civil? ')


if (sexo === 'F' && estadoCivil === 'casada') {
  let tempoCasamento = prompt('Qual o seu tempo de casada em anos? ')
}
