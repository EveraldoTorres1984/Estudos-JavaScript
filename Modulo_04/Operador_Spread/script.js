
/*
let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8];

console.log(outros);
*/

/*
let info = {
    nome: 'Everaldo',
    sobrenome: 'Torres Nel Jr',
    idade: 37
};

let novasInfos = {
    ...info,
    cidade: 'Rio Claro',
    estado: 'SP'
}

console.log(novasInfos)

*/

/* *** Operador Rest ***

function adicionar(...numeros){
    console.log(numeros)
}

adicionar(1,2,3,4,5,6,7,8,9,10,11)
*/

// Spread e Rest

function adicionar(nomes, ...novosNomes) {

    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];
    return novoConjunto;

}
let nomes = ["Everaldo", "Evandro"];

let outros = adicionar(nomes, "Camila", "Debora")

console.log(outros);

