class Pessoa {
  #idade;
  constructor(nome, idade) {
    this.nome = nome;
    this.#idade = idade;
  }

  falar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.#idade}!`);
  }

  puxarAssunto() {
    console.log(`Tá quente hoje, né? Meu nome é ${this.nome}.`);
  }

  getIdade() {
    return this.#idade;
  }

  setIdade(idade) {
    this.#idade = idade;
  }
}

const pessoa1 = new Pessoa("Maria", 32);

pessoa1.puxarAssunto();
console.log(pessoa1.idade)
console.log(pessoa1.getIdade())
pessoa1.falar()

pessoa1.setIdade(33)
pessoa1.falar()

class Estudante extends Pessoa {
	constructor(nome, idade, curso, turno) {
		super(nome, idade);
		this.curso = curso
		this.turno = turno
	}

	detalhesEstudante() {
		return `Meu nome é ${this.nome} e curso ${this.curso}`
	}
}

const estudante1 = new Estudante('José', 32, 'ADS', 'noite')

console.log(estudante1.detalhesEstudante())
