

//document.getElementById('exemplo').innerHTML = "Pedro <button>Clicar</button>"; 
//Exemplo 1 pegando pelo ID

//document.getElementsByClassName('lista')[1].innerHTML = "Item Alterado" 
// Exemplo 2 pegando pelas Classes

//document.getElementsByTagName('button')
// Exemplo 3 pegando pelo nome da Tag

//document.getElementsByName('email') 
// Exemplo 4 pegando pelo nome

function verde() {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('verde');
}

function vermelho() {
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('vermelho');
}

function azul() {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('azul');
}