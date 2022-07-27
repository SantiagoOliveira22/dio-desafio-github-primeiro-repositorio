//exer 1 de reduce
function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current; //valor anterior/acumulador com valor atual
  }, 0) // passar o 0 como valor inicial
}

const arr = [1, 2];

console.log(somaNumeros(arr));

//exer 2 de reduce

const lista = [
  {
    name: "sabão em pó",
    preco: 10
  },
  {
    name: "cereal",
    preco: 22
  },
  {
    name: "toalha",
    preco: 25
  }
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current) {
    return prev - current.preco; //valor anterior/acumulador com valor atual
  }, saldoDisponivel)//valor inicial
}

console.log(calculaSaldo(saldoDisponivel, lista));