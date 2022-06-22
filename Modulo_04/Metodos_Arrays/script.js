let lista = ['45', '50', '20', '10'];
let lista2 = [];

/* let res = lista.toString();
let res = lista.join(' - ');
let res = lista.indexOf('Farinha');
lista.pop(); - Remove o último item do Array
lista.shift(); - Remove o primeiro item do Array
lista.push('Leite');
lista[3] = 'Ovos Marrons';
lista.splice(1, 1); ***Removendo Itens do Array
let res = lista.concat(lista2); ***Concatenando os dois Arrays***
lista.sort(); ***Ordenando o Array***
lista.reverse(); *** Ordem reversa do Array*** 

 *** Método 1 ***
lista2 = lista.map(function (item) {
    return item * 2;
});

    *** Método 2 ***
for( let i in lista){
    lista2.push(lista[i] * 2);
}


lista2 = lista.filter(function (item) {
    if (item < 20) {
        return true;
    } else {
        return false;
    }
});     

lista2 = lista.every(function (item) {
    return (item > 3)? true : false;
}) */

lista2 = lista.find(function (item) {
    return (item == 10) ? true : false;
});

let res = lista2;



console.log(res);