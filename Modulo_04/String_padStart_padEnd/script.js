/*
let telefone = '5567897' ;

console.log(telefone.padEnd(9,'*'));
*/

let cartao = '1234123412341234'

let lastFour = cartao.slice(-4);
cartaoMascarado = lastFour.padStart(16, '*');

    console.log("Este é seu cartão? " + cartaoMascarado)
