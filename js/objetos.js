let pessoa = {
  nome: "Marta",
  idade: 29,
  cidade: "Fortaleza",
  frameWorks: ["React", "Node.js"],
  linguagens: ["HTML", "CSS", "JavaScript"],
  apresentar: function () {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`;
  },
};

console.log(pessoa.apresentar());

console.log(pessoa.linguagens);

// Incluindo uma propriedade:
pessoa.profissao = "Dev";

console.log(pessoa);

// Alterando uma propriedade:
pessoa.idade = 30;

// Excluindo uma propriedade:
delete pessoa.profissao;

console.log(pessoa);

// Acessando as chaves:
console.log(Object.keys(pessoa));
