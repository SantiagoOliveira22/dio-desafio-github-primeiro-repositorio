const pessoas1 = {
  nome: "Santiago",
  idade: 30
}

const pessoas2 = {
  nome: "Fernanda",
  idade: 28
}

const animal1 = {
  nome: "Pipoca",
  idade: 5
}

const animal2 = {
  nome: "Kinha",
  idade: 2
}

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

/* console.log(calculaIdade.call(animal2, 30)); */
console.log(calculaIdade.apply(animal2, [30]));