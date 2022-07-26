//Sintaxe e Operadores

function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = "";

    if (num1 !== num2) {
        saoIguais = "não";
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = "menor";
    let resultado20 = "menor"
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = "maior"
    }

    if (compara20) {
        resultado20 = "maior"
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(comparaNumeros(20, 20));


// exercício Maps

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Stephany", "Admin");
usuarios.set("Jorge", "User");
usuarios.set("Natália", "Admin");

console.log(getAdmins(usuarios));

//Exercício Set

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos (arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));