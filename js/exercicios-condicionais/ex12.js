// 12. Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
// 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
// aproveitamento, usando a fórmula:
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
// suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a
// mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
// Média de aproveitamento Conceito
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E 
const prompt = require("prompt-sync")();

let nome = prompt('Digite seu nome ')
let id = prompt('Digite sua matrícula: ')
let nota1 = Number(prompt('Digite a 1ª nota: '))
let nota2 = Number(prompt('Digite a 2ª nota: '))
let nota3 = Number(prompt('Digite a 3ª nota: '))
let ME = Number(prompt('Digite a nota média dos exercícios avaliativos: '))
let MA = (nota1 + nota2 * 2 + nota3 * 3 + ME)/7

if (MA >= 90) {
  console.log(`${nome}, com matrícula ${id}, obteve conceito "A", média de aproveitamento ${MA} e foi APROVADO!`)
} else if (MA >= 75 && MA < 90) {
  console.log(`${nome}, com matrícula ${id}, obteve conceito "B", média de aproveitamento ${MA} e foi APROVADO!`)
} else if (MA >= 60 && MA < 75) {
  console.log(`${nome}, com matrícula ${id}, obteve conceito "C", média de aproveitamento ${MA} e foi APROVADO!`)
} else if (MA >= 40 && MA < 60) {
  console.log(`${nome}, com matrícula ${id}, obteve conceito "D", média de aproveitamento ${MA} e foi REPROVADO!`)
} else {
  console.log(`${nome}, com matrícula ${id}, obteve conceito "E", média de aproveitamento ${MA} e foi REPROVADO!`)
}
