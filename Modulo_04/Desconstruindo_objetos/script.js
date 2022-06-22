let pessoa = {
    nome: 'Everaldo',
    sobrenome: 'Torres Nel Junior',
    idade: 37,
    social: {
        facebook: 'Everaldo Torres',
        instagram: {
            url: '@everaldo',
            seguidores: 50
        }
    },
    /*
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    } */
}


/*        ***Desconstruindo o Objeto ***
let {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade.toString()) */


 /*      *** Pegando informações de dentro de um objeto *** 
 let { nome, idade, social: { instagram } } = pessoa;

console.log(nome, idade, instagram); */

 /* function pegarNomeCompleto(obj) {
    return obj.nome + ' ' + obj.sobrenome;
} */

function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url: instagram}}}){
return `${nome} ${sobrenome} (Siga em ${instagram})`;
}

console.log(pegarNomeCompleto(pessoa))
