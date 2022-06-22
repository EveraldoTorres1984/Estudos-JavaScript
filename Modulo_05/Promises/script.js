function pegarTemperatura() {
    return new Promise(function (resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function () {
            resolve('40 na sombra');
        }, 2000);
    });
}

//Usando a Promise

let temp = pegarTemperatura();
temp.then(function (resultado) {
    console.log("Temperatura: " + resultado)
});

temp.catch(function (error) {
    console.log("Deu Erro!")
});







