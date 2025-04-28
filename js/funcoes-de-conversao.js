// Number()
let numero = '2';
console.log(typeof(numero));

let numero2 = Number(numero)
console.log(typeof(numero2));

// parseFloat()
let numFloat = parseFloat(numero2)
console.log(numFloat)

// parseInt()
let numInt = parseInt(numero2)
console.log(numInt)

// toFixed()
console.log(numFloat.toFixed(2)) // Retorna uma string

// toUpperCase()
let nome = 'Maria'
let maiusculas = nome.toUpperCase()
console.log(maiusculas)

// toLowerCase()
let minusculas = nome.toLowerCase()
console.log(minusculas)
