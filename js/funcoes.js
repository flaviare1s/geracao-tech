// Declaração de funções
function saudacao() {
  console.log("Olá Mundo!");
}

saudacao();

// Funções com parâmetros
function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(2, 3));

// Funções como Expressões
const multiplicar = function (n1, n2) {
  return n1 * n2;
};

console.log(multiplicar(2, 3));

// Arrow Function

const subtracao = (n1, n2) => {
  return n1 - n2;
};

console.log(subtracao(2, 3));

// Escopo de funções
function minhaFuncao() {
  let x = 10;
  console.log(`Dentro da função: ${x}`);
}

minhaFuncao();

// console.log(`Fora da função: ${x}`) --> Fora da função: vai dar erro!

// Escopo Global - Variáveis definidas fora de uma função

let y = 20;

function outraFuncao() {
  console.log(`Dentro da função: ${y}`);
}

outraFuncao();

console.log(`Fora da função: ${y}`);

// Funções Aninhadas
function criarSaudacao(nome) {
  function saudar() {
    return `Bom dia, ${nome}!`;
  }
  return saudar();
}

console.log(criarSaudacao("Maria"));

// Função Callback
function processar(funcaoCallback) {
  console.log("Processando...");
  funcaoCallback();
}

processar(() => {
  console.log("Callback executado!");
});
