const empresas = [
  {
    nome: "Samsung",
    valorDeMercado: 50,
    CEO: "Kim Hyum Suk",
    anoDeCriacao: 1938,
  },
  {
    nome: "Microsoft",
    valorDeMercado: 415,
    CEO: "Satya Nadella",
    anoDeCriacao: 1975,
  },
  {
    nome: "Intel",
    valorDeMercado: 117,
    CEO: "Brian Krzanich",
    anoDeCriacao: 1968,
  },
  {
    nome: "Facebook",
    valorDeMercado: 383,
    CEO: "Mark Zuckerberg",
    anoDeCriacao: 2004,
  },
  { nome: "Spotify",
    valorDeMercado: 30,
    CEO: "Daniel Ek",
    anoDeCriacao: 2006
  },
  { nome: "Apple",
    valorDeMercado: 845,
    CEO: "Tim Cook",
    anoDeCriacao: 1976
  },
];

// 1. Listar o nome de todas as empresas
const nomes = empresas.map((empresas) => empresas.nome);
console.log(nomes);

// 2. Filtrar empresas com valor de mercado maior que 100
const valorMaiorDe100 = empresas.filter(
  (empresa) => empresa.valorDeMercado > 100
);
console.table(valorMaiorDe100);

// 3. Calcular o valor total de mercado de todas as empresas
const valorTotal = empresas.reduce((acc, empresa) => {
  return acc + empresa.valorDeMercado;
}, 0);
console.log(valorTotal);

// 4. Encontrar a empresa mais antiga
let antigo = Infinity;
const anoMaisAntigo = empresas.reduce((acc, empresa) => {
  if (empresa.anoDeCriacao < antigo) {
    antigo = empresa.anoDeCriacao;
  }
}, 0);

const empresaMaisAntiga = empresas.filter(
  (empresa) => empresa.anoDeCriacao == antigo
);
console.table(empresaMaisAntiga);

// 5. Criar um novo array com nome e CEO das empresas
const nomesECEOs = empresas.map(({ nome, CEO }) => ({ nome, CEO }));
console.table(nomesECEOs);
