
let nome = 'Everaldo';
let idade = 37;

/*et frase = 'Meu nome é ' + nome + ' e tenho ' + idade +
    ' anos.';*/

    let frase = `Meu nome é ${nome},tenho ${idade} anos e ano que vem farei ${idade+1} anos.`;

document.querySelector('.frase').innerHTML = frase;