// Exercicio 1

class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcArea = () => {
      return this.base * this.altura;
    };
  }
}

const retangulo1 = new Retangulo(
  parseFloat(prompt("Digite a altura do retângulo. Ex: 4")),
  parseFloat(prompt("Digite o comprimento do retângulo. Ex: 4"))
);

alert("A area do retângulo é: " + retangulo1.calcArea());

// Exercicio 2

class Conta {
  constructor(nome, correntista, banco, numconta, saldo) {
    this.nome = nome;
    this.correntista = correntista;
    this.banco = banco;
    this.numconta = numconta;
    this.saldo = saldo;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

  setCorrentista(correntista) {
    this.correntista = correntista;
  }

  getCorrentista() {
    return this.correntista;
  }

  setBanco(banco) {
    this.banco = banco;
  }

  getBanco() {
    return this.banco;
  }

  setNumConta(numconta) {
    this.numconta = numconta;
  }

  getNumConta() {
    return this.numconta;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }

  getSaldo() {
    return this.saldo;
  }

  mostrarDados() {
    return `Nome: ${this.nome}, Correntista: ${this.correntista}, Banco: ${this.banco}, Número da Conta: ${this.numconta}, Saldo: ${this.saldo}`;
  }
}

class Corrente extends Conta {
  constructor(nome, correntista, banco, numconta, saldo, saldoespecial) {
    super(nome, correntista, banco, numconta, saldo);
    this.saldoespecial = saldoespecial;
  }

  setSaldoEspecial(saldoespecial) {
    this.saldoespecial = saldoespecial;
  }

  getSaldoEspecial() {
    return this.saldoespecial;
  }

  mostrarDados() {
    return `${super.mostrarDados()}, Saldo Especial: ${this.saldoespecial}`;
  }
}

class Poupanca extends Conta {
  constructor(
    nome,
    correntista,
    banco,
    numconta,
    saldo,
    juros,
    dataVencimento
  ) {
    super(nome, correntista, banco, numconta, saldo);
    this.juros = juros;
    this.dataVencimento = dataVencimento;
  }

  setJuros(juros) {
    this.juros = juros;
  }

  getJuros() {
    return this.juros;
  }

  setDataVencimento(dataVencimento) {
    this.dataVencimento = dataVencimento;
  }

  getDataVencimento() {
    return this.dataVencimento;
  }

  mostrarDados() {
    return `${super.mostrarDados()}, Juros: ${
      this.juros
    }, Data de Vencimento: ${this.dataVencimento}`;
  }
}

let pauloContaCorrente = new Corrente(
  "Paulo",
  "Correntista",
  "Nubank",
  "123456",
  1000,
  500
);

let pauloContaPoupanca = new Poupanca(
  "Paulo",
  "Correntista",
  "Nubank",
  "123456",
  1000,
  500,
  new Date(Date.now()).toLocaleDateString("pt-BR")
);

alert(pauloContaCorrente.mostrarDados());
alert(pauloContaPoupanca.mostrarDados());
