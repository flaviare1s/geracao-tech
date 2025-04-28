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

// For In

for (chave in pessoa) {
  console.log(chave);
}

console.log("==================");

for (chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
