let curso = ["Noite", "TER-QUI", 18, 22];
console.log(curso);
console.log(typeof curso);

// Array dentro de outro array:
let minhaLista = [26, "Ana", true, "35", curso];
console.log(minhaLista);

// Acessando elementos em um array:
console.log(minhaLista[1]);
console.log(minhaLista[4][1]); // retorna o índice 1 do array 'curso'

// Descobrindo o tamanho de um array:
console.log(minhaLista.length);

console.log(minhaLista[4].length); // retorna o tamanho do array 'curso'

// Alterando o valor de um índice do array:
curso[0] = "Manhã";
console.log(curso);

console.log("=====================");

let frutas = ["maçã", "banaba", "melancia"];
console.log(frutas);

// Inserindo um novo elemento no FINAL do array:
frutas.push("manga");
console.log(frutas);

// Retirando um elemento do FINAL do array:
frutas.pop();
console.log(frutas);

// Adicionando um elemento no INÍCIO do array:
frutas.unshift('abacaxi')
console.log(frutas)

// Removendo um elemento no INÍCIO do array:
frutas.shift()
console.log(frutas)

// Splice adiciona ou remove elementos em um índice específico:
// Para remover: coloca primeiro o index e depois a quantidade de elementos a ser removida:
frutas.splice(0, 2)
console.log(frutas)

// Para adicionar: coloca primeiro o index, depois 0 e depois os elementos a serem adicionados:
frutas.splice(1, 0, 'uva', 'morango', 'abacaxi', 'laranja')
console.log(frutas)

// Ordenar o array
arrayOrdenado = frutas.sort()
console.log(arrayOrdenado)

// Verificar se um elemento existe em um array:
console.log(frutas.includes('maçã'))
