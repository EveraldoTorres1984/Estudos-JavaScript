
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar: function () {
        this.ligado = true;
        console.log("Pronto pra partir");
    },
    acelerar: function () {
        if (this.ligado == true) {
            console.log("acelerando!!")
        }else{
            console.log(this.nome + " " + this.modelo +" não está ligado!");
        }
    }

};

console.log("Modelo: " + carro.modelo);

carro.ligar();
carro.acelerar();






