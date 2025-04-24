// 9. Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * h) – 58;
// ● para mulheres: (62.1 * h) – 44.7. 
const prompt = require("prompt-sync")()

let sexo = prompt('Digite seu sexo: "F ou M": ').toUpperCase()
let altura = Number(prompt('Digite a sua altura: '))
let pesoIdeal

if (sexo === 'M') {
    pesoIdeal = (72.7 * altura) - 58
    console.log(`Você é do sexo masculino e o seu peso ideal é ${pesoIdeal}`)
} else if (sexo === 'F') {
    pesoIdeal = (62.1 * altura) - 44.7
    console.log(`Você é do sexo feminino e o seu peso ideal é ${pesoIdeal}`)
} else {
    console.log('Digite um sexo válido')
}
