// For loop
//For loop array
let carros = ['Fusca', 'Gol', 'Palio', 'Chevette', 'Opala', 'Passat'];


let html = '<ul>';

for (let i in carros) {
    html += '<li>' + carros[i] + '</li>';
}


html += '</ul>';

document.getElementById("demo").innerHTML = html;
