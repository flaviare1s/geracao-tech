// 1. Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
// três e que se encontram no conjunto dos números de 1 até 500.
let soma = 0

for (let i = 3; i <= 500; i+=6) {
  soma += i
}

console.log(soma)
