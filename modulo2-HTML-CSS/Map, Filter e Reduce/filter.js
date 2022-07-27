// numeros pares

function filtraPares() {
  const array = [1, 2, 5, 8, 10, 12];

  return array.filter(function (item) {
    return item % 2 === 0;
  })
}

console.log("Números pares são ...", filtraPares());


// numeros impares
function filtraImpares() {
  const array = [1, 2, 5, 8, 10, 12];

  return array.filter(function (item) {
    return item % 2 !== 0;
  })
}

console.log("Numeros impares são ...", filtraImpares());