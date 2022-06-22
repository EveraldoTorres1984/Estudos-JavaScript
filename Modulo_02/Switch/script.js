let dia = 6;
let diaNome = '';

switch (dia) {
    case 6:
    case 7:
        diaNome = 'Fim de semana';
        break;
    default:
        diaNome = 'Dia de Semana';
        break;

}

document.getElementById("dia").innerHTML = "Hoje é " + diaNome;